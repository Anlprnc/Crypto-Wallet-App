import React, { useState } from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';

export default function SendScreen() {
  const [amount, setAmount] = useState('766');

  const handleNumberPress = (num: string) => {
    if (num === 'C') {
      setAmount('0');
    } else if (num === '⌫') {
      setAmount((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'));
    } else if (num === '.') {
      if (!amount.includes('.')) {
        setAmount((prev) => prev + '.');
      }
    } else {
      setAmount((prev) => (prev === '0' ? num : prev + num));
    }
  };

  const quickAmounts = ['$10', '$100', '$500', '$1000'];
  const keypadNumbers = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['$', '0', '.', '⌫'],
  ];

  return (
    <View className="flex-1 bg-gradient-to-b from-slate-900 to-blue-900 pt-16">
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View className="flex-row items-center px-5 mb-10">
        <TouchableOpacity className="w-10 h-10 rounded-full bg-white/10 items-center justify-center mr-5">
          <Text className="text-white text-base">✕</Text>
        </TouchableOpacity>
        <View className="flex-1">
          <Text className="text-gray-400 text-sm mb-2">To:</Text>
          <View className="flex-row items-center">
            <View className="w-8 h-8 rounded-full bg-blue-500 items-center justify-center mr-2">
              <Text className="text-white text-sm font-semibold">A</Text>
            </View>
            <Text className="text-white text-base font-medium mr-2">Alica</Text>
            <View className="w-5 h-5 rounded-full bg-green-500 items-center justify-center">
              <Text className="text-white text-xs">✓</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Amount Section */}
      <View className="items-center mb-10">
        <View className="flex-row items-center mb-5">
          <View className="w-6 h-6 rounded-full bg-orange-500 mr-2" />
          <Text className="text-gray-400 text-sm">Crypto wallet</Text>
        </View>

        <Text className="text-white text-5xl font-light mb-2">${amount}.00</Text>
        <Text className="text-gray-400 text-base mb-8">0.0079 BTC</Text>

        <Text className="text-gray-400 text-sm">Enter amount:</Text>
      </View>

      {/* Quick Amount Buttons */}
      <View className="flex-row justify-between px-5 mb-8">
        {quickAmounts.map((quickAmount) => (
          <TouchableOpacity key={quickAmount} className="bg-white/10 px-4 py-2 rounded-lg" onPress={() => setAmount(quickAmount.substring(1))}>
            <Text className="text-white text-sm">{quickAmount}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Numeric Keypad */}
      <View className="px-5 mb-8">
        {keypadNumbers.map((row, rowIndex) => (
          <View key={rowIndex} className="flex-row justify-between mb-4">
            {row.map((key) => (
              <TouchableOpacity
                key={key}
                className={`w-14 h-14 rounded-full items-center justify-center ${key === '⌫' ? 'bg-red-500' : 'bg-white/10'}`}
                onPress={() => handleNumberPress(key)}
              >
                <Text className={`text-lg font-medium ${key === '⌫' ? 'text-white' : 'text-white'}`}>{key}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      {/* Send Button */}
      <TouchableOpacity className="absolute bottom-24 right-5 w-14 h-14 rounded-full bg-blue-500 items-center justify-center">
        <Text className="text-white text-2xl">✓</Text>
      </TouchableOpacity>
    </View>
  );
}

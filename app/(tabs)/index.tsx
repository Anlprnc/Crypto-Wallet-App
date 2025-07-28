import React from 'react';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const cryptoData = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      amount: '0.0086 BTC',
      value: '$584.00',
      change: '+14.32',
      color: 'bg-orange-500',
      chartColor: 'text-green-400',
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      amount: '0.10 ETH',
      value: '$360.30',
      change: '-2.15',
      color: 'bg-indigo-500',
      chartColor: 'text-red-400',
    },
  ];

  return (
    <View className="flex-1 bg-gradient-to-b bg-black from-slate-900 to-blue-900">
      <StatusBar barStyle="light-content" />

      <ScrollView className="flex-1 pt-16">
        {/* Header */}
        <View className="flex-row items-center justify-between px-5 mb-8">
          <View className="flex-row items-center">
            <View className="w-8 h-8 rounded-full bg-orange-500 items-center justify-center mr-3">
              <Text className="text-white text-xs font-bold">₿</Text>
            </View>
            <Text className="text-gray-400 text-sm">0xA1z...vNp451xe ▼</Text>
          </View>
        </View>

        {/* Balance Card */}
        <View className="items-center mb-8">
          <Text className="text-gray-400 text-sm mb-2">Current Wallet Balance</Text>
          <Text className="text-white text-5xl font-light mb-1">$23,976.00</Text>
          <Text className="text-green-400 text-base">+14.32%</Text>
        </View>

        {/* Action Buttons */}
        <View className="flex-row justify-center gap-6 mb-8 px-5">
          <TouchableOpacity className="items-center">
            <View className="w-12 h-12 rounded-full bg-blue-500 items-center justify-center mb-2">
              <Text className="text-white text-xl">+</Text>
            </View>
            <Text className="text-white text-xs">Add</Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center">
            <View className="w-12 h-12 rounded-full bg-white/10 items-center justify-center mb-2">
              <Text className="text-white text-xl">↗</Text>
            </View>
            <Text className="text-white text-xs">Send</Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center">
            <View className="w-12 h-12 rounded-full bg-white/10 items-center justify-center mb-2">
              <Text className="text-white text-xl">↓</Text>
            </View>
            <Text className="text-white text-xs">Request</Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center">
            <View className="w-12 h-12 rounded-full bg-white/10 items-center justify-center mb-2">
              <Text className="text-white text-xl">📋</Text>
            </View>
            <Text className="text-white text-xs">Bill</Text>
          </TouchableOpacity>
        </View>

        {/* Portfolio Section */}
        <View className="px-5">
          {/* Bitcoin Card */}
          <View className="bg-white/5 rounded-3xl p-5 mb-4 backdrop-blur-lg">
            <View className="flex-row items-center justify-between mb-4">
              <View className="flex-row items-center">
                <View className="w-10 h-10 rounded-full bg-orange-500 items-center justify-center mr-3">
                  <Text className="text-white text-sm font-bold">₿</Text>
                </View>
                <View>
                  <Text className="text-white text-base font-semibold">BTC</Text>
                  <Text className="text-gray-400 text-sm">Bitcoin</Text>
                </View>
              </View>
              <View className="items-end">
                <Text className="text-white text-lg font-semibold">$23,976.00</Text>
                <Text className="text-green-400 text-sm">+14.32</Text>
              </View>
            </View>

            {/* Mini Chart Placeholder */}
            <View className="h-16 bg-white/5 rounded-lg items-center justify-center">
              <Text className="text-green-400 text-xs">📈 Mini Chart</Text>
            </View>
          </View>

          {/* Other Crypto Assets */}
          {cryptoData.map((crypto, index) => (
            <View key={index} className="flex-row items-center justify-between py-4 border-b border-white/5">
              <View className="flex-row items-center">
                <View className={`w-10 h-10 rounded-full ${crypto.color} items-center justify-center mr-3`}>
                  <Text className="text-white text-sm font-bold">{crypto.symbol.charAt(0)}</Text>
                </View>
                <View>
                  <Text className="text-white text-base font-medium">{crypto.symbol}</Text>
                  <Text className="text-gray-400 text-sm">{crypto.name}</Text>
                </View>
              </View>

              <View className="flex-row items-center">
                <Text className={`text-xs mr-3 ${crypto.chartColor}`}>📊</Text>
                <View className="items-end">
                  <Text className="text-white text-sm">{crypto.amount}</Text>
                  <Text className="text-gray-400 text-xs">{crypto.value}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

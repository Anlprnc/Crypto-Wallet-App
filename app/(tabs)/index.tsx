import { Charts } from '@/components/Charts';
import { IconSymbol } from '@/components/ui/IconSymbol';
import React, { useState } from 'react';
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

  const [activeButton, setActiveButton] = useState<string | null>(null);

  return (
    <View className="flex-1 bg-gradient-to-b bg-black from-slate-900 to-blue-900">
      <StatusBar barStyle="light-content" />

      <ScrollView className="flex-1 pt-16">
        <View className="flex items-center w-30 justify-center px-4 mb-8 bg-gray-300/25 rounded-3xl mx-auto p-1">
          <View className="flex-row items-center">
            <View className="w-8 h-8 rounded-full bg-orange-500 items-center justify-center mr-3">
              <Text className="text-white text-xs font-bold">₿</Text>
            </View>
            <View className="flex-row items-center gap-2">
              <Text className="text-white text-sm">0xA1z...vNp451xe</Text>
              <IconSymbol name="chevron.down" size={15} color="white" />
            </View>
          </View>
        </View>

        <View className="items-center mb-8">
          <Text className="text-white text-md mb-4">Current Wallet Balance</Text>
          <Text className="text-white text-6xl font-semibold mb-1">$23,976.00</Text>
          <Text className="text-green-400 text-base">+14.32%</Text>
        </View>

        <View className="flex-row justify-center gap-10 mb-8">
          <TouchableOpacity className="items-center" onPress={() => setActiveButton(activeButton === 'add' ? null : 'add')}>
            <View className={`w-20 h-20 rounded-full ${activeButton === 'add' ? 'bg-blue-500' : 'bg-white/10'} items-center justify-center mb-2`}>
              <Text className="text-white text-4xl">+</Text>
            </View>
            <Text className="text-white text-md">Add</Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center" onPress={() => setActiveButton(activeButton === 'send' ? null : 'send')}>
            <View className={`w-20 h-20 rounded-full ${activeButton === 'send' ? 'bg-blue-500' : 'bg-white/10'} items-center justify-center mb-2`}>
              <Text className="text-white text-4xl">↗</Text>
            </View>
            <Text className="text-white text-md">Send</Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center" onPress={() => setActiveButton(activeButton === 'request' ? null : 'request')}>
            <View className={`w-20 h-20 rounded-full ${activeButton === 'request' ? 'bg-blue-500' : 'bg-white/10'} items-center justify-center mb-2`}>
              <Text className="text-white text-4xl">↓</Text>
            </View>
            <Text className="text-white text-md">Request</Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center" onPress={() => setActiveButton(activeButton === 'bill' ? null : 'bill')}>
            <View className={`w-20 h-20 rounded-full ${activeButton === 'bill' ? 'bg-blue-500' : 'bg-white/10'} items-center justify-center mb-2`}>
              <IconSymbol name="arrow.down.to.line" size={32} color="white" />
            </View>
            <Text className="text-white text-md">Bill</Text>
          </TouchableOpacity>
        </View>

        <View className="px-5">
          <View className="bg-blue-600/20 overflow-hidden rounded-3xl p-5 mb-4 backdrop-blur-lg">
            <View className="flex-row items-center justify-between mb-4">
              <View className="flex-row items-center">
                <View className="w-16 h-16 rounded-full bg-orange-500 items-center justify-center mr-3">
                  <Text className="text-white text-xl font-bold">₿</Text>
                </View>
                <View>
                  <Text className="text-white text-lg font-semibold">BTC</Text>
                  <Text className="text-gray-400 text-md">Bitcoin</Text>
                </View>
              </View>
              <View className="items-end">
                <Text className="text-white text-xl font-semibold">$23,976.00</Text>
                <Text className="text-green-400 text-lg">+14.32</Text>
              </View>
            </View>
            <View className="-ml-14 rounded-lg -mb-5">
              <ScrollView horizontal showsHorizontalScrollIndicator={false} aria-hidden={true} className="mr-2">
                <Charts width={500} height={100} />
              </ScrollView>
            </View>
          </View>

          {cryptoData.map((crypto, index) => (
            <View key={index} className="flex-row items-center justify-between py-4 border-b border-white/5">
              <View className="flex-row items-center w-32">
                <View className={`w-16 h-16 rounded-full ${crypto.color} items-center justify-center mr-3`}>
                  <Text className="text-white text-xl font-bold">{crypto.symbol.charAt(0)}</Text>
                </View>
                <View>
                  <Text className="text-white text-xl font-medium">{crypto.symbol}</Text>
                  <Text className="text-gray-400 text-lg">{crypto.name}</Text>
                </View>
              </View>

              <View className="w-32 h-16 -ml-12 items-center justify-center">
                <Charts width={150} height={50} />
              </View>

              <View className="w-32 items-end">
                <Text className="text-white text-xl">{crypto.amount}</Text>
                <Text className="text-gray-400 text-lg">{crypto.value}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

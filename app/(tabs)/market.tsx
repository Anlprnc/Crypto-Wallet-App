import React from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';

export default function MarketScreen() {
  return (
    <View className="flex-1 bg-black pt-16">
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View className="flex-row items-center px-5 mb-8">
        <TouchableOpacity className="w-10 h-10 rounded-full bg-white/10 items-center justify-center mr-5">
          <Text className="text-white text-lg">←</Text>
        </TouchableOpacity>
        <Text className="text-white text-lg font-semibold">Market</Text>
      </View>

      {/* Ethereum Card */}
      <View className="bg-white/5 mx-5 rounded-3xl p-5 backdrop-blur-lg">
        <View className="flex-row justify-between items-center mb-8">
          <View className="flex-row items-center">
            <View className="w-10 h-10 rounded-full bg-indigo-500 mr-3" />
            <View>
              <Text className="text-white text-base font-semibold">Ethereum</Text>
              <Text className="text-gray-400 text-sm">$3603,05</Text>
            </View>
          </View>
          <View className="bg-white/10 px-3 py-1.5 rounded-lg">
            <Text className="text-white text-xs">24h ▼</Text>
          </View>
        </View>

        {/* Chart Placeholder */}
        <View className="h-48 bg-white/5 rounded-xl items-center justify-center mb-8">
          <Text className="text-gray-400 text-base">📈 Grafik buraya gelecek</Text>
        </View>

        {/* Action Buttons */}
        <View className="flex-row gap-3">
          <TouchableOpacity className="flex-1 py-4 rounded-xl bg-red-500/20 border border-red-500 items-center">
            <Text className="text-white text-base font-semibold">Sell</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 py-4 rounded-xl bg-white items-center">
            <Text className="text-black text-base font-semibold">Buy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

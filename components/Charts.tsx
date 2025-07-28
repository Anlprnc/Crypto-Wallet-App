import { View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

interface ChartsProps {
  width?: number;
  height?: number;
}

export function Charts({ width = 500, height = 100 }: ChartsProps) {
  const data = [{ value: 20 }, { value: 50 }, { value: 30 }, { value: 45 }, { value: 15 }, { value: 30 }, { value: 26 }, { value: 40 }];

  return (
    <View>
      <LineChart
        areaChart
        data={data}
        width={width}
        height={height}
        hideDataPoints1
        hideAxesAndRules
        startFillColor="rgb(0, 255, 0)"
        startOpacity={0.8}
        endFillColor="rgb(0, 255, 100)"
        endOpacity={0}
        color="rgb(0, 200, 0)"
        thickness={2}
      />
    </View>
  );
}

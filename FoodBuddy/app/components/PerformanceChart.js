import { View } from "react-native";
import { LineChart } from "react-native-chart-kit";

const PerformanceChart = ({
  labelArray,
  dataArray,
  recommendedArray,
  chartWidth,
}) => {
  console.log(dataArray);
  return (
    <View>
      <LineChart
        withInnerLines={false}
        data={{
          labels: labelArray,
          datasets: [
            {
              data: dataArray,
            },
            {
              data: recommendedArray,
              withDots: false,
              color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            },
          ],
        }}
        width={chartWidth}
        height={250}
        yAxisSuffix="g"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "white",
          backgroundGradientFrom: "white",
          backgroundGradientTo: "white",
          useShadowColorFromDataset: true,
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "1",
            strokeWidth: "2",
            stroke: "black",
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
          marginLeft: 5,
        }}
      />
    </View>
  );
};

export default PerformanceChart;

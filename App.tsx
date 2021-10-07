import React, { useCallback } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Config from "react-native-config";

interface Item {
  title: string;
  value: string;
}

const items: Item[] = [
  { title: 'Flavor', value: Config.FLAVOR },
  { title: 'Environment', value: Config.ENVIRONMENT },
  { title: 'Base url', value: Config.BASE_URL },
];

const Styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  item: {
    backgroundColor: 'lightgray',
    marginBottom: 4,
    padding: 8,
  },
  itemTitle: {
    fontWeight: 'bold',
  },
});

const App = React.memo(() => {
  const RenderItem = useCallback((item: Item, index: number) => {
    const { title, value } = item;

    return (
      <View key={index} style={Styles.item}>
        <Text numberOfLines={1} style={Styles.itemTitle}>{title}</Text>
        <Text numberOfLines={1}>{value}</Text>
      </View>
    );
  }, []);

  return (
    <SafeAreaView style={Styles.root}>
        { items.map((item, index) => RenderItem(item, index)) }
    </SafeAreaView>
  );
});

export default App;

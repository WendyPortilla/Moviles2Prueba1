// src/components/Informacion.tsx
import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

type InformacionProps = {
  data: { teamName: string };
  onPress: (data: any) => void;
};

const Informacion: React.FC<InformacionProps> = ({ data, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(data)}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{data.teamName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
});

export default Informacion;

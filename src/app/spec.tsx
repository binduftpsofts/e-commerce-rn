import * as Device from 'expo-device';
import { View, Text, Platform, StyleSheet } from 'react-native';

const tableData = [
  { title: 'Device Type', content: Platform.OS },
  { title: 'Device Name', content: Device.modelName ?? 'Unknown' },
  { title: 'Device Brand', content: Device.brand ?? 'Unknown' },
  { title: 'OS Version', content: Device.osVersion ?? 'Unknown' },
];

const  Spec = ()=> {
  return (
    <View style={styles.container}>
      {/* Title Container */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome to Micro Shops</Text>
      </View>

      {/* Table Card Container */}
      <View style={styles.tableCard}>
        {tableData.map((item, index) => (
          <View 
            key={index} 
            style={[
              styles.tableRow, 
              index === tableData.length - 1 && styles.lastRow
            ]}
          >
            <Text style={styles.tableTitle}>{item.title}</Text>
            <Text style={styles.tableContent}>{item.content}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7878f5',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  titleContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
  },
  tableCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  tableTitle: {
    color: '#555555',
    fontSize: 15,
    fontWeight: '500',
  },
  tableContent: {
    color: '#111111',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default Spec;
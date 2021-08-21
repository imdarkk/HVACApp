import React from "react";
import { View, StyleSheet, Text, TextInput, Dimensions, TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("window");
const Header = () => {
    const [search, setSearch] = React.useState('');
    return (
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>Service List</Text>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            width: width,
            height: 80,
          }}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#A8A4A4"
            style={styles.searchInput}
            value={search}
            onChange={e => setSearch(e)}
          />
          <TouchableOpacity style={styles.addCustomer}>
            <Text style={styles.addCustomerText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  headerWrapper: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
  },
  headerText: {
    fontFamily: 'JakartaBold',
    letterSpacing: 1.2,
    color: '#A8A4A4',
    fontWeight: 'bold',
    fontSize: 28,
  },
  searchInput: {
    color: '#A8A4A4',
    backgroundColor: '#373D4D',
    paddingLeft: 15,
    width: 240,
    borderRadius: 12,
    fontSize: 16,
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginTop: 15,
  },
  addCustomer: {
    width: 100,
    height: 48,
    backgroundColor: '#7C94D0',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    right: -35,
  },
  addCustomerText: {
    color: '#D2C9C9',
    fontSize: 17
  },
});

export default Header;

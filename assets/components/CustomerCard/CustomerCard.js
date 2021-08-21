import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from "react-native";
import { Icon } from "react-native-elements";

const { width, height } = Dimensions.get("window");
const CustomerCard = (props) => {
    const [editPage, setEditPage] = React.useState(false);
    return (
        <View style={{width: width, height: height, alignItems: "center"}}>
            <TouchableOpacity style={styles.CustomerCardWrapper} onPress={() => setEditPage(true)}>
                <View style={{marginLeft: 25}}>
                        <Text style={styles.customerCardText}>Client name: {props.name}</Text>
                        <Text style={styles.customerCardText}>Problem:</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.customerCardText}>Number:</Text>
                        <Text style={[styles.customerCardText, styles.statusText]}>Status:</Text>
                    </View>
                    <Text style={styles.customerCardText}>Address:</Text>
                </View>
            </TouchableOpacity>
            {editPage && (
                <View style={{ position: 'absolute', zIndex: 1000, width: width - 40, height: height - 95, backgroundColor: "white", top: -110, borderRadius: 12 }}>
                    <TouchableOpacity onPress={() => setEditPage(false)}><Text>Close</Text></TouchableOpacity>
                    <Text>{props.id}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
  CustomerCardWrapper: {
    width: width - 53,
    height: "20%",
    borderRadius: 10,
    backgroundColor: '#373D4C',
    justifyContent: "center",
  },
  options: {
    position: 'absolute',
    right: 15,
    top: 10,
  },
  customerCardText: {
    color: "#A8A4A4",
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 5
  },
  statusText: {
    position: 'absolute',
    right: 60,
  }
});

export default CustomerCard;

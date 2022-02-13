import React, { useState, useEffect } from "react";
import { Text, FlatList, View, StyleSheet } from "react-native";

export default function GetAPI({ }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const res = await fetch("https://api.sampleapis.com/coffee/hot");
        const data = await res.json();
        setData(data);
        setLoading(false);
    };


    const renderItem = ({ item }) => {
        console.log(item.title)
        return (
            <View>
                {!loading ? <Text>{item.title}</Text> : null }
            </View>
        );
    };


    return (
        <View>
            <Text>Fetch API</Text>
            {loading && <Text>Loading..</Text>}
            {data && (
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
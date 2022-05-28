import { useState } from 'react';
import { View, Text, Image } from "react-native"
import logo from '../assets/logo.svg';

function App() {
    const [count, setCount] = useState(0);

    return (
        <View style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#44bb44"
            }} >
            <View>
                <Image source={{ uri: logo, width: 300, height: 300 }} />
                <Text style={{ color: '#FFFFFF' }} onPress={() => setCount((count) => count + 1)}>Hello World, Count is {count}</Text>
            </View>
        </View>

    );
}

export default App;

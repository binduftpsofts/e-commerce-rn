import { StyleSheet, Text, ScrollView, View } from "react-native"
import { colors, globalStyles } from "@/src/styles/global"
import { Link } from "expo-router"

const index = () => {
    return (
        <ScrollView style={globalStyles.container}>
            <View>
                <Text >
                    Micro Shops
                </Text>
                <Text style={styles.date}>
                    Thursday, July 2026
                </Text>
            </View>
            <View style={{ flexDirection: "row", gap: 5 }}>

                <Link href='/spec'>Specifications</Link>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    date: {
        fontSize: 14,
        color: colors.textSecondary,
        marginTop: 4,
        marginBottom: 30,
    }
})
export default index

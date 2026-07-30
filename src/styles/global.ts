import { StyleSheet } from "react-native";

export const colors = {
    background: '#F5F5F5',
    header: '#7878f5',
    surface: '#FFFFFF',
    primary: '#7878f5',
    text: '#111111',
    textSecondary: '#555555',
    alert: '#FF3B30',
};

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 60,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.text,
    },
    sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textSecondary,
    marginTop: 30,
    marginBottom: 16,
    },
    empty: {
        color: colors.textSecondary,
        fontSize: 14,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
  },
});
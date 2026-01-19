
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export default function SettingsScreen() {
  const { theme, toggleTheme } = useTheme();

  const isDarkMode = theme === 'dark';
  const backgroundColor = isDarkMode ? '#333' : '#fff';
  const textColor = isDarkMode ? '#fff' : '#000';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>
        Current Theme: {theme.toUpperCase()}
      </Text>
      
      <View style={styles.switchContainer}>
        <Text style={[styles.label, { color: textColor }]}>Dark Mode</Text>
        <Switch 
          value={isDarkMode} 
          onValueChange={toggleTheme} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  switchContainer: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  label: { fontSize: 18 },
});
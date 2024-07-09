import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useTheme } from "../../hooks/useTheme";

const Settings = () => {
  const { toggleTheme } = useTheme();

  return (
    <View style={{ margin: 16 }}>
      <Text variant="headlineSmall" style={{ marginVertical: 16 }}>
        Settings
      </Text>
      <Button icon="repeat" mode="outlined" onPress={toggleTheme}>
        Toggle Theme
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({});
export default Settings;

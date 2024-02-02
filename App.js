import { StatusBar } from "expo-status-bar";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";

const FacebookLoginUi = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.upperText}></Text>
      <Image
        source={require("./assets/facebook_logo.png")}
        style={styles.logo}
      />
      <View style={styles.inputView}>
        <TextInput style={styles.input} placeholder="Celular o correo electrónico" />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
        />
        <TouchableHighlight style={styles.loginBtn}>
          <Text style={styles.loginText}>Iniciar Sesión</Text>
        </TouchableHighlight>
        <Text style={styles.forgotText}>¿Olvidaste tu contraseña?</Text>
      </View>

      <TouchableHighlight style={styles.createBtn}>
        <Text style={styles.createText}>Crear nueva cuenta</Text>
      </TouchableHighlight>

      <Image source={require("./assets/meta.png")} style={styles.meta} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aliceblue",
    alignItems: "center",
    gap: 20,
    padding: 20,
    paddingTop: 80,
  },
  upperText: { marginBottom: 80 },
  logo: { height: 50, width: 50, marginBottom: 80 },
  inputView: { width: "100%", gap: 15 },
  input: {
    width: "100%",
    height: 55,
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    backgroundColor: "white",
  },
  loginBtn: {
    backgroundColor: "#2E89FF",
    borderRadius: 20,
    height: 40,
    justifyContent: "center",
  },
  loginText: { color: "white", textAlign: "center", fontSize: 16 },
  forgotText: { textAlign: "center", fontSize: 14 },
  createBtn: {
    borderRadius: 15,
    borderColor: "#2E89FF",
    borderWidth: 1,
    height: 40,
    justifyContent: "center",
    width: "100%",
    marginTop: 80,
  },
  createText: { color: "#2E89FF", textAlign: "center", fontSize: 14 },
  meta: { height: 40, width: 80 },
});

export default FacebookLoginUi;
import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import Maquina from "./Maquina";
import Animacion from "./Animacion";
import Modal from "react-native-modal";

const Usuarios = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [gameResult, setGameResult] = useState(null);
  const [machineOption, setMachineOption] = useState(null);

  const images = {
    tijera: require("../image/tijera.png"),
    papel: require("../image/papel.png"),
    piedra: require("../image/piedra.png"),
  };

  const options = Object.keys(images);

  useEffect(() => {
    if (selectedOption !== null) {
      // Genera aleatoriamente la opción de la máquina
      const randomChoice = options[Math.floor(Math.random() * options.length)];
      setMachineOption(randomChoice);

      // Compara las opciones para determinar el resultado
      if (selectedOption === randomChoice) {
        setGameResult("Empate");
      } else if (
        (selectedOption === "piedra" && randomChoice === "tijera") ||
        (selectedOption === "tijera" && randomChoice === "papel") ||
        (selectedOption === "papel" && randomChoice === "piedra")
      ) {
        setGameResult(`¡Ganaste!, La máquina eligió ${randomChoice}.`);
      } else {
        setGameResult(`¡Perdiste!, La máquina eligió ${randomChoice}.`);
      }

      // Muestra el modal después de establecer el resultado y la opción de la máquina
      setModalVisible(true);
    }
  }, [selectedOption]);

  const handleOptionClick = (option) => {
    if (isModalVisible) {
      return;
    }

    // Establece la opción seleccionada por el usuario
    setSelectedOption(option);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={selectedOption ? images[selectedOption] : null}
          style={styles.image}
        />
      </View>
      <View style={styles.btns}>
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.btn,
              selectedOption === option && styles.selectedBtn,
            ]}
            onPress={() => handleOptionClick(option)}
          >
            <Text style={styles.txt}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Modal */}
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>{gameResult}</Text>
          <TouchableOpacity onPress={toggleModal}>
            <Text style={styles.modalButton}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Animacion />
      {selectedOption && <Maquina selectedOption={machineOption} images={images} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  imageContainer: {
    width: 300,
    height: 150,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#905430",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 100,
  },
  btn: {
    backgroundColor: "#FCCD11",
    width: 100,
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#EB3E3B",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  btns: {
    flexDirection: "row-reverse",
    gap: 5,
  },
  selectedBtn: {
    backgroundColor: "#EB3E3B",
  },
  txt: {
    textAlign: "center",
    fontWeight: "bold",
  },
  // Estilos para el modal
  modalContainer: {
    backgroundColor: "#FCCD11",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    color:"black",
    fontWeight:"bold"
  },
  modalButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#EB3E3B",
  },
});

export default Usuarios;



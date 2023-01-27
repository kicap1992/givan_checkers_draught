import { useState } from 'react';
import {
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  HStack,
  Select,
  Divider,
} from '@chakra-ui/react';
import { useDraughtsGame } from '../../game/DraughtsGameContext';
import { useDraughtsSettings } from '../DraughtsSettingsContext';
import { ComputerDifficulty } from '../constants/computer-difficulty';
import { Players } from '@draughts/core';

export function DraughtsSettingsModal() {
  const { restartGame } = useDraughtsGame();
  const {
    userPlayer,
    updateSettings,
    computerDifficulty,
    settingsModal: { isOpen, onClose },
  } = useDraughtsSettings();

  const [computerDifficultySelection, setComputerDifficultySelection] =
    useState(computerDifficulty);
  const [userPlayerSelection, setUserPlayerSelection] = useState(userPlayer);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Settings</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl as="fieldset">
            <FormLabel as="legend">Pilih Warna</FormLabel>
            <RadioGroup
              onChange={setUserPlayerSelection}
              value={userPlayerSelection}
            >
              <HStack>
                <Radio value={`${Players.WHITE}`}>Putih</Radio>
                <Radio value={`${Players.BLACK}`}>Hitam</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
          <Divider marginY={5} />
          <FormControl>
            <FormLabel htmlFor="computerDifficulty">
              Computer difficulty
            </FormLabel>
            <Select
              id="computerDifficulty"
              onChange={(event) => {
                setComputerDifficultySelection(event.target.value);
              }}
              value={computerDifficultySelection}
            >
              <option value={ComputerDifficulty.EASY}>Easy</option>
              <option value={ComputerDifficulty.MEDIUM}>Medium</option>
              <option value={ComputerDifficulty.HARD}>Hard</option>
            </Select>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button mr={3} colorScheme="blue" onClick={onClose}>
            Kembali Ke Permainan
          </Button>
          <Button
            onClick={() => {
              restartGame();
              updateSettings({
                computerDifficulty: computerDifficultySelection,
                userPlayer: userPlayerSelection,
              });
              onClose();
            }}
          >
            Mulai Permainan Baru
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

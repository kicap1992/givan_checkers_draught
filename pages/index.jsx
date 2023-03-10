import Head from 'next/head';
import { Divider, Heading, HStack, VStack } from '@chakra-ui/react';
import { DraughtsMenuView } from '../components/draughts/settings/views/DraughtsMenu';
import { DraughtsProvider } from '../components/draughts/DraughtsContext';
import { DraughtsBoard } from '../components/draughts/board/views/DraughtsBoard';
import { DraughtsGameInfoView } from '../components/draughts/DraughtsGameInfo';
import { ComputerDifficulty } from '../components/draughts/settings/constants/computer-difficulty';
import { MainLayout } from '../components/layout/MainLayout';
import { DraughtsRulesContent } from '../components/content/DraughtsRulesContent';
import { INITIAL_POSITION, Players } from '@draughts/core';

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Givan Checkers - Main Checkers Secara Gratis</title>
      </Head>
      <DraughtsProvider
        settings={{
          computerDifficulty: ComputerDifficulty.MEDIUM,
          userPlayer: Players.WHITE,
        }}
        board={{ playerToMove: Players.WHITE, position: INITIAL_POSITION }}
      >
        <VStack spacing={4}>
          <DraughtsBoard />
          <HStack>
            <DraughtsMenuView />
            <DraughtsGameInfoView />
          </HStack>
          <Divider />
          <Heading size="sm">Peraturan Main</Heading>
          <DraughtsRulesContent />
        </VStack>
      </DraughtsProvider>
    </MainLayout>
  );
}

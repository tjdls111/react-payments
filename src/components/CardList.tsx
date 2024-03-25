import React from 'react'
import Title from './common/Title.tsx'
import Card from './common/Card.tsx'
import { CardData } from './RegisterCard.tsx'
import { ADD_CARD_STEP_TYPE, PAGE_TYPE } from '../types/card.ts'
import styled from 'styled-components'
import { useMachine } from '@xstate/react'
import { cardMachine } from '../machines/cardMachine.ts'

const CardListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 10px 0;
  overflow-y: auto;
  height: calc(100% - 100px);
`

const NoneStyledButton = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;
`

const CardList = ({
  setPage,
  setStep,
  cardList,
  setInputs,
  setCurrentCardIndex,
}: {
  setPage: (step: PAGE_TYPE) => void
  setStep: (step: ADD_CARD_STEP_TYPE) => void
  cardList: CardData[]
  setInputs: (cardData: CardData) => void
  setCurrentCardIndex: (index: number) => void
}) => {
  const [state, send] = useMachine(cardMachine)

  return (
    <>
      <div className="root">
        <Title className="p-5">보유 카드</Title>
        <CardListWrapper>
          {cardList.map((card, index) => {
            return (
              <NoneStyledButton
                key={index}
                onClick={() => {
                  setInputs(card)
                  setCurrentCardIndex(index)
                  setPage('카드추가')
                  setStep('생성완료')
                  send({ type: 'ADD_CARD' })
                }}
              >
                <Card props={card} />
              </NoneStyledButton>
            )
          })}
          <button onClick={() => setPage('카드추가')} className="empty-card">
            +
          </button>
        </CardListWrapper>
      </div>
    </>
  )
}
export default CardList

import React from 'react'
import Title from '../components/Title.tsx'
import { ADD_CARD_STEP_TYPE, PAGE_TYPE } from '../App.tsx'
import Card from '../components/Card.tsx'
import { CardData } from './AddCard/index.tsx'

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
  return (
    <>
      <h2>5️⃣ 카드 목록</h2>
      <div className="root">
        <div className="card-box">
          <button onClick={() => setPage('카드추가')} className="empty-card">
            +
          </button>
        </div>
        <div className="app flex-column-center">
          <div className="flex-center">
            <Title className="mb-10">보유 카드</Title>
          </div>
          {cardList.map((card, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  setInputs(card)
                  setCurrentCardIndex(index)
                  setPage('카드추가')
                  setStep('생성완료')
                }}
              >
                <Card props={card} />
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default CardList

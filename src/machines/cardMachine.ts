import { assign, setup, createMachine } from 'xstate'

const defaultCurrentCard = {
  numberOne: '',
  numberTwo: '',
  numberThree: '',
  numberFour: '',
  expiredMonth: '',
  expiredYear: '',
  ownerName: '',
  CVC: '',
  passwordOne: '',
  passwordTwo: '',
  nickname: '',
  companyName: '',
}

const defaultCardList = [
  {
    numberOne: '1111',
    numberTwo: '2222',
    numberThree: '3333',
    numberFour: '4444',
    expiredMonth: '12',
    expiredYear: '26',
    ownerName: 'Teddy',
    CVC: '123',
    passwordOne: '1',
    passwordTwo: '2',
    nickname: '엄카',
    companyName: '신한은행',
  },
  {
    numberOne: '1111',
    numberTwo: '2222',
    numberThree: '3333',
    numberFour: '4444',
    expiredMonth: '12',
    expiredYear: '26',
    ownerName: 'Teddy',
    CVC: '123',
    passwordOne: '1',
    passwordTwo: '2',
    nickname: '내 카드',
    companyName: '우리은행',
  },
]

export const cardMachine = createMachine({
  id: 'card',
  initial: '카드목록',
  context: {
    currentCard: defaultCurrentCard,
    cardList: defaultCardList,
  },
  states: {
    카드목록: {
      on: {
        ADD_CARD: {
          target: '카드정보입력',
        },
        UPDATE_CARD_NICKNAME: {
          target: '생성완료',
        },
      },
    },
    카드정보입력: {
      on: {
        NEXT: {
          target: '생성완료',
        },
        BACK: {
          target: '카드목록',
        },
      },
    },
    생성완료: {
      on: {
        FINISH: {
          target: '카드목록',
        },
      },
    },
  },
  actions: {},
})

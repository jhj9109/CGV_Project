export interface TheaterScreenCode {
  theatercode: string;
  screencode: string;
}

// const gogel = {
//   // 4개 필수
//   theatercode: '0013',
//   palyymd: '20230512',
//   screencode: '018',
//   playnum: '5',
//   // 아래는 영향 X
//   starttime: '1950',
//   endtime: '2230',
//   theatername: 'CGV 용산아이파크몰',
//   cnt: '149',
//   screenname: 'IMAX관'
// }

export const theaterScreenCode: Record<string, TheaterScreenCode> = {
  가오갤_IMAX_용산_2D: {
    theatercode: '0013',
    screencode: '018',
  }
}
// import { useEffect, useState } from 'react'
// import { BoardType } from './types'
// import { BOARD_COLUMNS_RAW } from 'dashboard/constants'

// import {
//   fetchBoardData,
//   mountManagementContent,
//   calculateProgress,
//   removeList,
// } from './ManageJourneyService'

// interface BoardDataReturn {
//   board: BoardType;
//   setBoard: (board: BoardType) => void;
// }

// export const useBoardData = (email: string): BoardDataReturn => {
//   const [board, setBoard] = useState<BoardType>({
//     successful: false,
//     data: {},
//     progress: 0,
//   })

//   useEffect(() => {
//     const getBoardData = async () => {
//       try {
//         const board = await fetchBoardData(email)

//         // const progress = calculateProgress(formattedBoard?.lists)
//         // setBoard({ successful: true, data: filteredBoard, progress })
//       } catch (error: unknown) {
//         setBoard(error)
//       }
//     }

//     getBoardData()
//   }, [email])

//   return { board, setBoard }
// }
export {}

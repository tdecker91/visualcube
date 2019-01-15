import { ColorCode } from './../constants';
import { ICubeColorScheme } from "./color-scheme";

export enum Face {
  U = 0,
  R = 1,
  F = 2,
  D = 3,
  L = 4,
  B = 5,
}

export const AllFaces = [
  Face.U,
  Face.R,
  Face.F,
  Face.D,
  Face.L,
  Face.B,
]

export class FaceRotationVectors {
  static U = [0, -1, 0];
  static R = [1, 0, 0];
  static F = [0 ,0, -1];
  static D = [0, 1, 0];
  static L = [-1, 0, 0];
  static B = [0, 0, 1];
}

export const DefaultColorScheme: ICubeColorScheme = {
  [Face.U]: ColorCode.Yellow,
  [Face.R]: ColorCode.Red,
  [Face.F]: ColorCode.Blue,
  [Face.D]: ColorCode.White,
  [Face.L]: ColorCode.Orange,
  [Face.B]: ColorCode.Green
}

export enum AlgorithmUnit {
  F = 'F',
  U = 'U',
  R = 'R',
  L = 'L',
  D = 'D',
  B = 'B',
  M = 'M',
  E = 'E',
  S = 'S',
  X = 'x',
  Y = 'y',
  Z = 'z'
}

export const possibleMoves: string[] = [
  AlgorithmUnit.F,
  AlgorithmUnit.U,
  AlgorithmUnit.R,
  AlgorithmUnit.L,
  AlgorithmUnit.D,
  AlgorithmUnit.B,
  AlgorithmUnit.M,
  AlgorithmUnit.E,
  AlgorithmUnit.S,
  AlgorithmUnit.X,
  AlgorithmUnit.Y,
  AlgorithmUnit.Z,
]

export enum TurnAbbreviation {
  Clockwise = '',
  CounterClockwise = '\'',
  Double = '2'
}
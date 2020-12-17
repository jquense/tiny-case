import type { CamelCase, DelimiterCase, PascalCase, SnakeCase } from 'type-fest'

export function words(str: string): string[]

export function upperFirst<T extends string>(str: T): Capitalize<T>
export function upperFirst(str: string): string

export function camelCase<T extends string>(str: T): CamelCase<T>
export function camelCase(str: string): string

export function pascalCase<T extends string>(str: string): PascalCase<T>
export function pascalCase(str: string): string

export function snakeCase<T extends string>(str: string): SnakeCase<T>
export function snakeCase(str: string): string

export function kebabCase<T extends string>(str: string): SnakeCase<T>
export function kebabCase(str: string): string

export function sentenceCase<T extends string>(
  str: string,
): Capitalize<DelimiterCase<T, ' '>>
export function sentenceCase(str: string): string

export function titleCase(str: string): string

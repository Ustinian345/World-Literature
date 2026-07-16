
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Bookmark
 * 
 */
export type Bookmark = $Result.DefaultSelection<Prisma.$BookmarkPayload>
/**
 * Model FavoriteTrend
 * 
 */
export type FavoriteTrend = $Result.DefaultSelection<Prisma.$FavoriteTrendPayload>
/**
 * Model FavoriteArticle
 * 
 */
export type FavoriteArticle = $Result.DefaultSelection<Prisma.$FavoriteArticlePayload>
/**
 * Model DailyRecommendation
 * 
 */
export type DailyRecommendation = $Result.DefaultSelection<Prisma.$DailyRecommendationPayload>
/**
 * Model Work
 * 
 */
export type Work = $Result.DefaultSelection<Prisma.$WorkPayload>
/**
 * Model WorkDetail
 * 
 */
export type WorkDetail = $Result.DefaultSelection<Prisma.$WorkDetailPayload>
/**
 * Model WorkCharacter
 * 
 */
export type WorkCharacter = $Result.DefaultSelection<Prisma.$WorkCharacterPayload>
/**
 * Model BgImage
 * 
 */
export type BgImage = $Result.DefaultSelection<Prisma.$BgImagePayload>
/**
 * Model Award
 * 
 */
export type Award = $Result.DefaultSelection<Prisma.$AwardPayload>
/**
 * Model AwardWinner
 * 
 */
export type AwardWinner = $Result.DefaultSelection<Prisma.$AwardWinnerPayload>
/**
 * Model DailyTrend
 * 
 */
export type DailyTrend = $Result.DefaultSelection<Prisma.$DailyTrendPayload>
/**
 * Model DailyNewWork
 * 
 */
export type DailyNewWork = $Result.DefaultSelection<Prisma.$DailyNewWorkPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookmark`: Exposes CRUD operations for the **Bookmark** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookmarks
    * const bookmarks = await prisma.bookmark.findMany()
    * ```
    */
  get bookmark(): Prisma.BookmarkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favoriteTrend`: Exposes CRUD operations for the **FavoriteTrend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FavoriteTrends
    * const favoriteTrends = await prisma.favoriteTrend.findMany()
    * ```
    */
  get favoriteTrend(): Prisma.FavoriteTrendDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favoriteArticle`: Exposes CRUD operations for the **FavoriteArticle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FavoriteArticles
    * const favoriteArticles = await prisma.favoriteArticle.findMany()
    * ```
    */
  get favoriteArticle(): Prisma.FavoriteArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyRecommendation`: Exposes CRUD operations for the **DailyRecommendation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyRecommendations
    * const dailyRecommendations = await prisma.dailyRecommendation.findMany()
    * ```
    */
  get dailyRecommendation(): Prisma.DailyRecommendationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.work`: Exposes CRUD operations for the **Work** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Works
    * const works = await prisma.work.findMany()
    * ```
    */
  get work(): Prisma.WorkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workDetail`: Exposes CRUD operations for the **WorkDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkDetails
    * const workDetails = await prisma.workDetail.findMany()
    * ```
    */
  get workDetail(): Prisma.WorkDetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workCharacter`: Exposes CRUD operations for the **WorkCharacter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkCharacters
    * const workCharacters = await prisma.workCharacter.findMany()
    * ```
    */
  get workCharacter(): Prisma.WorkCharacterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bgImage`: Exposes CRUD operations for the **BgImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BgImages
    * const bgImages = await prisma.bgImage.findMany()
    * ```
    */
  get bgImage(): Prisma.BgImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.award`: Exposes CRUD operations for the **Award** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Awards
    * const awards = await prisma.award.findMany()
    * ```
    */
  get award(): Prisma.AwardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.awardWinner`: Exposes CRUD operations for the **AwardWinner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AwardWinners
    * const awardWinners = await prisma.awardWinner.findMany()
    * ```
    */
  get awardWinner(): Prisma.AwardWinnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyTrend`: Exposes CRUD operations for the **DailyTrend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyTrends
    * const dailyTrends = await prisma.dailyTrend.findMany()
    * ```
    */
  get dailyTrend(): Prisma.DailyTrendDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyNewWork`: Exposes CRUD operations for the **DailyNewWork** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyNewWorks
    * const dailyNewWorks = await prisma.dailyNewWork.findMany()
    * ```
    */
  get dailyNewWork(): Prisma.DailyNewWorkDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Bookmark: 'Bookmark',
    FavoriteTrend: 'FavoriteTrend',
    FavoriteArticle: 'FavoriteArticle',
    DailyRecommendation: 'DailyRecommendation',
    Work: 'Work',
    WorkDetail: 'WorkDetail',
    WorkCharacter: 'WorkCharacter',
    BgImage: 'BgImage',
    Award: 'Award',
    AwardWinner: 'AwardWinner',
    DailyTrend: 'DailyTrend',
    DailyNewWork: 'DailyNewWork'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "bookmark" | "favoriteTrend" | "favoriteArticle" | "dailyRecommendation" | "work" | "workDetail" | "workCharacter" | "bgImage" | "award" | "awardWinner" | "dailyTrend" | "dailyNewWork"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Bookmark: {
        payload: Prisma.$BookmarkPayload<ExtArgs>
        fields: Prisma.BookmarkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookmarkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookmarkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          findFirst: {
            args: Prisma.BookmarkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookmarkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          findMany: {
            args: Prisma.BookmarkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>[]
          }
          create: {
            args: Prisma.BookmarkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          createMany: {
            args: Prisma.BookmarkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookmarkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>[]
          }
          delete: {
            args: Prisma.BookmarkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          update: {
            args: Prisma.BookmarkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          deleteMany: {
            args: Prisma.BookmarkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookmarkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookmarkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>[]
          }
          upsert: {
            args: Prisma.BookmarkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          aggregate: {
            args: Prisma.BookmarkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookmark>
          }
          groupBy: {
            args: Prisma.BookmarkGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookmarkGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookmarkCountArgs<ExtArgs>
            result: $Utils.Optional<BookmarkCountAggregateOutputType> | number
          }
        }
      }
      FavoriteTrend: {
        payload: Prisma.$FavoriteTrendPayload<ExtArgs>
        fields: Prisma.FavoriteTrendFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteTrendFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteTrendPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteTrendFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteTrendPayload>
          }
          findFirst: {
            args: Prisma.FavoriteTrendFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteTrendPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteTrendFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteTrendPayload>
          }
          findMany: {
            args: Prisma.FavoriteTrendFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteTrendPayload>[]
          }
          create: {
            args: Prisma.FavoriteTrendCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteTrendPayload>
          }
          createMany: {
            args: Prisma.FavoriteTrendCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteTrendCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteTrendPayload>[]
          }
          delete: {
            args: Prisma.FavoriteTrendDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteTrendPayload>
          }
          update: {
            args: Prisma.FavoriteTrendUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteTrendPayload>
          }
          deleteMany: {
            args: Prisma.FavoriteTrendDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteTrendUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteTrendUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteTrendPayload>[]
          }
          upsert: {
            args: Prisma.FavoriteTrendUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteTrendPayload>
          }
          aggregate: {
            args: Prisma.FavoriteTrendAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavoriteTrend>
          }
          groupBy: {
            args: Prisma.FavoriteTrendGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteTrendGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteTrendCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteTrendCountAggregateOutputType> | number
          }
        }
      }
      FavoriteArticle: {
        payload: Prisma.$FavoriteArticlePayload<ExtArgs>
        fields: Prisma.FavoriteArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteArticlePayload>
          }
          findFirst: {
            args: Prisma.FavoriteArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteArticlePayload>
          }
          findMany: {
            args: Prisma.FavoriteArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteArticlePayload>[]
          }
          create: {
            args: Prisma.FavoriteArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteArticlePayload>
          }
          createMany: {
            args: Prisma.FavoriteArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteArticlePayload>[]
          }
          delete: {
            args: Prisma.FavoriteArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteArticlePayload>
          }
          update: {
            args: Prisma.FavoriteArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteArticlePayload>
          }
          deleteMany: {
            args: Prisma.FavoriteArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteArticlePayload>[]
          }
          upsert: {
            args: Prisma.FavoriteArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteArticlePayload>
          }
          aggregate: {
            args: Prisma.FavoriteArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavoriteArticle>
          }
          groupBy: {
            args: Prisma.FavoriteArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteArticleCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteArticleCountAggregateOutputType> | number
          }
        }
      }
      DailyRecommendation: {
        payload: Prisma.$DailyRecommendationPayload<ExtArgs>
        fields: Prisma.DailyRecommendationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyRecommendationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRecommendationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyRecommendationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRecommendationPayload>
          }
          findFirst: {
            args: Prisma.DailyRecommendationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRecommendationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyRecommendationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRecommendationPayload>
          }
          findMany: {
            args: Prisma.DailyRecommendationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRecommendationPayload>[]
          }
          create: {
            args: Prisma.DailyRecommendationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRecommendationPayload>
          }
          createMany: {
            args: Prisma.DailyRecommendationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyRecommendationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRecommendationPayload>[]
          }
          delete: {
            args: Prisma.DailyRecommendationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRecommendationPayload>
          }
          update: {
            args: Prisma.DailyRecommendationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRecommendationPayload>
          }
          deleteMany: {
            args: Prisma.DailyRecommendationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyRecommendationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyRecommendationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRecommendationPayload>[]
          }
          upsert: {
            args: Prisma.DailyRecommendationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRecommendationPayload>
          }
          aggregate: {
            args: Prisma.DailyRecommendationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyRecommendation>
          }
          groupBy: {
            args: Prisma.DailyRecommendationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyRecommendationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyRecommendationCountArgs<ExtArgs>
            result: $Utils.Optional<DailyRecommendationCountAggregateOutputType> | number
          }
        }
      }
      Work: {
        payload: Prisma.$WorkPayload<ExtArgs>
        fields: Prisma.WorkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          findFirst: {
            args: Prisma.WorkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          findMany: {
            args: Prisma.WorkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>[]
          }
          create: {
            args: Prisma.WorkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          createMany: {
            args: Prisma.WorkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>[]
          }
          delete: {
            args: Prisma.WorkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          update: {
            args: Prisma.WorkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          deleteMany: {
            args: Prisma.WorkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>[]
          }
          upsert: {
            args: Prisma.WorkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          aggregate: {
            args: Prisma.WorkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWork>
          }
          groupBy: {
            args: Prisma.WorkGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkCountArgs<ExtArgs>
            result: $Utils.Optional<WorkCountAggregateOutputType> | number
          }
        }
      }
      WorkDetail: {
        payload: Prisma.$WorkDetailPayload<ExtArgs>
        fields: Prisma.WorkDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDetailPayload>
          }
          findFirst: {
            args: Prisma.WorkDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDetailPayload>
          }
          findMany: {
            args: Prisma.WorkDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDetailPayload>[]
          }
          create: {
            args: Prisma.WorkDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDetailPayload>
          }
          createMany: {
            args: Prisma.WorkDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDetailPayload>[]
          }
          delete: {
            args: Prisma.WorkDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDetailPayload>
          }
          update: {
            args: Prisma.WorkDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDetailPayload>
          }
          deleteMany: {
            args: Prisma.WorkDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkDetailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDetailPayload>[]
          }
          upsert: {
            args: Prisma.WorkDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDetailPayload>
          }
          aggregate: {
            args: Prisma.WorkDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkDetail>
          }
          groupBy: {
            args: Prisma.WorkDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkDetailCountArgs<ExtArgs>
            result: $Utils.Optional<WorkDetailCountAggregateOutputType> | number
          }
        }
      }
      WorkCharacter: {
        payload: Prisma.$WorkCharacterPayload<ExtArgs>
        fields: Prisma.WorkCharacterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkCharacterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkCharacterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkCharacterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkCharacterPayload>
          }
          findFirst: {
            args: Prisma.WorkCharacterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkCharacterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkCharacterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkCharacterPayload>
          }
          findMany: {
            args: Prisma.WorkCharacterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkCharacterPayload>[]
          }
          create: {
            args: Prisma.WorkCharacterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkCharacterPayload>
          }
          createMany: {
            args: Prisma.WorkCharacterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkCharacterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkCharacterPayload>[]
          }
          delete: {
            args: Prisma.WorkCharacterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkCharacterPayload>
          }
          update: {
            args: Prisma.WorkCharacterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkCharacterPayload>
          }
          deleteMany: {
            args: Prisma.WorkCharacterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkCharacterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkCharacterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkCharacterPayload>[]
          }
          upsert: {
            args: Prisma.WorkCharacterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkCharacterPayload>
          }
          aggregate: {
            args: Prisma.WorkCharacterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkCharacter>
          }
          groupBy: {
            args: Prisma.WorkCharacterGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkCharacterGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkCharacterCountArgs<ExtArgs>
            result: $Utils.Optional<WorkCharacterCountAggregateOutputType> | number
          }
        }
      }
      BgImage: {
        payload: Prisma.$BgImagePayload<ExtArgs>
        fields: Prisma.BgImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BgImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BgImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BgImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BgImagePayload>
          }
          findFirst: {
            args: Prisma.BgImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BgImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BgImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BgImagePayload>
          }
          findMany: {
            args: Prisma.BgImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BgImagePayload>[]
          }
          create: {
            args: Prisma.BgImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BgImagePayload>
          }
          createMany: {
            args: Prisma.BgImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BgImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BgImagePayload>[]
          }
          delete: {
            args: Prisma.BgImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BgImagePayload>
          }
          update: {
            args: Prisma.BgImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BgImagePayload>
          }
          deleteMany: {
            args: Prisma.BgImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BgImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BgImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BgImagePayload>[]
          }
          upsert: {
            args: Prisma.BgImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BgImagePayload>
          }
          aggregate: {
            args: Prisma.BgImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBgImage>
          }
          groupBy: {
            args: Prisma.BgImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<BgImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.BgImageCountArgs<ExtArgs>
            result: $Utils.Optional<BgImageCountAggregateOutputType> | number
          }
        }
      }
      Award: {
        payload: Prisma.$AwardPayload<ExtArgs>
        fields: Prisma.AwardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AwardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AwardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          findFirst: {
            args: Prisma.AwardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AwardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          findMany: {
            args: Prisma.AwardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>[]
          }
          create: {
            args: Prisma.AwardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          createMany: {
            args: Prisma.AwardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AwardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>[]
          }
          delete: {
            args: Prisma.AwardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          update: {
            args: Prisma.AwardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          deleteMany: {
            args: Prisma.AwardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AwardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AwardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>[]
          }
          upsert: {
            args: Prisma.AwardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          aggregate: {
            args: Prisma.AwardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAward>
          }
          groupBy: {
            args: Prisma.AwardGroupByArgs<ExtArgs>
            result: $Utils.Optional<AwardGroupByOutputType>[]
          }
          count: {
            args: Prisma.AwardCountArgs<ExtArgs>
            result: $Utils.Optional<AwardCountAggregateOutputType> | number
          }
        }
      }
      AwardWinner: {
        payload: Prisma.$AwardWinnerPayload<ExtArgs>
        fields: Prisma.AwardWinnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AwardWinnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardWinnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AwardWinnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardWinnerPayload>
          }
          findFirst: {
            args: Prisma.AwardWinnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardWinnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AwardWinnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardWinnerPayload>
          }
          findMany: {
            args: Prisma.AwardWinnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardWinnerPayload>[]
          }
          create: {
            args: Prisma.AwardWinnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardWinnerPayload>
          }
          createMany: {
            args: Prisma.AwardWinnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AwardWinnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardWinnerPayload>[]
          }
          delete: {
            args: Prisma.AwardWinnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardWinnerPayload>
          }
          update: {
            args: Prisma.AwardWinnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardWinnerPayload>
          }
          deleteMany: {
            args: Prisma.AwardWinnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AwardWinnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AwardWinnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardWinnerPayload>[]
          }
          upsert: {
            args: Prisma.AwardWinnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardWinnerPayload>
          }
          aggregate: {
            args: Prisma.AwardWinnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAwardWinner>
          }
          groupBy: {
            args: Prisma.AwardWinnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AwardWinnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AwardWinnerCountArgs<ExtArgs>
            result: $Utils.Optional<AwardWinnerCountAggregateOutputType> | number
          }
        }
      }
      DailyTrend: {
        payload: Prisma.$DailyTrendPayload<ExtArgs>
        fields: Prisma.DailyTrendFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyTrendFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTrendPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyTrendFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTrendPayload>
          }
          findFirst: {
            args: Prisma.DailyTrendFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTrendPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyTrendFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTrendPayload>
          }
          findMany: {
            args: Prisma.DailyTrendFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTrendPayload>[]
          }
          create: {
            args: Prisma.DailyTrendCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTrendPayload>
          }
          createMany: {
            args: Prisma.DailyTrendCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyTrendCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTrendPayload>[]
          }
          delete: {
            args: Prisma.DailyTrendDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTrendPayload>
          }
          update: {
            args: Prisma.DailyTrendUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTrendPayload>
          }
          deleteMany: {
            args: Prisma.DailyTrendDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyTrendUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyTrendUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTrendPayload>[]
          }
          upsert: {
            args: Prisma.DailyTrendUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTrendPayload>
          }
          aggregate: {
            args: Prisma.DailyTrendAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyTrend>
          }
          groupBy: {
            args: Prisma.DailyTrendGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyTrendGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyTrendCountArgs<ExtArgs>
            result: $Utils.Optional<DailyTrendCountAggregateOutputType> | number
          }
        }
      }
      DailyNewWork: {
        payload: Prisma.$DailyNewWorkPayload<ExtArgs>
        fields: Prisma.DailyNewWorkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyNewWorkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyNewWorkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyNewWorkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyNewWorkPayload>
          }
          findFirst: {
            args: Prisma.DailyNewWorkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyNewWorkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyNewWorkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyNewWorkPayload>
          }
          findMany: {
            args: Prisma.DailyNewWorkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyNewWorkPayload>[]
          }
          create: {
            args: Prisma.DailyNewWorkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyNewWorkPayload>
          }
          createMany: {
            args: Prisma.DailyNewWorkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyNewWorkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyNewWorkPayload>[]
          }
          delete: {
            args: Prisma.DailyNewWorkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyNewWorkPayload>
          }
          update: {
            args: Prisma.DailyNewWorkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyNewWorkPayload>
          }
          deleteMany: {
            args: Prisma.DailyNewWorkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyNewWorkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyNewWorkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyNewWorkPayload>[]
          }
          upsert: {
            args: Prisma.DailyNewWorkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyNewWorkPayload>
          }
          aggregate: {
            args: Prisma.DailyNewWorkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyNewWork>
          }
          groupBy: {
            args: Prisma.DailyNewWorkGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyNewWorkGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyNewWorkCountArgs<ExtArgs>
            result: $Utils.Optional<DailyNewWorkCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    bookmark?: BookmarkOmit
    favoriteTrend?: FavoriteTrendOmit
    favoriteArticle?: FavoriteArticleOmit
    dailyRecommendation?: DailyRecommendationOmit
    work?: WorkOmit
    workDetail?: WorkDetailOmit
    workCharacter?: WorkCharacterOmit
    bgImage?: BgImageOmit
    award?: AwardOmit
    awardWinner?: AwardWinnerOmit
    dailyTrend?: DailyTrendOmit
    dailyNewWork?: DailyNewWorkOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bookmarks: number
    favoriteTrends: number
    favoriteArticles: number
    dailyRecommendations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookmarks?: boolean | UserCountOutputTypeCountBookmarksArgs
    favoriteTrends?: boolean | UserCountOutputTypeCountFavoriteTrendsArgs
    favoriteArticles?: boolean | UserCountOutputTypeCountFavoriteArticlesArgs
    dailyRecommendations?: boolean | UserCountOutputTypeCountDailyRecommendationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoriteTrendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteTrendWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoriteArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteArticleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDailyRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyRecommendationWhereInput
  }


  /**
   * Count Type WorkCountOutputType
   */

  export type WorkCountOutputType = {
    characters: number
    awardWinners: number
  }

  export type WorkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characters?: boolean | WorkCountOutputTypeCountCharactersArgs
    awardWinners?: boolean | WorkCountOutputTypeCountAwardWinnersArgs
  }

  // Custom InputTypes
  /**
   * WorkCountOutputType without action
   */
  export type WorkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCountOutputType
     */
    select?: WorkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkCountOutputType without action
   */
  export type WorkCountOutputTypeCountCharactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkCharacterWhereInput
  }

  /**
   * WorkCountOutputType without action
   */
  export type WorkCountOutputTypeCountAwardWinnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AwardWinnerWhereInput
  }


  /**
   * Count Type AwardCountOutputType
   */

  export type AwardCountOutputType = {
    winners: number
  }

  export type AwardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    winners?: boolean | AwardCountOutputTypeCountWinnersArgs
  }

  // Custom InputTypes
  /**
   * AwardCountOutputType without action
   */
  export type AwardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwardCountOutputType
     */
    select?: AwardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AwardCountOutputType without action
   */
  export type AwardCountOutputTypeCountWinnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AwardWinnerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    passwordHash: string | null
    avatar: string | null
    provider: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    passwordHash: string | null
    avatar: string | null
    provider: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    passwordHash: number
    avatar: number
    provider: number
    preferences: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    avatar?: true
    provider?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    avatar?: true
    provider?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    avatar?: true
    provider?: true
    preferences?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    passwordHash: string
    avatar: string | null
    provider: string
    preferences: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    avatar?: boolean
    provider?: boolean
    preferences?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookmarks?: boolean | User$bookmarksArgs<ExtArgs>
    favoriteTrends?: boolean | User$favoriteTrendsArgs<ExtArgs>
    favoriteArticles?: boolean | User$favoriteArticlesArgs<ExtArgs>
    dailyRecommendations?: boolean | User$dailyRecommendationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    avatar?: boolean
    provider?: boolean
    preferences?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    avatar?: boolean
    provider?: boolean
    preferences?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    avatar?: boolean
    provider?: boolean
    preferences?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "passwordHash" | "avatar" | "provider" | "preferences" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookmarks?: boolean | User$bookmarksArgs<ExtArgs>
    favoriteTrends?: boolean | User$favoriteTrendsArgs<ExtArgs>
    favoriteArticles?: boolean | User$favoriteArticlesArgs<ExtArgs>
    dailyRecommendations?: boolean | User$dailyRecommendationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      bookmarks: Prisma.$BookmarkPayload<ExtArgs>[]
      favoriteTrends: Prisma.$FavoriteTrendPayload<ExtArgs>[]
      favoriteArticles: Prisma.$FavoriteArticlePayload<ExtArgs>[]
      dailyRecommendations: Prisma.$DailyRecommendationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      passwordHash: string
      avatar: string | null
      provider: string
      preferences: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookmarks<T extends User$bookmarksArgs<ExtArgs> = {}>(args?: Subset<T, User$bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoriteTrends<T extends User$favoriteTrendsArgs<ExtArgs> = {}>(args?: Subset<T, User$favoriteTrendsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteTrendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoriteArticles<T extends User$favoriteArticlesArgs<ExtArgs> = {}>(args?: Subset<T, User$favoriteArticlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dailyRecommendations<T extends User$dailyRecommendationsArgs<ExtArgs> = {}>(args?: Subset<T, User$dailyRecommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyRecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly provider: FieldRef<"User", 'String'>
    readonly preferences: FieldRef<"User", 'Json'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.bookmarks
   */
  export type User$bookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    where?: BookmarkWhereInput
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    cursor?: BookmarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * User.favoriteTrends
   */
  export type User$favoriteTrendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteTrend
     */
    select?: FavoriteTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteTrend
     */
    omit?: FavoriteTrendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteTrendInclude<ExtArgs> | null
    where?: FavoriteTrendWhereInput
    orderBy?: FavoriteTrendOrderByWithRelationInput | FavoriteTrendOrderByWithRelationInput[]
    cursor?: FavoriteTrendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteTrendScalarFieldEnum | FavoriteTrendScalarFieldEnum[]
  }

  /**
   * User.favoriteArticles
   */
  export type User$favoriteArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteArticle
     */
    select?: FavoriteArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteArticle
     */
    omit?: FavoriteArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteArticleInclude<ExtArgs> | null
    where?: FavoriteArticleWhereInput
    orderBy?: FavoriteArticleOrderByWithRelationInput | FavoriteArticleOrderByWithRelationInput[]
    cursor?: FavoriteArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteArticleScalarFieldEnum | FavoriteArticleScalarFieldEnum[]
  }

  /**
   * User.dailyRecommendations
   */
  export type User$dailyRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecommendation
     */
    select?: DailyRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRecommendation
     */
    omit?: DailyRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRecommendationInclude<ExtArgs> | null
    where?: DailyRecommendationWhereInput
    orderBy?: DailyRecommendationOrderByWithRelationInput | DailyRecommendationOrderByWithRelationInput[]
    cursor?: DailyRecommendationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyRecommendationScalarFieldEnum | DailyRecommendationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Bookmark
   */

  export type AggregateBookmark = {
    _count: BookmarkCountAggregateOutputType | null
    _min: BookmarkMinAggregateOutputType | null
    _max: BookmarkMaxAggregateOutputType | null
  }

  export type BookmarkMinAggregateOutputType = {
    id: string | null
    userId: string | null
    workId: string | null
    createdAt: Date | null
  }

  export type BookmarkMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    workId: string | null
    createdAt: Date | null
  }

  export type BookmarkCountAggregateOutputType = {
    id: number
    userId: number
    workId: number
    createdAt: number
    _all: number
  }


  export type BookmarkMinAggregateInputType = {
    id?: true
    userId?: true
    workId?: true
    createdAt?: true
  }

  export type BookmarkMaxAggregateInputType = {
    id?: true
    userId?: true
    workId?: true
    createdAt?: true
  }

  export type BookmarkCountAggregateInputType = {
    id?: true
    userId?: true
    workId?: true
    createdAt?: true
    _all?: true
  }

  export type BookmarkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookmark to aggregate.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookmarks
    **/
    _count?: true | BookmarkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookmarkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookmarkMaxAggregateInputType
  }

  export type GetBookmarkAggregateType<T extends BookmarkAggregateArgs> = {
        [P in keyof T & keyof AggregateBookmark]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookmark[P]>
      : GetScalarType<T[P], AggregateBookmark[P]>
  }




  export type BookmarkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkWhereInput
    orderBy?: BookmarkOrderByWithAggregationInput | BookmarkOrderByWithAggregationInput[]
    by: BookmarkScalarFieldEnum[] | BookmarkScalarFieldEnum
    having?: BookmarkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookmarkCountAggregateInputType | true
    _min?: BookmarkMinAggregateInputType
    _max?: BookmarkMaxAggregateInputType
  }

  export type BookmarkGroupByOutputType = {
    id: string
    userId: string
    workId: string
    createdAt: Date
    _count: BookmarkCountAggregateOutputType | null
    _min: BookmarkMinAggregateOutputType | null
    _max: BookmarkMaxAggregateOutputType | null
  }

  type GetBookmarkGroupByPayload<T extends BookmarkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookmarkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookmarkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookmarkGroupByOutputType[P]>
            : GetScalarType<T[P], BookmarkGroupByOutputType[P]>
        }
      >
    >


  export type BookmarkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    workId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmark"]>

  export type BookmarkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    workId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmark"]>

  export type BookmarkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    workId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmark"]>

  export type BookmarkSelectScalar = {
    id?: boolean
    userId?: boolean
    workId?: boolean
    createdAt?: boolean
  }

  export type BookmarkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "workId" | "createdAt", ExtArgs["result"]["bookmark"]>
  export type BookmarkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BookmarkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BookmarkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BookmarkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bookmark"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      workId: string
      createdAt: Date
    }, ExtArgs["result"]["bookmark"]>
    composites: {}
  }

  type BookmarkGetPayload<S extends boolean | null | undefined | BookmarkDefaultArgs> = $Result.GetResult<Prisma.$BookmarkPayload, S>

  type BookmarkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookmarkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookmarkCountAggregateInputType | true
    }

  export interface BookmarkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bookmark'], meta: { name: 'Bookmark' } }
    /**
     * Find zero or one Bookmark that matches the filter.
     * @param {BookmarkFindUniqueArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookmarkFindUniqueArgs>(args: SelectSubset<T, BookmarkFindUniqueArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bookmark that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookmarkFindUniqueOrThrowArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookmarkFindUniqueOrThrowArgs>(args: SelectSubset<T, BookmarkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookmark that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindFirstArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookmarkFindFirstArgs>(args?: SelectSubset<T, BookmarkFindFirstArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookmark that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindFirstOrThrowArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookmarkFindFirstOrThrowArgs>(args?: SelectSubset<T, BookmarkFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookmarks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookmarks
     * const bookmarks = await prisma.bookmark.findMany()
     * 
     * // Get first 10 Bookmarks
     * const bookmarks = await prisma.bookmark.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookmarkWithIdOnly = await prisma.bookmark.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookmarkFindManyArgs>(args?: SelectSubset<T, BookmarkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bookmark.
     * @param {BookmarkCreateArgs} args - Arguments to create a Bookmark.
     * @example
     * // Create one Bookmark
     * const Bookmark = await prisma.bookmark.create({
     *   data: {
     *     // ... data to create a Bookmark
     *   }
     * })
     * 
     */
    create<T extends BookmarkCreateArgs>(args: SelectSubset<T, BookmarkCreateArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookmarks.
     * @param {BookmarkCreateManyArgs} args - Arguments to create many Bookmarks.
     * @example
     * // Create many Bookmarks
     * const bookmark = await prisma.bookmark.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookmarkCreateManyArgs>(args?: SelectSubset<T, BookmarkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookmarks and returns the data saved in the database.
     * @param {BookmarkCreateManyAndReturnArgs} args - Arguments to create many Bookmarks.
     * @example
     * // Create many Bookmarks
     * const bookmark = await prisma.bookmark.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookmarks and only return the `id`
     * const bookmarkWithIdOnly = await prisma.bookmark.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookmarkCreateManyAndReturnArgs>(args?: SelectSubset<T, BookmarkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bookmark.
     * @param {BookmarkDeleteArgs} args - Arguments to delete one Bookmark.
     * @example
     * // Delete one Bookmark
     * const Bookmark = await prisma.bookmark.delete({
     *   where: {
     *     // ... filter to delete one Bookmark
     *   }
     * })
     * 
     */
    delete<T extends BookmarkDeleteArgs>(args: SelectSubset<T, BookmarkDeleteArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bookmark.
     * @param {BookmarkUpdateArgs} args - Arguments to update one Bookmark.
     * @example
     * // Update one Bookmark
     * const bookmark = await prisma.bookmark.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookmarkUpdateArgs>(args: SelectSubset<T, BookmarkUpdateArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookmarks.
     * @param {BookmarkDeleteManyArgs} args - Arguments to filter Bookmarks to delete.
     * @example
     * // Delete a few Bookmarks
     * const { count } = await prisma.bookmark.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookmarkDeleteManyArgs>(args?: SelectSubset<T, BookmarkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookmarks
     * const bookmark = await prisma.bookmark.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookmarkUpdateManyArgs>(args: SelectSubset<T, BookmarkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookmarks and returns the data updated in the database.
     * @param {BookmarkUpdateManyAndReturnArgs} args - Arguments to update many Bookmarks.
     * @example
     * // Update many Bookmarks
     * const bookmark = await prisma.bookmark.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookmarks and only return the `id`
     * const bookmarkWithIdOnly = await prisma.bookmark.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookmarkUpdateManyAndReturnArgs>(args: SelectSubset<T, BookmarkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bookmark.
     * @param {BookmarkUpsertArgs} args - Arguments to update or create a Bookmark.
     * @example
     * // Update or create a Bookmark
     * const bookmark = await prisma.bookmark.upsert({
     *   create: {
     *     // ... data to create a Bookmark
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookmark we want to update
     *   }
     * })
     */
    upsert<T extends BookmarkUpsertArgs>(args: SelectSubset<T, BookmarkUpsertArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkCountArgs} args - Arguments to filter Bookmarks to count.
     * @example
     * // Count the number of Bookmarks
     * const count = await prisma.bookmark.count({
     *   where: {
     *     // ... the filter for the Bookmarks we want to count
     *   }
     * })
    **/
    count<T extends BookmarkCountArgs>(
      args?: Subset<T, BookmarkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookmarkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookmarkAggregateArgs>(args: Subset<T, BookmarkAggregateArgs>): Prisma.PrismaPromise<GetBookmarkAggregateType<T>>

    /**
     * Group by Bookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookmarkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookmarkGroupByArgs['orderBy'] }
        : { orderBy?: BookmarkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookmarkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookmarkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bookmark model
   */
  readonly fields: BookmarkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bookmark.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookmarkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bookmark model
   */
  interface BookmarkFieldRefs {
    readonly id: FieldRef<"Bookmark", 'String'>
    readonly userId: FieldRef<"Bookmark", 'String'>
    readonly workId: FieldRef<"Bookmark", 'String'>
    readonly createdAt: FieldRef<"Bookmark", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bookmark findUnique
   */
  export type BookmarkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark findUniqueOrThrow
   */
  export type BookmarkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark findFirst
   */
  export type BookmarkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookmarks.
     */
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * Bookmark findFirstOrThrow
   */
  export type BookmarkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookmarks.
     */
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * Bookmark findMany
   */
  export type BookmarkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmarks to fetch.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookmarks.
     */
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * Bookmark create
   */
  export type BookmarkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * The data needed to create a Bookmark.
     */
    data: XOR<BookmarkCreateInput, BookmarkUncheckedCreateInput>
  }

  /**
   * Bookmark createMany
   */
  export type BookmarkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookmarks.
     */
    data: BookmarkCreateManyInput | BookmarkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bookmark createManyAndReturn
   */
  export type BookmarkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * The data used to create many Bookmarks.
     */
    data: BookmarkCreateManyInput | BookmarkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bookmark update
   */
  export type BookmarkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * The data needed to update a Bookmark.
     */
    data: XOR<BookmarkUpdateInput, BookmarkUncheckedUpdateInput>
    /**
     * Choose, which Bookmark to update.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark updateMany
   */
  export type BookmarkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookmarks.
     */
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyInput>
    /**
     * Filter which Bookmarks to update
     */
    where?: BookmarkWhereInput
    /**
     * Limit how many Bookmarks to update.
     */
    limit?: number
  }

  /**
   * Bookmark updateManyAndReturn
   */
  export type BookmarkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * The data used to update Bookmarks.
     */
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyInput>
    /**
     * Filter which Bookmarks to update
     */
    where?: BookmarkWhereInput
    /**
     * Limit how many Bookmarks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bookmark upsert
   */
  export type BookmarkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * The filter to search for the Bookmark to update in case it exists.
     */
    where: BookmarkWhereUniqueInput
    /**
     * In case the Bookmark found by the `where` argument doesn't exist, create a new Bookmark with this data.
     */
    create: XOR<BookmarkCreateInput, BookmarkUncheckedCreateInput>
    /**
     * In case the Bookmark was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookmarkUpdateInput, BookmarkUncheckedUpdateInput>
  }

  /**
   * Bookmark delete
   */
  export type BookmarkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter which Bookmark to delete.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark deleteMany
   */
  export type BookmarkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookmarks to delete
     */
    where?: BookmarkWhereInput
    /**
     * Limit how many Bookmarks to delete.
     */
    limit?: number
  }

  /**
   * Bookmark without action
   */
  export type BookmarkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
  }


  /**
   * Model FavoriteTrend
   */

  export type AggregateFavoriteTrend = {
    _count: FavoriteTrendCountAggregateOutputType | null
    _min: FavoriteTrendMinAggregateOutputType | null
    _max: FavoriteTrendMaxAggregateOutputType | null
  }

  export type FavoriteTrendMinAggregateOutputType = {
    id: string | null
    userId: string | null
    trendId: string | null
    trendDate: string | null
    trendTitle: string | null
    savedAt: Date | null
  }

  export type FavoriteTrendMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    trendId: string | null
    trendDate: string | null
    trendTitle: string | null
    savedAt: Date | null
  }

  export type FavoriteTrendCountAggregateOutputType = {
    id: number
    userId: number
    trendId: number
    trendDate: number
    trendTitle: number
    savedAt: number
    _all: number
  }


  export type FavoriteTrendMinAggregateInputType = {
    id?: true
    userId?: true
    trendId?: true
    trendDate?: true
    trendTitle?: true
    savedAt?: true
  }

  export type FavoriteTrendMaxAggregateInputType = {
    id?: true
    userId?: true
    trendId?: true
    trendDate?: true
    trendTitle?: true
    savedAt?: true
  }

  export type FavoriteTrendCountAggregateInputType = {
    id?: true
    userId?: true
    trendId?: true
    trendDate?: true
    trendTitle?: true
    savedAt?: true
    _all?: true
  }

  export type FavoriteTrendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteTrend to aggregate.
     */
    where?: FavoriteTrendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteTrends to fetch.
     */
    orderBy?: FavoriteTrendOrderByWithRelationInput | FavoriteTrendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteTrendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteTrends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteTrends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FavoriteTrends
    **/
    _count?: true | FavoriteTrendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteTrendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteTrendMaxAggregateInputType
  }

  export type GetFavoriteTrendAggregateType<T extends FavoriteTrendAggregateArgs> = {
        [P in keyof T & keyof AggregateFavoriteTrend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavoriteTrend[P]>
      : GetScalarType<T[P], AggregateFavoriteTrend[P]>
  }




  export type FavoriteTrendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteTrendWhereInput
    orderBy?: FavoriteTrendOrderByWithAggregationInput | FavoriteTrendOrderByWithAggregationInput[]
    by: FavoriteTrendScalarFieldEnum[] | FavoriteTrendScalarFieldEnum
    having?: FavoriteTrendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteTrendCountAggregateInputType | true
    _min?: FavoriteTrendMinAggregateInputType
    _max?: FavoriteTrendMaxAggregateInputType
  }

  export type FavoriteTrendGroupByOutputType = {
    id: string
    userId: string
    trendId: string
    trendDate: string
    trendTitle: string
    savedAt: Date
    _count: FavoriteTrendCountAggregateOutputType | null
    _min: FavoriteTrendMinAggregateOutputType | null
    _max: FavoriteTrendMaxAggregateOutputType | null
  }

  type GetFavoriteTrendGroupByPayload<T extends FavoriteTrendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteTrendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteTrendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteTrendGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteTrendGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteTrendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    trendId?: boolean
    trendDate?: boolean
    trendTitle?: boolean
    savedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteTrend"]>

  export type FavoriteTrendSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    trendId?: boolean
    trendDate?: boolean
    trendTitle?: boolean
    savedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteTrend"]>

  export type FavoriteTrendSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    trendId?: boolean
    trendDate?: boolean
    trendTitle?: boolean
    savedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteTrend"]>

  export type FavoriteTrendSelectScalar = {
    id?: boolean
    userId?: boolean
    trendId?: boolean
    trendDate?: boolean
    trendTitle?: boolean
    savedAt?: boolean
  }

  export type FavoriteTrendOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "trendId" | "trendDate" | "trendTitle" | "savedAt", ExtArgs["result"]["favoriteTrend"]>
  export type FavoriteTrendInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FavoriteTrendIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FavoriteTrendIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FavoriteTrendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FavoriteTrend"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      trendId: string
      trendDate: string
      trendTitle: string
      savedAt: Date
    }, ExtArgs["result"]["favoriteTrend"]>
    composites: {}
  }

  type FavoriteTrendGetPayload<S extends boolean | null | undefined | FavoriteTrendDefaultArgs> = $Result.GetResult<Prisma.$FavoriteTrendPayload, S>

  type FavoriteTrendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteTrendFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteTrendCountAggregateInputType | true
    }

  export interface FavoriteTrendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FavoriteTrend'], meta: { name: 'FavoriteTrend' } }
    /**
     * Find zero or one FavoriteTrend that matches the filter.
     * @param {FavoriteTrendFindUniqueArgs} args - Arguments to find a FavoriteTrend
     * @example
     * // Get one FavoriteTrend
     * const favoriteTrend = await prisma.favoriteTrend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteTrendFindUniqueArgs>(args: SelectSubset<T, FavoriteTrendFindUniqueArgs<ExtArgs>>): Prisma__FavoriteTrendClient<$Result.GetResult<Prisma.$FavoriteTrendPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FavoriteTrend that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteTrendFindUniqueOrThrowArgs} args - Arguments to find a FavoriteTrend
     * @example
     * // Get one FavoriteTrend
     * const favoriteTrend = await prisma.favoriteTrend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteTrendFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteTrendFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteTrendClient<$Result.GetResult<Prisma.$FavoriteTrendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavoriteTrend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteTrendFindFirstArgs} args - Arguments to find a FavoriteTrend
     * @example
     * // Get one FavoriteTrend
     * const favoriteTrend = await prisma.favoriteTrend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteTrendFindFirstArgs>(args?: SelectSubset<T, FavoriteTrendFindFirstArgs<ExtArgs>>): Prisma__FavoriteTrendClient<$Result.GetResult<Prisma.$FavoriteTrendPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavoriteTrend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteTrendFindFirstOrThrowArgs} args - Arguments to find a FavoriteTrend
     * @example
     * // Get one FavoriteTrend
     * const favoriteTrend = await prisma.favoriteTrend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteTrendFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteTrendFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteTrendClient<$Result.GetResult<Prisma.$FavoriteTrendPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FavoriteTrends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteTrendFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FavoriteTrends
     * const favoriteTrends = await prisma.favoriteTrend.findMany()
     * 
     * // Get first 10 FavoriteTrends
     * const favoriteTrends = await prisma.favoriteTrend.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteTrendWithIdOnly = await prisma.favoriteTrend.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteTrendFindManyArgs>(args?: SelectSubset<T, FavoriteTrendFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteTrendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FavoriteTrend.
     * @param {FavoriteTrendCreateArgs} args - Arguments to create a FavoriteTrend.
     * @example
     * // Create one FavoriteTrend
     * const FavoriteTrend = await prisma.favoriteTrend.create({
     *   data: {
     *     // ... data to create a FavoriteTrend
     *   }
     * })
     * 
     */
    create<T extends FavoriteTrendCreateArgs>(args: SelectSubset<T, FavoriteTrendCreateArgs<ExtArgs>>): Prisma__FavoriteTrendClient<$Result.GetResult<Prisma.$FavoriteTrendPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FavoriteTrends.
     * @param {FavoriteTrendCreateManyArgs} args - Arguments to create many FavoriteTrends.
     * @example
     * // Create many FavoriteTrends
     * const favoriteTrend = await prisma.favoriteTrend.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteTrendCreateManyArgs>(args?: SelectSubset<T, FavoriteTrendCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FavoriteTrends and returns the data saved in the database.
     * @param {FavoriteTrendCreateManyAndReturnArgs} args - Arguments to create many FavoriteTrends.
     * @example
     * // Create many FavoriteTrends
     * const favoriteTrend = await prisma.favoriteTrend.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FavoriteTrends and only return the `id`
     * const favoriteTrendWithIdOnly = await prisma.favoriteTrend.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteTrendCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteTrendCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteTrendPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FavoriteTrend.
     * @param {FavoriteTrendDeleteArgs} args - Arguments to delete one FavoriteTrend.
     * @example
     * // Delete one FavoriteTrend
     * const FavoriteTrend = await prisma.favoriteTrend.delete({
     *   where: {
     *     // ... filter to delete one FavoriteTrend
     *   }
     * })
     * 
     */
    delete<T extends FavoriteTrendDeleteArgs>(args: SelectSubset<T, FavoriteTrendDeleteArgs<ExtArgs>>): Prisma__FavoriteTrendClient<$Result.GetResult<Prisma.$FavoriteTrendPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FavoriteTrend.
     * @param {FavoriteTrendUpdateArgs} args - Arguments to update one FavoriteTrend.
     * @example
     * // Update one FavoriteTrend
     * const favoriteTrend = await prisma.favoriteTrend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteTrendUpdateArgs>(args: SelectSubset<T, FavoriteTrendUpdateArgs<ExtArgs>>): Prisma__FavoriteTrendClient<$Result.GetResult<Prisma.$FavoriteTrendPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FavoriteTrends.
     * @param {FavoriteTrendDeleteManyArgs} args - Arguments to filter FavoriteTrends to delete.
     * @example
     * // Delete a few FavoriteTrends
     * const { count } = await prisma.favoriteTrend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteTrendDeleteManyArgs>(args?: SelectSubset<T, FavoriteTrendDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoriteTrends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteTrendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FavoriteTrends
     * const favoriteTrend = await prisma.favoriteTrend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteTrendUpdateManyArgs>(args: SelectSubset<T, FavoriteTrendUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoriteTrends and returns the data updated in the database.
     * @param {FavoriteTrendUpdateManyAndReturnArgs} args - Arguments to update many FavoriteTrends.
     * @example
     * // Update many FavoriteTrends
     * const favoriteTrend = await prisma.favoriteTrend.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FavoriteTrends and only return the `id`
     * const favoriteTrendWithIdOnly = await prisma.favoriteTrend.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FavoriteTrendUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteTrendUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteTrendPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FavoriteTrend.
     * @param {FavoriteTrendUpsertArgs} args - Arguments to update or create a FavoriteTrend.
     * @example
     * // Update or create a FavoriteTrend
     * const favoriteTrend = await prisma.favoriteTrend.upsert({
     *   create: {
     *     // ... data to create a FavoriteTrend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FavoriteTrend we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteTrendUpsertArgs>(args: SelectSubset<T, FavoriteTrendUpsertArgs<ExtArgs>>): Prisma__FavoriteTrendClient<$Result.GetResult<Prisma.$FavoriteTrendPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FavoriteTrends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteTrendCountArgs} args - Arguments to filter FavoriteTrends to count.
     * @example
     * // Count the number of FavoriteTrends
     * const count = await prisma.favoriteTrend.count({
     *   where: {
     *     // ... the filter for the FavoriteTrends we want to count
     *   }
     * })
    **/
    count<T extends FavoriteTrendCountArgs>(
      args?: Subset<T, FavoriteTrendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteTrendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FavoriteTrend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteTrendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavoriteTrendAggregateArgs>(args: Subset<T, FavoriteTrendAggregateArgs>): Prisma.PrismaPromise<GetFavoriteTrendAggregateType<T>>

    /**
     * Group by FavoriteTrend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteTrendGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavoriteTrendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteTrendGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteTrendGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavoriteTrendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteTrendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FavoriteTrend model
   */
  readonly fields: FavoriteTrendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FavoriteTrend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteTrendClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FavoriteTrend model
   */
  interface FavoriteTrendFieldRefs {
    readonly id: FieldRef<"FavoriteTrend", 'String'>
    readonly userId: FieldRef<"FavoriteTrend", 'String'>
    readonly trendId: FieldRef<"FavoriteTrend", 'String'>
    readonly trendDate: FieldRef<"FavoriteTrend", 'String'>
    readonly trendTitle: FieldRef<"FavoriteTrend", 'String'>
    readonly savedAt: FieldRef<"FavoriteTrend", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FavoriteTrend findUnique
   */
  export type FavoriteTrendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteTrend
     */
    select?: FavoriteTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteTrend
     */
    omit?: FavoriteTrendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteTrendInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteTrend to fetch.
     */
    where: FavoriteTrendWhereUniqueInput
  }

  /**
   * FavoriteTrend findUniqueOrThrow
   */
  export type FavoriteTrendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteTrend
     */
    select?: FavoriteTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteTrend
     */
    omit?: FavoriteTrendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteTrendInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteTrend to fetch.
     */
    where: FavoriteTrendWhereUniqueInput
  }

  /**
   * FavoriteTrend findFirst
   */
  export type FavoriteTrendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteTrend
     */
    select?: FavoriteTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteTrend
     */
    omit?: FavoriteTrendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteTrendInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteTrend to fetch.
     */
    where?: FavoriteTrendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteTrends to fetch.
     */
    orderBy?: FavoriteTrendOrderByWithRelationInput | FavoriteTrendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteTrends.
     */
    cursor?: FavoriteTrendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteTrends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteTrends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteTrends.
     */
    distinct?: FavoriteTrendScalarFieldEnum | FavoriteTrendScalarFieldEnum[]
  }

  /**
   * FavoriteTrend findFirstOrThrow
   */
  export type FavoriteTrendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteTrend
     */
    select?: FavoriteTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteTrend
     */
    omit?: FavoriteTrendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteTrendInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteTrend to fetch.
     */
    where?: FavoriteTrendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteTrends to fetch.
     */
    orderBy?: FavoriteTrendOrderByWithRelationInput | FavoriteTrendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteTrends.
     */
    cursor?: FavoriteTrendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteTrends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteTrends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteTrends.
     */
    distinct?: FavoriteTrendScalarFieldEnum | FavoriteTrendScalarFieldEnum[]
  }

  /**
   * FavoriteTrend findMany
   */
  export type FavoriteTrendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteTrend
     */
    select?: FavoriteTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteTrend
     */
    omit?: FavoriteTrendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteTrendInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteTrends to fetch.
     */
    where?: FavoriteTrendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteTrends to fetch.
     */
    orderBy?: FavoriteTrendOrderByWithRelationInput | FavoriteTrendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FavoriteTrends.
     */
    cursor?: FavoriteTrendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteTrends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteTrends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteTrends.
     */
    distinct?: FavoriteTrendScalarFieldEnum | FavoriteTrendScalarFieldEnum[]
  }

  /**
   * FavoriteTrend create
   */
  export type FavoriteTrendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteTrend
     */
    select?: FavoriteTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteTrend
     */
    omit?: FavoriteTrendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteTrendInclude<ExtArgs> | null
    /**
     * The data needed to create a FavoriteTrend.
     */
    data: XOR<FavoriteTrendCreateInput, FavoriteTrendUncheckedCreateInput>
  }

  /**
   * FavoriteTrend createMany
   */
  export type FavoriteTrendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FavoriteTrends.
     */
    data: FavoriteTrendCreateManyInput | FavoriteTrendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FavoriteTrend createManyAndReturn
   */
  export type FavoriteTrendCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteTrend
     */
    select?: FavoriteTrendSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteTrend
     */
    omit?: FavoriteTrendOmit<ExtArgs> | null
    /**
     * The data used to create many FavoriteTrends.
     */
    data: FavoriteTrendCreateManyInput | FavoriteTrendCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteTrendIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FavoriteTrend update
   */
  export type FavoriteTrendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteTrend
     */
    select?: FavoriteTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteTrend
     */
    omit?: FavoriteTrendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteTrendInclude<ExtArgs> | null
    /**
     * The data needed to update a FavoriteTrend.
     */
    data: XOR<FavoriteTrendUpdateInput, FavoriteTrendUncheckedUpdateInput>
    /**
     * Choose, which FavoriteTrend to update.
     */
    where: FavoriteTrendWhereUniqueInput
  }

  /**
   * FavoriteTrend updateMany
   */
  export type FavoriteTrendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FavoriteTrends.
     */
    data: XOR<FavoriteTrendUpdateManyMutationInput, FavoriteTrendUncheckedUpdateManyInput>
    /**
     * Filter which FavoriteTrends to update
     */
    where?: FavoriteTrendWhereInput
    /**
     * Limit how many FavoriteTrends to update.
     */
    limit?: number
  }

  /**
   * FavoriteTrend updateManyAndReturn
   */
  export type FavoriteTrendUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteTrend
     */
    select?: FavoriteTrendSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteTrend
     */
    omit?: FavoriteTrendOmit<ExtArgs> | null
    /**
     * The data used to update FavoriteTrends.
     */
    data: XOR<FavoriteTrendUpdateManyMutationInput, FavoriteTrendUncheckedUpdateManyInput>
    /**
     * Filter which FavoriteTrends to update
     */
    where?: FavoriteTrendWhereInput
    /**
     * Limit how many FavoriteTrends to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteTrendIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FavoriteTrend upsert
   */
  export type FavoriteTrendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteTrend
     */
    select?: FavoriteTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteTrend
     */
    omit?: FavoriteTrendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteTrendInclude<ExtArgs> | null
    /**
     * The filter to search for the FavoriteTrend to update in case it exists.
     */
    where: FavoriteTrendWhereUniqueInput
    /**
     * In case the FavoriteTrend found by the `where` argument doesn't exist, create a new FavoriteTrend with this data.
     */
    create: XOR<FavoriteTrendCreateInput, FavoriteTrendUncheckedCreateInput>
    /**
     * In case the FavoriteTrend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteTrendUpdateInput, FavoriteTrendUncheckedUpdateInput>
  }

  /**
   * FavoriteTrend delete
   */
  export type FavoriteTrendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteTrend
     */
    select?: FavoriteTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteTrend
     */
    omit?: FavoriteTrendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteTrendInclude<ExtArgs> | null
    /**
     * Filter which FavoriteTrend to delete.
     */
    where: FavoriteTrendWhereUniqueInput
  }

  /**
   * FavoriteTrend deleteMany
   */
  export type FavoriteTrendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteTrends to delete
     */
    where?: FavoriteTrendWhereInput
    /**
     * Limit how many FavoriteTrends to delete.
     */
    limit?: number
  }

  /**
   * FavoriteTrend without action
   */
  export type FavoriteTrendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteTrend
     */
    select?: FavoriteTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteTrend
     */
    omit?: FavoriteTrendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteTrendInclude<ExtArgs> | null
  }


  /**
   * Model FavoriteArticle
   */

  export type AggregateFavoriteArticle = {
    _count: FavoriteArticleCountAggregateOutputType | null
    _min: FavoriteArticleMinAggregateOutputType | null
    _max: FavoriteArticleMaxAggregateOutputType | null
  }

  export type FavoriteArticleMinAggregateOutputType = {
    id: string | null
    userId: string | null
    articleId: string | null
    articleTitle: string | null
    articleSource: string | null
    articleDate: string | null
    excerpt: string | null
    savedAt: Date | null
  }

  export type FavoriteArticleMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    articleId: string | null
    articleTitle: string | null
    articleSource: string | null
    articleDate: string | null
    excerpt: string | null
    savedAt: Date | null
  }

  export type FavoriteArticleCountAggregateOutputType = {
    id: number
    userId: number
    articleId: number
    articleTitle: number
    articleSource: number
    articleDate: number
    excerpt: number
    savedAt: number
    _all: number
  }


  export type FavoriteArticleMinAggregateInputType = {
    id?: true
    userId?: true
    articleId?: true
    articleTitle?: true
    articleSource?: true
    articleDate?: true
    excerpt?: true
    savedAt?: true
  }

  export type FavoriteArticleMaxAggregateInputType = {
    id?: true
    userId?: true
    articleId?: true
    articleTitle?: true
    articleSource?: true
    articleDate?: true
    excerpt?: true
    savedAt?: true
  }

  export type FavoriteArticleCountAggregateInputType = {
    id?: true
    userId?: true
    articleId?: true
    articleTitle?: true
    articleSource?: true
    articleDate?: true
    excerpt?: true
    savedAt?: true
    _all?: true
  }

  export type FavoriteArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteArticle to aggregate.
     */
    where?: FavoriteArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteArticles to fetch.
     */
    orderBy?: FavoriteArticleOrderByWithRelationInput | FavoriteArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FavoriteArticles
    **/
    _count?: true | FavoriteArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteArticleMaxAggregateInputType
  }

  export type GetFavoriteArticleAggregateType<T extends FavoriteArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateFavoriteArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavoriteArticle[P]>
      : GetScalarType<T[P], AggregateFavoriteArticle[P]>
  }




  export type FavoriteArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteArticleWhereInput
    orderBy?: FavoriteArticleOrderByWithAggregationInput | FavoriteArticleOrderByWithAggregationInput[]
    by: FavoriteArticleScalarFieldEnum[] | FavoriteArticleScalarFieldEnum
    having?: FavoriteArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteArticleCountAggregateInputType | true
    _min?: FavoriteArticleMinAggregateInputType
    _max?: FavoriteArticleMaxAggregateInputType
  }

  export type FavoriteArticleGroupByOutputType = {
    id: string
    userId: string
    articleId: string
    articleTitle: string
    articleSource: string
    articleDate: string
    excerpt: string | null
    savedAt: Date
    _count: FavoriteArticleCountAggregateOutputType | null
    _min: FavoriteArticleMinAggregateOutputType | null
    _max: FavoriteArticleMaxAggregateOutputType | null
  }

  type GetFavoriteArticleGroupByPayload<T extends FavoriteArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteArticleGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteArticleGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    articleId?: boolean
    articleTitle?: boolean
    articleSource?: boolean
    articleDate?: boolean
    excerpt?: boolean
    savedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteArticle"]>

  export type FavoriteArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    articleId?: boolean
    articleTitle?: boolean
    articleSource?: boolean
    articleDate?: boolean
    excerpt?: boolean
    savedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteArticle"]>

  export type FavoriteArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    articleId?: boolean
    articleTitle?: boolean
    articleSource?: boolean
    articleDate?: boolean
    excerpt?: boolean
    savedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteArticle"]>

  export type FavoriteArticleSelectScalar = {
    id?: boolean
    userId?: boolean
    articleId?: boolean
    articleTitle?: boolean
    articleSource?: boolean
    articleDate?: boolean
    excerpt?: boolean
    savedAt?: boolean
  }

  export type FavoriteArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "articleId" | "articleTitle" | "articleSource" | "articleDate" | "excerpt" | "savedAt", ExtArgs["result"]["favoriteArticle"]>
  export type FavoriteArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FavoriteArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FavoriteArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FavoriteArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FavoriteArticle"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      articleId: string
      articleTitle: string
      articleSource: string
      articleDate: string
      excerpt: string | null
      savedAt: Date
    }, ExtArgs["result"]["favoriteArticle"]>
    composites: {}
  }

  type FavoriteArticleGetPayload<S extends boolean | null | undefined | FavoriteArticleDefaultArgs> = $Result.GetResult<Prisma.$FavoriteArticlePayload, S>

  type FavoriteArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteArticleCountAggregateInputType | true
    }

  export interface FavoriteArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FavoriteArticle'], meta: { name: 'FavoriteArticle' } }
    /**
     * Find zero or one FavoriteArticle that matches the filter.
     * @param {FavoriteArticleFindUniqueArgs} args - Arguments to find a FavoriteArticle
     * @example
     * // Get one FavoriteArticle
     * const favoriteArticle = await prisma.favoriteArticle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteArticleFindUniqueArgs>(args: SelectSubset<T, FavoriteArticleFindUniqueArgs<ExtArgs>>): Prisma__FavoriteArticleClient<$Result.GetResult<Prisma.$FavoriteArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FavoriteArticle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteArticleFindUniqueOrThrowArgs} args - Arguments to find a FavoriteArticle
     * @example
     * // Get one FavoriteArticle
     * const favoriteArticle = await prisma.favoriteArticle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteArticleClient<$Result.GetResult<Prisma.$FavoriteArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavoriteArticle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteArticleFindFirstArgs} args - Arguments to find a FavoriteArticle
     * @example
     * // Get one FavoriteArticle
     * const favoriteArticle = await prisma.favoriteArticle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteArticleFindFirstArgs>(args?: SelectSubset<T, FavoriteArticleFindFirstArgs<ExtArgs>>): Prisma__FavoriteArticleClient<$Result.GetResult<Prisma.$FavoriteArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavoriteArticle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteArticleFindFirstOrThrowArgs} args - Arguments to find a FavoriteArticle
     * @example
     * // Get one FavoriteArticle
     * const favoriteArticle = await prisma.favoriteArticle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteArticleClient<$Result.GetResult<Prisma.$FavoriteArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FavoriteArticles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FavoriteArticles
     * const favoriteArticles = await prisma.favoriteArticle.findMany()
     * 
     * // Get first 10 FavoriteArticles
     * const favoriteArticles = await prisma.favoriteArticle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteArticleWithIdOnly = await prisma.favoriteArticle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteArticleFindManyArgs>(args?: SelectSubset<T, FavoriteArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FavoriteArticle.
     * @param {FavoriteArticleCreateArgs} args - Arguments to create a FavoriteArticle.
     * @example
     * // Create one FavoriteArticle
     * const FavoriteArticle = await prisma.favoriteArticle.create({
     *   data: {
     *     // ... data to create a FavoriteArticle
     *   }
     * })
     * 
     */
    create<T extends FavoriteArticleCreateArgs>(args: SelectSubset<T, FavoriteArticleCreateArgs<ExtArgs>>): Prisma__FavoriteArticleClient<$Result.GetResult<Prisma.$FavoriteArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FavoriteArticles.
     * @param {FavoriteArticleCreateManyArgs} args - Arguments to create many FavoriteArticles.
     * @example
     * // Create many FavoriteArticles
     * const favoriteArticle = await prisma.favoriteArticle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteArticleCreateManyArgs>(args?: SelectSubset<T, FavoriteArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FavoriteArticles and returns the data saved in the database.
     * @param {FavoriteArticleCreateManyAndReturnArgs} args - Arguments to create many FavoriteArticles.
     * @example
     * // Create many FavoriteArticles
     * const favoriteArticle = await prisma.favoriteArticle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FavoriteArticles and only return the `id`
     * const favoriteArticleWithIdOnly = await prisma.favoriteArticle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FavoriteArticle.
     * @param {FavoriteArticleDeleteArgs} args - Arguments to delete one FavoriteArticle.
     * @example
     * // Delete one FavoriteArticle
     * const FavoriteArticle = await prisma.favoriteArticle.delete({
     *   where: {
     *     // ... filter to delete one FavoriteArticle
     *   }
     * })
     * 
     */
    delete<T extends FavoriteArticleDeleteArgs>(args: SelectSubset<T, FavoriteArticleDeleteArgs<ExtArgs>>): Prisma__FavoriteArticleClient<$Result.GetResult<Prisma.$FavoriteArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FavoriteArticle.
     * @param {FavoriteArticleUpdateArgs} args - Arguments to update one FavoriteArticle.
     * @example
     * // Update one FavoriteArticle
     * const favoriteArticle = await prisma.favoriteArticle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteArticleUpdateArgs>(args: SelectSubset<T, FavoriteArticleUpdateArgs<ExtArgs>>): Prisma__FavoriteArticleClient<$Result.GetResult<Prisma.$FavoriteArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FavoriteArticles.
     * @param {FavoriteArticleDeleteManyArgs} args - Arguments to filter FavoriteArticles to delete.
     * @example
     * // Delete a few FavoriteArticles
     * const { count } = await prisma.favoriteArticle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteArticleDeleteManyArgs>(args?: SelectSubset<T, FavoriteArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoriteArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FavoriteArticles
     * const favoriteArticle = await prisma.favoriteArticle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteArticleUpdateManyArgs>(args: SelectSubset<T, FavoriteArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoriteArticles and returns the data updated in the database.
     * @param {FavoriteArticleUpdateManyAndReturnArgs} args - Arguments to update many FavoriteArticles.
     * @example
     * // Update many FavoriteArticles
     * const favoriteArticle = await prisma.favoriteArticle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FavoriteArticles and only return the `id`
     * const favoriteArticleWithIdOnly = await prisma.favoriteArticle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FavoriteArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FavoriteArticle.
     * @param {FavoriteArticleUpsertArgs} args - Arguments to update or create a FavoriteArticle.
     * @example
     * // Update or create a FavoriteArticle
     * const favoriteArticle = await prisma.favoriteArticle.upsert({
     *   create: {
     *     // ... data to create a FavoriteArticle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FavoriteArticle we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteArticleUpsertArgs>(args: SelectSubset<T, FavoriteArticleUpsertArgs<ExtArgs>>): Prisma__FavoriteArticleClient<$Result.GetResult<Prisma.$FavoriteArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FavoriteArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteArticleCountArgs} args - Arguments to filter FavoriteArticles to count.
     * @example
     * // Count the number of FavoriteArticles
     * const count = await prisma.favoriteArticle.count({
     *   where: {
     *     // ... the filter for the FavoriteArticles we want to count
     *   }
     * })
    **/
    count<T extends FavoriteArticleCountArgs>(
      args?: Subset<T, FavoriteArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FavoriteArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavoriteArticleAggregateArgs>(args: Subset<T, FavoriteArticleAggregateArgs>): Prisma.PrismaPromise<GetFavoriteArticleAggregateType<T>>

    /**
     * Group by FavoriteArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteArticleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavoriteArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteArticleGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteArticleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavoriteArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FavoriteArticle model
   */
  readonly fields: FavoriteArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FavoriteArticle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FavoriteArticle model
   */
  interface FavoriteArticleFieldRefs {
    readonly id: FieldRef<"FavoriteArticle", 'String'>
    readonly userId: FieldRef<"FavoriteArticle", 'String'>
    readonly articleId: FieldRef<"FavoriteArticle", 'String'>
    readonly articleTitle: FieldRef<"FavoriteArticle", 'String'>
    readonly articleSource: FieldRef<"FavoriteArticle", 'String'>
    readonly articleDate: FieldRef<"FavoriteArticle", 'String'>
    readonly excerpt: FieldRef<"FavoriteArticle", 'String'>
    readonly savedAt: FieldRef<"FavoriteArticle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FavoriteArticle findUnique
   */
  export type FavoriteArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteArticle
     */
    select?: FavoriteArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteArticle
     */
    omit?: FavoriteArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteArticleInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteArticle to fetch.
     */
    where: FavoriteArticleWhereUniqueInput
  }

  /**
   * FavoriteArticle findUniqueOrThrow
   */
  export type FavoriteArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteArticle
     */
    select?: FavoriteArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteArticle
     */
    omit?: FavoriteArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteArticleInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteArticle to fetch.
     */
    where: FavoriteArticleWhereUniqueInput
  }

  /**
   * FavoriteArticle findFirst
   */
  export type FavoriteArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteArticle
     */
    select?: FavoriteArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteArticle
     */
    omit?: FavoriteArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteArticleInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteArticle to fetch.
     */
    where?: FavoriteArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteArticles to fetch.
     */
    orderBy?: FavoriteArticleOrderByWithRelationInput | FavoriteArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteArticles.
     */
    cursor?: FavoriteArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteArticles.
     */
    distinct?: FavoriteArticleScalarFieldEnum | FavoriteArticleScalarFieldEnum[]
  }

  /**
   * FavoriteArticle findFirstOrThrow
   */
  export type FavoriteArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteArticle
     */
    select?: FavoriteArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteArticle
     */
    omit?: FavoriteArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteArticleInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteArticle to fetch.
     */
    where?: FavoriteArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteArticles to fetch.
     */
    orderBy?: FavoriteArticleOrderByWithRelationInput | FavoriteArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteArticles.
     */
    cursor?: FavoriteArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteArticles.
     */
    distinct?: FavoriteArticleScalarFieldEnum | FavoriteArticleScalarFieldEnum[]
  }

  /**
   * FavoriteArticle findMany
   */
  export type FavoriteArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteArticle
     */
    select?: FavoriteArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteArticle
     */
    omit?: FavoriteArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteArticleInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteArticles to fetch.
     */
    where?: FavoriteArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteArticles to fetch.
     */
    orderBy?: FavoriteArticleOrderByWithRelationInput | FavoriteArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FavoriteArticles.
     */
    cursor?: FavoriteArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteArticles.
     */
    distinct?: FavoriteArticleScalarFieldEnum | FavoriteArticleScalarFieldEnum[]
  }

  /**
   * FavoriteArticle create
   */
  export type FavoriteArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteArticle
     */
    select?: FavoriteArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteArticle
     */
    omit?: FavoriteArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a FavoriteArticle.
     */
    data: XOR<FavoriteArticleCreateInput, FavoriteArticleUncheckedCreateInput>
  }

  /**
   * FavoriteArticle createMany
   */
  export type FavoriteArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FavoriteArticles.
     */
    data: FavoriteArticleCreateManyInput | FavoriteArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FavoriteArticle createManyAndReturn
   */
  export type FavoriteArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteArticle
     */
    select?: FavoriteArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteArticle
     */
    omit?: FavoriteArticleOmit<ExtArgs> | null
    /**
     * The data used to create many FavoriteArticles.
     */
    data: FavoriteArticleCreateManyInput | FavoriteArticleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteArticleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FavoriteArticle update
   */
  export type FavoriteArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteArticle
     */
    select?: FavoriteArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteArticle
     */
    omit?: FavoriteArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a FavoriteArticle.
     */
    data: XOR<FavoriteArticleUpdateInput, FavoriteArticleUncheckedUpdateInput>
    /**
     * Choose, which FavoriteArticle to update.
     */
    where: FavoriteArticleWhereUniqueInput
  }

  /**
   * FavoriteArticle updateMany
   */
  export type FavoriteArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FavoriteArticles.
     */
    data: XOR<FavoriteArticleUpdateManyMutationInput, FavoriteArticleUncheckedUpdateManyInput>
    /**
     * Filter which FavoriteArticles to update
     */
    where?: FavoriteArticleWhereInput
    /**
     * Limit how many FavoriteArticles to update.
     */
    limit?: number
  }

  /**
   * FavoriteArticle updateManyAndReturn
   */
  export type FavoriteArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteArticle
     */
    select?: FavoriteArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteArticle
     */
    omit?: FavoriteArticleOmit<ExtArgs> | null
    /**
     * The data used to update FavoriteArticles.
     */
    data: XOR<FavoriteArticleUpdateManyMutationInput, FavoriteArticleUncheckedUpdateManyInput>
    /**
     * Filter which FavoriteArticles to update
     */
    where?: FavoriteArticleWhereInput
    /**
     * Limit how many FavoriteArticles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteArticleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FavoriteArticle upsert
   */
  export type FavoriteArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteArticle
     */
    select?: FavoriteArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteArticle
     */
    omit?: FavoriteArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the FavoriteArticle to update in case it exists.
     */
    where: FavoriteArticleWhereUniqueInput
    /**
     * In case the FavoriteArticle found by the `where` argument doesn't exist, create a new FavoriteArticle with this data.
     */
    create: XOR<FavoriteArticleCreateInput, FavoriteArticleUncheckedCreateInput>
    /**
     * In case the FavoriteArticle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteArticleUpdateInput, FavoriteArticleUncheckedUpdateInput>
  }

  /**
   * FavoriteArticle delete
   */
  export type FavoriteArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteArticle
     */
    select?: FavoriteArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteArticle
     */
    omit?: FavoriteArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteArticleInclude<ExtArgs> | null
    /**
     * Filter which FavoriteArticle to delete.
     */
    where: FavoriteArticleWhereUniqueInput
  }

  /**
   * FavoriteArticle deleteMany
   */
  export type FavoriteArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteArticles to delete
     */
    where?: FavoriteArticleWhereInput
    /**
     * Limit how many FavoriteArticles to delete.
     */
    limit?: number
  }

  /**
   * FavoriteArticle without action
   */
  export type FavoriteArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteArticle
     */
    select?: FavoriteArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteArticle
     */
    omit?: FavoriteArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteArticleInclude<ExtArgs> | null
  }


  /**
   * Model DailyRecommendation
   */

  export type AggregateDailyRecommendation = {
    _count: DailyRecommendationCountAggregateOutputType | null
    _min: DailyRecommendationMinAggregateOutputType | null
    _max: DailyRecommendationMaxAggregateOutputType | null
  }

  export type DailyRecommendationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    bookId: string | null
    date: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type DailyRecommendationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    bookId: string | null
    date: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type DailyRecommendationCountAggregateOutputType = {
    id: number
    userId: number
    bookId: number
    date: number
    reason: number
    createdAt: number
    _all: number
  }


  export type DailyRecommendationMinAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
    date?: true
    reason?: true
    createdAt?: true
  }

  export type DailyRecommendationMaxAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
    date?: true
    reason?: true
    createdAt?: true
  }

  export type DailyRecommendationCountAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
    date?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type DailyRecommendationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyRecommendation to aggregate.
     */
    where?: DailyRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyRecommendations to fetch.
     */
    orderBy?: DailyRecommendationOrderByWithRelationInput | DailyRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyRecommendations
    **/
    _count?: true | DailyRecommendationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyRecommendationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyRecommendationMaxAggregateInputType
  }

  export type GetDailyRecommendationAggregateType<T extends DailyRecommendationAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyRecommendation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyRecommendation[P]>
      : GetScalarType<T[P], AggregateDailyRecommendation[P]>
  }




  export type DailyRecommendationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyRecommendationWhereInput
    orderBy?: DailyRecommendationOrderByWithAggregationInput | DailyRecommendationOrderByWithAggregationInput[]
    by: DailyRecommendationScalarFieldEnum[] | DailyRecommendationScalarFieldEnum
    having?: DailyRecommendationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyRecommendationCountAggregateInputType | true
    _min?: DailyRecommendationMinAggregateInputType
    _max?: DailyRecommendationMaxAggregateInputType
  }

  export type DailyRecommendationGroupByOutputType = {
    id: string
    userId: string
    bookId: string
    date: string
    reason: string
    createdAt: Date
    _count: DailyRecommendationCountAggregateOutputType | null
    _min: DailyRecommendationMinAggregateOutputType | null
    _max: DailyRecommendationMaxAggregateOutputType | null
  }

  type GetDailyRecommendationGroupByPayload<T extends DailyRecommendationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyRecommendationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyRecommendationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyRecommendationGroupByOutputType[P]>
            : GetScalarType<T[P], DailyRecommendationGroupByOutputType[P]>
        }
      >
    >


  export type DailyRecommendationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookId?: boolean
    date?: boolean
    reason?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyRecommendation"]>

  export type DailyRecommendationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookId?: boolean
    date?: boolean
    reason?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyRecommendation"]>

  export type DailyRecommendationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookId?: boolean
    date?: boolean
    reason?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyRecommendation"]>

  export type DailyRecommendationSelectScalar = {
    id?: boolean
    userId?: boolean
    bookId?: boolean
    date?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type DailyRecommendationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bookId" | "date" | "reason" | "createdAt", ExtArgs["result"]["dailyRecommendation"]>
  export type DailyRecommendationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DailyRecommendationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DailyRecommendationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DailyRecommendationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyRecommendation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      bookId: string
      date: string
      reason: string
      createdAt: Date
    }, ExtArgs["result"]["dailyRecommendation"]>
    composites: {}
  }

  type DailyRecommendationGetPayload<S extends boolean | null | undefined | DailyRecommendationDefaultArgs> = $Result.GetResult<Prisma.$DailyRecommendationPayload, S>

  type DailyRecommendationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyRecommendationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyRecommendationCountAggregateInputType | true
    }

  export interface DailyRecommendationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyRecommendation'], meta: { name: 'DailyRecommendation' } }
    /**
     * Find zero or one DailyRecommendation that matches the filter.
     * @param {DailyRecommendationFindUniqueArgs} args - Arguments to find a DailyRecommendation
     * @example
     * // Get one DailyRecommendation
     * const dailyRecommendation = await prisma.dailyRecommendation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyRecommendationFindUniqueArgs>(args: SelectSubset<T, DailyRecommendationFindUniqueArgs<ExtArgs>>): Prisma__DailyRecommendationClient<$Result.GetResult<Prisma.$DailyRecommendationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyRecommendation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyRecommendationFindUniqueOrThrowArgs} args - Arguments to find a DailyRecommendation
     * @example
     * // Get one DailyRecommendation
     * const dailyRecommendation = await prisma.dailyRecommendation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyRecommendationFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyRecommendationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyRecommendationClient<$Result.GetResult<Prisma.$DailyRecommendationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyRecommendation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRecommendationFindFirstArgs} args - Arguments to find a DailyRecommendation
     * @example
     * // Get one DailyRecommendation
     * const dailyRecommendation = await prisma.dailyRecommendation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyRecommendationFindFirstArgs>(args?: SelectSubset<T, DailyRecommendationFindFirstArgs<ExtArgs>>): Prisma__DailyRecommendationClient<$Result.GetResult<Prisma.$DailyRecommendationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyRecommendation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRecommendationFindFirstOrThrowArgs} args - Arguments to find a DailyRecommendation
     * @example
     * // Get one DailyRecommendation
     * const dailyRecommendation = await prisma.dailyRecommendation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyRecommendationFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyRecommendationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyRecommendationClient<$Result.GetResult<Prisma.$DailyRecommendationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyRecommendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRecommendationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyRecommendations
     * const dailyRecommendations = await prisma.dailyRecommendation.findMany()
     * 
     * // Get first 10 DailyRecommendations
     * const dailyRecommendations = await prisma.dailyRecommendation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyRecommendationWithIdOnly = await prisma.dailyRecommendation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyRecommendationFindManyArgs>(args?: SelectSubset<T, DailyRecommendationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyRecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyRecommendation.
     * @param {DailyRecommendationCreateArgs} args - Arguments to create a DailyRecommendation.
     * @example
     * // Create one DailyRecommendation
     * const DailyRecommendation = await prisma.dailyRecommendation.create({
     *   data: {
     *     // ... data to create a DailyRecommendation
     *   }
     * })
     * 
     */
    create<T extends DailyRecommendationCreateArgs>(args: SelectSubset<T, DailyRecommendationCreateArgs<ExtArgs>>): Prisma__DailyRecommendationClient<$Result.GetResult<Prisma.$DailyRecommendationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyRecommendations.
     * @param {DailyRecommendationCreateManyArgs} args - Arguments to create many DailyRecommendations.
     * @example
     * // Create many DailyRecommendations
     * const dailyRecommendation = await prisma.dailyRecommendation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyRecommendationCreateManyArgs>(args?: SelectSubset<T, DailyRecommendationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyRecommendations and returns the data saved in the database.
     * @param {DailyRecommendationCreateManyAndReturnArgs} args - Arguments to create many DailyRecommendations.
     * @example
     * // Create many DailyRecommendations
     * const dailyRecommendation = await prisma.dailyRecommendation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyRecommendations and only return the `id`
     * const dailyRecommendationWithIdOnly = await prisma.dailyRecommendation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyRecommendationCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyRecommendationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyRecommendationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyRecommendation.
     * @param {DailyRecommendationDeleteArgs} args - Arguments to delete one DailyRecommendation.
     * @example
     * // Delete one DailyRecommendation
     * const DailyRecommendation = await prisma.dailyRecommendation.delete({
     *   where: {
     *     // ... filter to delete one DailyRecommendation
     *   }
     * })
     * 
     */
    delete<T extends DailyRecommendationDeleteArgs>(args: SelectSubset<T, DailyRecommendationDeleteArgs<ExtArgs>>): Prisma__DailyRecommendationClient<$Result.GetResult<Prisma.$DailyRecommendationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyRecommendation.
     * @param {DailyRecommendationUpdateArgs} args - Arguments to update one DailyRecommendation.
     * @example
     * // Update one DailyRecommendation
     * const dailyRecommendation = await prisma.dailyRecommendation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyRecommendationUpdateArgs>(args: SelectSubset<T, DailyRecommendationUpdateArgs<ExtArgs>>): Prisma__DailyRecommendationClient<$Result.GetResult<Prisma.$DailyRecommendationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyRecommendations.
     * @param {DailyRecommendationDeleteManyArgs} args - Arguments to filter DailyRecommendations to delete.
     * @example
     * // Delete a few DailyRecommendations
     * const { count } = await prisma.dailyRecommendation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyRecommendationDeleteManyArgs>(args?: SelectSubset<T, DailyRecommendationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyRecommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRecommendationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyRecommendations
     * const dailyRecommendation = await prisma.dailyRecommendation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyRecommendationUpdateManyArgs>(args: SelectSubset<T, DailyRecommendationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyRecommendations and returns the data updated in the database.
     * @param {DailyRecommendationUpdateManyAndReturnArgs} args - Arguments to update many DailyRecommendations.
     * @example
     * // Update many DailyRecommendations
     * const dailyRecommendation = await prisma.dailyRecommendation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyRecommendations and only return the `id`
     * const dailyRecommendationWithIdOnly = await prisma.dailyRecommendation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DailyRecommendationUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyRecommendationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyRecommendationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyRecommendation.
     * @param {DailyRecommendationUpsertArgs} args - Arguments to update or create a DailyRecommendation.
     * @example
     * // Update or create a DailyRecommendation
     * const dailyRecommendation = await prisma.dailyRecommendation.upsert({
     *   create: {
     *     // ... data to create a DailyRecommendation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyRecommendation we want to update
     *   }
     * })
     */
    upsert<T extends DailyRecommendationUpsertArgs>(args: SelectSubset<T, DailyRecommendationUpsertArgs<ExtArgs>>): Prisma__DailyRecommendationClient<$Result.GetResult<Prisma.$DailyRecommendationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyRecommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRecommendationCountArgs} args - Arguments to filter DailyRecommendations to count.
     * @example
     * // Count the number of DailyRecommendations
     * const count = await prisma.dailyRecommendation.count({
     *   where: {
     *     // ... the filter for the DailyRecommendations we want to count
     *   }
     * })
    **/
    count<T extends DailyRecommendationCountArgs>(
      args?: Subset<T, DailyRecommendationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyRecommendationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyRecommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRecommendationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyRecommendationAggregateArgs>(args: Subset<T, DailyRecommendationAggregateArgs>): Prisma.PrismaPromise<GetDailyRecommendationAggregateType<T>>

    /**
     * Group by DailyRecommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRecommendationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyRecommendationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyRecommendationGroupByArgs['orderBy'] }
        : { orderBy?: DailyRecommendationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyRecommendationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyRecommendationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyRecommendation model
   */
  readonly fields: DailyRecommendationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyRecommendation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyRecommendationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyRecommendation model
   */
  interface DailyRecommendationFieldRefs {
    readonly id: FieldRef<"DailyRecommendation", 'String'>
    readonly userId: FieldRef<"DailyRecommendation", 'String'>
    readonly bookId: FieldRef<"DailyRecommendation", 'String'>
    readonly date: FieldRef<"DailyRecommendation", 'String'>
    readonly reason: FieldRef<"DailyRecommendation", 'String'>
    readonly createdAt: FieldRef<"DailyRecommendation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyRecommendation findUnique
   */
  export type DailyRecommendationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecommendation
     */
    select?: DailyRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRecommendation
     */
    omit?: DailyRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which DailyRecommendation to fetch.
     */
    where: DailyRecommendationWhereUniqueInput
  }

  /**
   * DailyRecommendation findUniqueOrThrow
   */
  export type DailyRecommendationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecommendation
     */
    select?: DailyRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRecommendation
     */
    omit?: DailyRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which DailyRecommendation to fetch.
     */
    where: DailyRecommendationWhereUniqueInput
  }

  /**
   * DailyRecommendation findFirst
   */
  export type DailyRecommendationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecommendation
     */
    select?: DailyRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRecommendation
     */
    omit?: DailyRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which DailyRecommendation to fetch.
     */
    where?: DailyRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyRecommendations to fetch.
     */
    orderBy?: DailyRecommendationOrderByWithRelationInput | DailyRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyRecommendations.
     */
    cursor?: DailyRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyRecommendations.
     */
    distinct?: DailyRecommendationScalarFieldEnum | DailyRecommendationScalarFieldEnum[]
  }

  /**
   * DailyRecommendation findFirstOrThrow
   */
  export type DailyRecommendationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecommendation
     */
    select?: DailyRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRecommendation
     */
    omit?: DailyRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which DailyRecommendation to fetch.
     */
    where?: DailyRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyRecommendations to fetch.
     */
    orderBy?: DailyRecommendationOrderByWithRelationInput | DailyRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyRecommendations.
     */
    cursor?: DailyRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyRecommendations.
     */
    distinct?: DailyRecommendationScalarFieldEnum | DailyRecommendationScalarFieldEnum[]
  }

  /**
   * DailyRecommendation findMany
   */
  export type DailyRecommendationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecommendation
     */
    select?: DailyRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRecommendation
     */
    omit?: DailyRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which DailyRecommendations to fetch.
     */
    where?: DailyRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyRecommendations to fetch.
     */
    orderBy?: DailyRecommendationOrderByWithRelationInput | DailyRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyRecommendations.
     */
    cursor?: DailyRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyRecommendations.
     */
    distinct?: DailyRecommendationScalarFieldEnum | DailyRecommendationScalarFieldEnum[]
  }

  /**
   * DailyRecommendation create
   */
  export type DailyRecommendationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecommendation
     */
    select?: DailyRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRecommendation
     */
    omit?: DailyRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRecommendationInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyRecommendation.
     */
    data: XOR<DailyRecommendationCreateInput, DailyRecommendationUncheckedCreateInput>
  }

  /**
   * DailyRecommendation createMany
   */
  export type DailyRecommendationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyRecommendations.
     */
    data: DailyRecommendationCreateManyInput | DailyRecommendationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyRecommendation createManyAndReturn
   */
  export type DailyRecommendationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecommendation
     */
    select?: DailyRecommendationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRecommendation
     */
    omit?: DailyRecommendationOmit<ExtArgs> | null
    /**
     * The data used to create many DailyRecommendations.
     */
    data: DailyRecommendationCreateManyInput | DailyRecommendationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRecommendationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyRecommendation update
   */
  export type DailyRecommendationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecommendation
     */
    select?: DailyRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRecommendation
     */
    omit?: DailyRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRecommendationInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyRecommendation.
     */
    data: XOR<DailyRecommendationUpdateInput, DailyRecommendationUncheckedUpdateInput>
    /**
     * Choose, which DailyRecommendation to update.
     */
    where: DailyRecommendationWhereUniqueInput
  }

  /**
   * DailyRecommendation updateMany
   */
  export type DailyRecommendationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyRecommendations.
     */
    data: XOR<DailyRecommendationUpdateManyMutationInput, DailyRecommendationUncheckedUpdateManyInput>
    /**
     * Filter which DailyRecommendations to update
     */
    where?: DailyRecommendationWhereInput
    /**
     * Limit how many DailyRecommendations to update.
     */
    limit?: number
  }

  /**
   * DailyRecommendation updateManyAndReturn
   */
  export type DailyRecommendationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecommendation
     */
    select?: DailyRecommendationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRecommendation
     */
    omit?: DailyRecommendationOmit<ExtArgs> | null
    /**
     * The data used to update DailyRecommendations.
     */
    data: XOR<DailyRecommendationUpdateManyMutationInput, DailyRecommendationUncheckedUpdateManyInput>
    /**
     * Filter which DailyRecommendations to update
     */
    where?: DailyRecommendationWhereInput
    /**
     * Limit how many DailyRecommendations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRecommendationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyRecommendation upsert
   */
  export type DailyRecommendationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecommendation
     */
    select?: DailyRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRecommendation
     */
    omit?: DailyRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRecommendationInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyRecommendation to update in case it exists.
     */
    where: DailyRecommendationWhereUniqueInput
    /**
     * In case the DailyRecommendation found by the `where` argument doesn't exist, create a new DailyRecommendation with this data.
     */
    create: XOR<DailyRecommendationCreateInput, DailyRecommendationUncheckedCreateInput>
    /**
     * In case the DailyRecommendation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyRecommendationUpdateInput, DailyRecommendationUncheckedUpdateInput>
  }

  /**
   * DailyRecommendation delete
   */
  export type DailyRecommendationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecommendation
     */
    select?: DailyRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRecommendation
     */
    omit?: DailyRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRecommendationInclude<ExtArgs> | null
    /**
     * Filter which DailyRecommendation to delete.
     */
    where: DailyRecommendationWhereUniqueInput
  }

  /**
   * DailyRecommendation deleteMany
   */
  export type DailyRecommendationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyRecommendations to delete
     */
    where?: DailyRecommendationWhereInput
    /**
     * Limit how many DailyRecommendations to delete.
     */
    limit?: number
  }

  /**
   * DailyRecommendation without action
   */
  export type DailyRecommendationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecommendation
     */
    select?: DailyRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRecommendation
     */
    omit?: DailyRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRecommendationInclude<ExtArgs> | null
  }


  /**
   * Model Work
   */

  export type AggregateWork = {
    _count: WorkCountAggregateOutputType | null
    _avg: WorkAvgAggregateOutputType | null
    _sum: WorkSumAggregateOutputType | null
    _min: WorkMinAggregateOutputType | null
    _max: WorkMaxAggregateOutputType | null
  }

  export type WorkAvgAggregateOutputType = {
    year: number | null
  }

  export type WorkSumAggregateOutputType = {
    year: number | null
  }

  export type WorkMinAggregateOutputType = {
    id: string | null
    title: string | null
    titleEn: string | null
    author: string | null
    country: string | null
    flag: string | null
    continent: string | null
    era: string | null
    excerpt: string | null
    gradient: string | null
    year: number | null
    featured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkMaxAggregateOutputType = {
    id: string | null
    title: string | null
    titleEn: string | null
    author: string | null
    country: string | null
    flag: string | null
    continent: string | null
    era: string | null
    excerpt: string | null
    gradient: string | null
    year: number | null
    featured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkCountAggregateOutputType = {
    id: number
    title: number
    titleEn: number
    author: number
    country: number
    flag: number
    continent: number
    era: number
    genres: number
    themes: number
    excerpt: number
    gradient: number
    year: number
    featured: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkAvgAggregateInputType = {
    year?: true
  }

  export type WorkSumAggregateInputType = {
    year?: true
  }

  export type WorkMinAggregateInputType = {
    id?: true
    title?: true
    titleEn?: true
    author?: true
    country?: true
    flag?: true
    continent?: true
    era?: true
    excerpt?: true
    gradient?: true
    year?: true
    featured?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkMaxAggregateInputType = {
    id?: true
    title?: true
    titleEn?: true
    author?: true
    country?: true
    flag?: true
    continent?: true
    era?: true
    excerpt?: true
    gradient?: true
    year?: true
    featured?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkCountAggregateInputType = {
    id?: true
    title?: true
    titleEn?: true
    author?: true
    country?: true
    flag?: true
    continent?: true
    era?: true
    genres?: true
    themes?: true
    excerpt?: true
    gradient?: true
    year?: true
    featured?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Work to aggregate.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Works
    **/
    _count?: true | WorkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkMaxAggregateInputType
  }

  export type GetWorkAggregateType<T extends WorkAggregateArgs> = {
        [P in keyof T & keyof AggregateWork]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWork[P]>
      : GetScalarType<T[P], AggregateWork[P]>
  }




  export type WorkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkWhereInput
    orderBy?: WorkOrderByWithAggregationInput | WorkOrderByWithAggregationInput[]
    by: WorkScalarFieldEnum[] | WorkScalarFieldEnum
    having?: WorkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkCountAggregateInputType | true
    _avg?: WorkAvgAggregateInputType
    _sum?: WorkSumAggregateInputType
    _min?: WorkMinAggregateInputType
    _max?: WorkMaxAggregateInputType
  }

  export type WorkGroupByOutputType = {
    id: string
    title: string
    titleEn: string
    author: string
    country: string
    flag: string
    continent: string
    era: string
    genres: JsonValue
    themes: JsonValue
    excerpt: string
    gradient: string
    year: number | null
    featured: boolean
    createdAt: Date
    updatedAt: Date
    _count: WorkCountAggregateOutputType | null
    _avg: WorkAvgAggregateOutputType | null
    _sum: WorkSumAggregateOutputType | null
    _min: WorkMinAggregateOutputType | null
    _max: WorkMaxAggregateOutputType | null
  }

  type GetWorkGroupByPayload<T extends WorkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkGroupByOutputType[P]>
            : GetScalarType<T[P], WorkGroupByOutputType[P]>
        }
      >
    >


  export type WorkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    titleEn?: boolean
    author?: boolean
    country?: boolean
    flag?: boolean
    continent?: boolean
    era?: boolean
    genres?: boolean
    themes?: boolean
    excerpt?: boolean
    gradient?: boolean
    year?: boolean
    featured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    detail?: boolean | Work$detailArgs<ExtArgs>
    characters?: boolean | Work$charactersArgs<ExtArgs>
    bgImage?: boolean | Work$bgImageArgs<ExtArgs>
    awardWinners?: boolean | Work$awardWinnersArgs<ExtArgs>
    _count?: boolean | WorkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["work"]>

  export type WorkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    titleEn?: boolean
    author?: boolean
    country?: boolean
    flag?: boolean
    continent?: boolean
    era?: boolean
    genres?: boolean
    themes?: boolean
    excerpt?: boolean
    gradient?: boolean
    year?: boolean
    featured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["work"]>

  export type WorkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    titleEn?: boolean
    author?: boolean
    country?: boolean
    flag?: boolean
    continent?: boolean
    era?: boolean
    genres?: boolean
    themes?: boolean
    excerpt?: boolean
    gradient?: boolean
    year?: boolean
    featured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["work"]>

  export type WorkSelectScalar = {
    id?: boolean
    title?: boolean
    titleEn?: boolean
    author?: boolean
    country?: boolean
    flag?: boolean
    continent?: boolean
    era?: boolean
    genres?: boolean
    themes?: boolean
    excerpt?: boolean
    gradient?: boolean
    year?: boolean
    featured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "titleEn" | "author" | "country" | "flag" | "continent" | "era" | "genres" | "themes" | "excerpt" | "gradient" | "year" | "featured" | "createdAt" | "updatedAt", ExtArgs["result"]["work"]>
  export type WorkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detail?: boolean | Work$detailArgs<ExtArgs>
    characters?: boolean | Work$charactersArgs<ExtArgs>
    bgImage?: boolean | Work$bgImageArgs<ExtArgs>
    awardWinners?: boolean | Work$awardWinnersArgs<ExtArgs>
    _count?: boolean | WorkCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WorkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WorkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Work"
    objects: {
      detail: Prisma.$WorkDetailPayload<ExtArgs> | null
      characters: Prisma.$WorkCharacterPayload<ExtArgs>[]
      bgImage: Prisma.$BgImagePayload<ExtArgs> | null
      awardWinners: Prisma.$AwardWinnerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      titleEn: string
      author: string
      country: string
      flag: string
      continent: string
      era: string
      genres: Prisma.JsonValue
      themes: Prisma.JsonValue
      excerpt: string
      gradient: string
      year: number | null
      featured: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["work"]>
    composites: {}
  }

  type WorkGetPayload<S extends boolean | null | undefined | WorkDefaultArgs> = $Result.GetResult<Prisma.$WorkPayload, S>

  type WorkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkCountAggregateInputType | true
    }

  export interface WorkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Work'], meta: { name: 'Work' } }
    /**
     * Find zero or one Work that matches the filter.
     * @param {WorkFindUniqueArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkFindUniqueArgs>(args: SelectSubset<T, WorkFindUniqueArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Work that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkFindUniqueOrThrowArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Work that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFindFirstArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkFindFirstArgs>(args?: SelectSubset<T, WorkFindFirstArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Work that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFindFirstOrThrowArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Works that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Works
     * const works = await prisma.work.findMany()
     * 
     * // Get first 10 Works
     * const works = await prisma.work.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workWithIdOnly = await prisma.work.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkFindManyArgs>(args?: SelectSubset<T, WorkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Work.
     * @param {WorkCreateArgs} args - Arguments to create a Work.
     * @example
     * // Create one Work
     * const Work = await prisma.work.create({
     *   data: {
     *     // ... data to create a Work
     *   }
     * })
     * 
     */
    create<T extends WorkCreateArgs>(args: SelectSubset<T, WorkCreateArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Works.
     * @param {WorkCreateManyArgs} args - Arguments to create many Works.
     * @example
     * // Create many Works
     * const work = await prisma.work.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkCreateManyArgs>(args?: SelectSubset<T, WorkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Works and returns the data saved in the database.
     * @param {WorkCreateManyAndReturnArgs} args - Arguments to create many Works.
     * @example
     * // Create many Works
     * const work = await prisma.work.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Works and only return the `id`
     * const workWithIdOnly = await prisma.work.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Work.
     * @param {WorkDeleteArgs} args - Arguments to delete one Work.
     * @example
     * // Delete one Work
     * const Work = await prisma.work.delete({
     *   where: {
     *     // ... filter to delete one Work
     *   }
     * })
     * 
     */
    delete<T extends WorkDeleteArgs>(args: SelectSubset<T, WorkDeleteArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Work.
     * @param {WorkUpdateArgs} args - Arguments to update one Work.
     * @example
     * // Update one Work
     * const work = await prisma.work.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkUpdateArgs>(args: SelectSubset<T, WorkUpdateArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Works.
     * @param {WorkDeleteManyArgs} args - Arguments to filter Works to delete.
     * @example
     * // Delete a few Works
     * const { count } = await prisma.work.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkDeleteManyArgs>(args?: SelectSubset<T, WorkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Works
     * const work = await prisma.work.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkUpdateManyArgs>(args: SelectSubset<T, WorkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Works and returns the data updated in the database.
     * @param {WorkUpdateManyAndReturnArgs} args - Arguments to update many Works.
     * @example
     * // Update many Works
     * const work = await prisma.work.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Works and only return the `id`
     * const workWithIdOnly = await prisma.work.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Work.
     * @param {WorkUpsertArgs} args - Arguments to update or create a Work.
     * @example
     * // Update or create a Work
     * const work = await prisma.work.upsert({
     *   create: {
     *     // ... data to create a Work
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Work we want to update
     *   }
     * })
     */
    upsert<T extends WorkUpsertArgs>(args: SelectSubset<T, WorkUpsertArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkCountArgs} args - Arguments to filter Works to count.
     * @example
     * // Count the number of Works
     * const count = await prisma.work.count({
     *   where: {
     *     // ... the filter for the Works we want to count
     *   }
     * })
    **/
    count<T extends WorkCountArgs>(
      args?: Subset<T, WorkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Work.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkAggregateArgs>(args: Subset<T, WorkAggregateArgs>): Prisma.PrismaPromise<GetWorkAggregateType<T>>

    /**
     * Group by Work.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkGroupByArgs['orderBy'] }
        : { orderBy?: WorkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Work model
   */
  readonly fields: WorkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Work.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detail<T extends Work$detailArgs<ExtArgs> = {}>(args?: Subset<T, Work$detailArgs<ExtArgs>>): Prisma__WorkDetailClient<$Result.GetResult<Prisma.$WorkDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    characters<T extends Work$charactersArgs<ExtArgs> = {}>(args?: Subset<T, Work$charactersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkCharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bgImage<T extends Work$bgImageArgs<ExtArgs> = {}>(args?: Subset<T, Work$bgImageArgs<ExtArgs>>): Prisma__BgImageClient<$Result.GetResult<Prisma.$BgImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    awardWinners<T extends Work$awardWinnersArgs<ExtArgs> = {}>(args?: Subset<T, Work$awardWinnersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwardWinnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Work model
   */
  interface WorkFieldRefs {
    readonly id: FieldRef<"Work", 'String'>
    readonly title: FieldRef<"Work", 'String'>
    readonly titleEn: FieldRef<"Work", 'String'>
    readonly author: FieldRef<"Work", 'String'>
    readonly country: FieldRef<"Work", 'String'>
    readonly flag: FieldRef<"Work", 'String'>
    readonly continent: FieldRef<"Work", 'String'>
    readonly era: FieldRef<"Work", 'String'>
    readonly genres: FieldRef<"Work", 'Json'>
    readonly themes: FieldRef<"Work", 'Json'>
    readonly excerpt: FieldRef<"Work", 'String'>
    readonly gradient: FieldRef<"Work", 'String'>
    readonly year: FieldRef<"Work", 'Int'>
    readonly featured: FieldRef<"Work", 'Boolean'>
    readonly createdAt: FieldRef<"Work", 'DateTime'>
    readonly updatedAt: FieldRef<"Work", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Work findUnique
   */
  export type WorkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work findUniqueOrThrow
   */
  export type WorkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work findFirst
   */
  export type WorkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Works.
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Works.
     */
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * Work findFirstOrThrow
   */
  export type WorkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Works.
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Works.
     */
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * Work findMany
   */
  export type WorkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Works to fetch.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Works.
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Works.
     */
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * Work create
   */
  export type WorkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * The data needed to create a Work.
     */
    data: XOR<WorkCreateInput, WorkUncheckedCreateInput>
  }

  /**
   * Work createMany
   */
  export type WorkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Works.
     */
    data: WorkCreateManyInput | WorkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Work createManyAndReturn
   */
  export type WorkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * The data used to create many Works.
     */
    data: WorkCreateManyInput | WorkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Work update
   */
  export type WorkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * The data needed to update a Work.
     */
    data: XOR<WorkUpdateInput, WorkUncheckedUpdateInput>
    /**
     * Choose, which Work to update.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work updateMany
   */
  export type WorkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Works.
     */
    data: XOR<WorkUpdateManyMutationInput, WorkUncheckedUpdateManyInput>
    /**
     * Filter which Works to update
     */
    where?: WorkWhereInput
    /**
     * Limit how many Works to update.
     */
    limit?: number
  }

  /**
   * Work updateManyAndReturn
   */
  export type WorkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * The data used to update Works.
     */
    data: XOR<WorkUpdateManyMutationInput, WorkUncheckedUpdateManyInput>
    /**
     * Filter which Works to update
     */
    where?: WorkWhereInput
    /**
     * Limit how many Works to update.
     */
    limit?: number
  }

  /**
   * Work upsert
   */
  export type WorkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * The filter to search for the Work to update in case it exists.
     */
    where: WorkWhereUniqueInput
    /**
     * In case the Work found by the `where` argument doesn't exist, create a new Work with this data.
     */
    create: XOR<WorkCreateInput, WorkUncheckedCreateInput>
    /**
     * In case the Work was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkUpdateInput, WorkUncheckedUpdateInput>
  }

  /**
   * Work delete
   */
  export type WorkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter which Work to delete.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work deleteMany
   */
  export type WorkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Works to delete
     */
    where?: WorkWhereInput
    /**
     * Limit how many Works to delete.
     */
    limit?: number
  }

  /**
   * Work.detail
   */
  export type Work$detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDetail
     */
    select?: WorkDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDetail
     */
    omit?: WorkDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDetailInclude<ExtArgs> | null
    where?: WorkDetailWhereInput
  }

  /**
   * Work.characters
   */
  export type Work$charactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCharacter
     */
    select?: WorkCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkCharacter
     */
    omit?: WorkCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkCharacterInclude<ExtArgs> | null
    where?: WorkCharacterWhereInput
    orderBy?: WorkCharacterOrderByWithRelationInput | WorkCharacterOrderByWithRelationInput[]
    cursor?: WorkCharacterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkCharacterScalarFieldEnum | WorkCharacterScalarFieldEnum[]
  }

  /**
   * Work.bgImage
   */
  export type Work$bgImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BgImage
     */
    select?: BgImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BgImage
     */
    omit?: BgImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BgImageInclude<ExtArgs> | null
    where?: BgImageWhereInput
  }

  /**
   * Work.awardWinners
   */
  export type Work$awardWinnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwardWinner
     */
    select?: AwardWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwardWinner
     */
    omit?: AwardWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardWinnerInclude<ExtArgs> | null
    where?: AwardWinnerWhereInput
    orderBy?: AwardWinnerOrderByWithRelationInput | AwardWinnerOrderByWithRelationInput[]
    cursor?: AwardWinnerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AwardWinnerScalarFieldEnum | AwardWinnerScalarFieldEnum[]
  }

  /**
   * Work without action
   */
  export type WorkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
  }


  /**
   * Model WorkDetail
   */

  export type AggregateWorkDetail = {
    _count: WorkDetailCountAggregateOutputType | null
    _min: WorkDetailMinAggregateOutputType | null
    _max: WorkDetailMaxAggregateOutputType | null
  }

  export type WorkDetailMinAggregateOutputType = {
    id: string | null
    workId: string | null
    plotSummary: string | null
    themeAnalysis: string | null
    techniques: string | null
    insights: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkDetailMaxAggregateOutputType = {
    id: string | null
    workId: string | null
    plotSummary: string | null
    themeAnalysis: string | null
    techniques: string | null
    insights: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkDetailCountAggregateOutputType = {
    id: number
    workId: number
    characters: number
    plotSummary: number
    plotNodes: number
    themeAnalysis: number
    techniques: number
    excerpts: number
    insights: number
    sourceAttribution: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkDetailMinAggregateInputType = {
    id?: true
    workId?: true
    plotSummary?: true
    themeAnalysis?: true
    techniques?: true
    insights?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkDetailMaxAggregateInputType = {
    id?: true
    workId?: true
    plotSummary?: true
    themeAnalysis?: true
    techniques?: true
    insights?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkDetailCountAggregateInputType = {
    id?: true
    workId?: true
    characters?: true
    plotSummary?: true
    plotNodes?: true
    themeAnalysis?: true
    techniques?: true
    excerpts?: true
    insights?: true
    sourceAttribution?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkDetail to aggregate.
     */
    where?: WorkDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkDetails to fetch.
     */
    orderBy?: WorkDetailOrderByWithRelationInput | WorkDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkDetails
    **/
    _count?: true | WorkDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkDetailMaxAggregateInputType
  }

  export type GetWorkDetailAggregateType<T extends WorkDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkDetail[P]>
      : GetScalarType<T[P], AggregateWorkDetail[P]>
  }




  export type WorkDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkDetailWhereInput
    orderBy?: WorkDetailOrderByWithAggregationInput | WorkDetailOrderByWithAggregationInput[]
    by: WorkDetailScalarFieldEnum[] | WorkDetailScalarFieldEnum
    having?: WorkDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkDetailCountAggregateInputType | true
    _min?: WorkDetailMinAggregateInputType
    _max?: WorkDetailMaxAggregateInputType
  }

  export type WorkDetailGroupByOutputType = {
    id: string
    workId: string
    characters: JsonValue
    plotSummary: string
    plotNodes: JsonValue
    themeAnalysis: string
    techniques: string
    excerpts: JsonValue
    insights: string
    sourceAttribution: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: WorkDetailCountAggregateOutputType | null
    _min: WorkDetailMinAggregateOutputType | null
    _max: WorkDetailMaxAggregateOutputType | null
  }

  type GetWorkDetailGroupByPayload<T extends WorkDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkDetailGroupByOutputType[P]>
            : GetScalarType<T[P], WorkDetailGroupByOutputType[P]>
        }
      >
    >


  export type WorkDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workId?: boolean
    characters?: boolean
    plotSummary?: boolean
    plotNodes?: boolean
    themeAnalysis?: boolean
    techniques?: boolean
    excerpts?: boolean
    insights?: boolean
    sourceAttribution?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workDetail"]>

  export type WorkDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workId?: boolean
    characters?: boolean
    plotSummary?: boolean
    plotNodes?: boolean
    themeAnalysis?: boolean
    techniques?: boolean
    excerpts?: boolean
    insights?: boolean
    sourceAttribution?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workDetail"]>

  export type WorkDetailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workId?: boolean
    characters?: boolean
    plotSummary?: boolean
    plotNodes?: boolean
    themeAnalysis?: boolean
    techniques?: boolean
    excerpts?: boolean
    insights?: boolean
    sourceAttribution?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workDetail"]>

  export type WorkDetailSelectScalar = {
    id?: boolean
    workId?: boolean
    characters?: boolean
    plotSummary?: boolean
    plotNodes?: boolean
    themeAnalysis?: boolean
    techniques?: boolean
    excerpts?: boolean
    insights?: boolean
    sourceAttribution?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workId" | "characters" | "plotSummary" | "plotNodes" | "themeAnalysis" | "techniques" | "excerpts" | "insights" | "sourceAttribution" | "createdAt" | "updatedAt", ExtArgs["result"]["workDetail"]>
  export type WorkDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }
  export type WorkDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }
  export type WorkDetailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }

  export type $WorkDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkDetail"
    objects: {
      work: Prisma.$WorkPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workId: string
      /**
       * 作品内嵌人物（取自 book-data.ts 的 characters 字段）
       */
      characters: Prisma.JsonValue
      plotSummary: string
      plotNodes: Prisma.JsonValue
      themeAnalysis: string
      techniques: string
      excerpts: Prisma.JsonValue
      insights: string
      /**
       * 内容来源归因
       */
      sourceAttribution: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workDetail"]>
    composites: {}
  }

  type WorkDetailGetPayload<S extends boolean | null | undefined | WorkDetailDefaultArgs> = $Result.GetResult<Prisma.$WorkDetailPayload, S>

  type WorkDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkDetailCountAggregateInputType | true
    }

  export interface WorkDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkDetail'], meta: { name: 'WorkDetail' } }
    /**
     * Find zero or one WorkDetail that matches the filter.
     * @param {WorkDetailFindUniqueArgs} args - Arguments to find a WorkDetail
     * @example
     * // Get one WorkDetail
     * const workDetail = await prisma.workDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkDetailFindUniqueArgs>(args: SelectSubset<T, WorkDetailFindUniqueArgs<ExtArgs>>): Prisma__WorkDetailClient<$Result.GetResult<Prisma.$WorkDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkDetailFindUniqueOrThrowArgs} args - Arguments to find a WorkDetail
     * @example
     * // Get one WorkDetail
     * const workDetail = await prisma.workDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkDetailClient<$Result.GetResult<Prisma.$WorkDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkDetailFindFirstArgs} args - Arguments to find a WorkDetail
     * @example
     * // Get one WorkDetail
     * const workDetail = await prisma.workDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkDetailFindFirstArgs>(args?: SelectSubset<T, WorkDetailFindFirstArgs<ExtArgs>>): Prisma__WorkDetailClient<$Result.GetResult<Prisma.$WorkDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkDetailFindFirstOrThrowArgs} args - Arguments to find a WorkDetail
     * @example
     * // Get one WorkDetail
     * const workDetail = await prisma.workDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkDetailClient<$Result.GetResult<Prisma.$WorkDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkDetails
     * const workDetails = await prisma.workDetail.findMany()
     * 
     * // Get first 10 WorkDetails
     * const workDetails = await prisma.workDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workDetailWithIdOnly = await prisma.workDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkDetailFindManyArgs>(args?: SelectSubset<T, WorkDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkDetail.
     * @param {WorkDetailCreateArgs} args - Arguments to create a WorkDetail.
     * @example
     * // Create one WorkDetail
     * const WorkDetail = await prisma.workDetail.create({
     *   data: {
     *     // ... data to create a WorkDetail
     *   }
     * })
     * 
     */
    create<T extends WorkDetailCreateArgs>(args: SelectSubset<T, WorkDetailCreateArgs<ExtArgs>>): Prisma__WorkDetailClient<$Result.GetResult<Prisma.$WorkDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkDetails.
     * @param {WorkDetailCreateManyArgs} args - Arguments to create many WorkDetails.
     * @example
     * // Create many WorkDetails
     * const workDetail = await prisma.workDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkDetailCreateManyArgs>(args?: SelectSubset<T, WorkDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkDetails and returns the data saved in the database.
     * @param {WorkDetailCreateManyAndReturnArgs} args - Arguments to create many WorkDetails.
     * @example
     * // Create many WorkDetails
     * const workDetail = await prisma.workDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkDetails and only return the `id`
     * const workDetailWithIdOnly = await prisma.workDetail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkDetailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkDetail.
     * @param {WorkDetailDeleteArgs} args - Arguments to delete one WorkDetail.
     * @example
     * // Delete one WorkDetail
     * const WorkDetail = await prisma.workDetail.delete({
     *   where: {
     *     // ... filter to delete one WorkDetail
     *   }
     * })
     * 
     */
    delete<T extends WorkDetailDeleteArgs>(args: SelectSubset<T, WorkDetailDeleteArgs<ExtArgs>>): Prisma__WorkDetailClient<$Result.GetResult<Prisma.$WorkDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkDetail.
     * @param {WorkDetailUpdateArgs} args - Arguments to update one WorkDetail.
     * @example
     * // Update one WorkDetail
     * const workDetail = await prisma.workDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkDetailUpdateArgs>(args: SelectSubset<T, WorkDetailUpdateArgs<ExtArgs>>): Prisma__WorkDetailClient<$Result.GetResult<Prisma.$WorkDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkDetails.
     * @param {WorkDetailDeleteManyArgs} args - Arguments to filter WorkDetails to delete.
     * @example
     * // Delete a few WorkDetails
     * const { count } = await prisma.workDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkDetailDeleteManyArgs>(args?: SelectSubset<T, WorkDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkDetails
     * const workDetail = await prisma.workDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkDetailUpdateManyArgs>(args: SelectSubset<T, WorkDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkDetails and returns the data updated in the database.
     * @param {WorkDetailUpdateManyAndReturnArgs} args - Arguments to update many WorkDetails.
     * @example
     * // Update many WorkDetails
     * const workDetail = await prisma.workDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkDetails and only return the `id`
     * const workDetailWithIdOnly = await prisma.workDetail.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkDetailUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkDetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkDetailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkDetail.
     * @param {WorkDetailUpsertArgs} args - Arguments to update or create a WorkDetail.
     * @example
     * // Update or create a WorkDetail
     * const workDetail = await prisma.workDetail.upsert({
     *   create: {
     *     // ... data to create a WorkDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkDetail we want to update
     *   }
     * })
     */
    upsert<T extends WorkDetailUpsertArgs>(args: SelectSubset<T, WorkDetailUpsertArgs<ExtArgs>>): Prisma__WorkDetailClient<$Result.GetResult<Prisma.$WorkDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkDetailCountArgs} args - Arguments to filter WorkDetails to count.
     * @example
     * // Count the number of WorkDetails
     * const count = await prisma.workDetail.count({
     *   where: {
     *     // ... the filter for the WorkDetails we want to count
     *   }
     * })
    **/
    count<T extends WorkDetailCountArgs>(
      args?: Subset<T, WorkDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkDetailAggregateArgs>(args: Subset<T, WorkDetailAggregateArgs>): Prisma.PrismaPromise<GetWorkDetailAggregateType<T>>

    /**
     * Group by WorkDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkDetailGroupByArgs['orderBy'] }
        : { orderBy?: WorkDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkDetail model
   */
  readonly fields: WorkDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    work<T extends WorkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkDefaultArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkDetail model
   */
  interface WorkDetailFieldRefs {
    readonly id: FieldRef<"WorkDetail", 'String'>
    readonly workId: FieldRef<"WorkDetail", 'String'>
    readonly characters: FieldRef<"WorkDetail", 'Json'>
    readonly plotSummary: FieldRef<"WorkDetail", 'String'>
    readonly plotNodes: FieldRef<"WorkDetail", 'Json'>
    readonly themeAnalysis: FieldRef<"WorkDetail", 'String'>
    readonly techniques: FieldRef<"WorkDetail", 'String'>
    readonly excerpts: FieldRef<"WorkDetail", 'Json'>
    readonly insights: FieldRef<"WorkDetail", 'String'>
    readonly sourceAttribution: FieldRef<"WorkDetail", 'Json'>
    readonly createdAt: FieldRef<"WorkDetail", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkDetail", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkDetail findUnique
   */
  export type WorkDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDetail
     */
    select?: WorkDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDetail
     */
    omit?: WorkDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDetailInclude<ExtArgs> | null
    /**
     * Filter, which WorkDetail to fetch.
     */
    where: WorkDetailWhereUniqueInput
  }

  /**
   * WorkDetail findUniqueOrThrow
   */
  export type WorkDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDetail
     */
    select?: WorkDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDetail
     */
    omit?: WorkDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDetailInclude<ExtArgs> | null
    /**
     * Filter, which WorkDetail to fetch.
     */
    where: WorkDetailWhereUniqueInput
  }

  /**
   * WorkDetail findFirst
   */
  export type WorkDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDetail
     */
    select?: WorkDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDetail
     */
    omit?: WorkDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDetailInclude<ExtArgs> | null
    /**
     * Filter, which WorkDetail to fetch.
     */
    where?: WorkDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkDetails to fetch.
     */
    orderBy?: WorkDetailOrderByWithRelationInput | WorkDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkDetails.
     */
    cursor?: WorkDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkDetails.
     */
    distinct?: WorkDetailScalarFieldEnum | WorkDetailScalarFieldEnum[]
  }

  /**
   * WorkDetail findFirstOrThrow
   */
  export type WorkDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDetail
     */
    select?: WorkDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDetail
     */
    omit?: WorkDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDetailInclude<ExtArgs> | null
    /**
     * Filter, which WorkDetail to fetch.
     */
    where?: WorkDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkDetails to fetch.
     */
    orderBy?: WorkDetailOrderByWithRelationInput | WorkDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkDetails.
     */
    cursor?: WorkDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkDetails.
     */
    distinct?: WorkDetailScalarFieldEnum | WorkDetailScalarFieldEnum[]
  }

  /**
   * WorkDetail findMany
   */
  export type WorkDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDetail
     */
    select?: WorkDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDetail
     */
    omit?: WorkDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDetailInclude<ExtArgs> | null
    /**
     * Filter, which WorkDetails to fetch.
     */
    where?: WorkDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkDetails to fetch.
     */
    orderBy?: WorkDetailOrderByWithRelationInput | WorkDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkDetails.
     */
    cursor?: WorkDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkDetails.
     */
    distinct?: WorkDetailScalarFieldEnum | WorkDetailScalarFieldEnum[]
  }

  /**
   * WorkDetail create
   */
  export type WorkDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDetail
     */
    select?: WorkDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDetail
     */
    omit?: WorkDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkDetail.
     */
    data: XOR<WorkDetailCreateInput, WorkDetailUncheckedCreateInput>
  }

  /**
   * WorkDetail createMany
   */
  export type WorkDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkDetails.
     */
    data: WorkDetailCreateManyInput | WorkDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkDetail createManyAndReturn
   */
  export type WorkDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDetail
     */
    select?: WorkDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDetail
     */
    omit?: WorkDetailOmit<ExtArgs> | null
    /**
     * The data used to create many WorkDetails.
     */
    data: WorkDetailCreateManyInput | WorkDetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkDetail update
   */
  export type WorkDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDetail
     */
    select?: WorkDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDetail
     */
    omit?: WorkDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkDetail.
     */
    data: XOR<WorkDetailUpdateInput, WorkDetailUncheckedUpdateInput>
    /**
     * Choose, which WorkDetail to update.
     */
    where: WorkDetailWhereUniqueInput
  }

  /**
   * WorkDetail updateMany
   */
  export type WorkDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkDetails.
     */
    data: XOR<WorkDetailUpdateManyMutationInput, WorkDetailUncheckedUpdateManyInput>
    /**
     * Filter which WorkDetails to update
     */
    where?: WorkDetailWhereInput
    /**
     * Limit how many WorkDetails to update.
     */
    limit?: number
  }

  /**
   * WorkDetail updateManyAndReturn
   */
  export type WorkDetailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDetail
     */
    select?: WorkDetailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDetail
     */
    omit?: WorkDetailOmit<ExtArgs> | null
    /**
     * The data used to update WorkDetails.
     */
    data: XOR<WorkDetailUpdateManyMutationInput, WorkDetailUncheckedUpdateManyInput>
    /**
     * Filter which WorkDetails to update
     */
    where?: WorkDetailWhereInput
    /**
     * Limit how many WorkDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDetailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkDetail upsert
   */
  export type WorkDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDetail
     */
    select?: WorkDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDetail
     */
    omit?: WorkDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkDetail to update in case it exists.
     */
    where: WorkDetailWhereUniqueInput
    /**
     * In case the WorkDetail found by the `where` argument doesn't exist, create a new WorkDetail with this data.
     */
    create: XOR<WorkDetailCreateInput, WorkDetailUncheckedCreateInput>
    /**
     * In case the WorkDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkDetailUpdateInput, WorkDetailUncheckedUpdateInput>
  }

  /**
   * WorkDetail delete
   */
  export type WorkDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDetail
     */
    select?: WorkDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDetail
     */
    omit?: WorkDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDetailInclude<ExtArgs> | null
    /**
     * Filter which WorkDetail to delete.
     */
    where: WorkDetailWhereUniqueInput
  }

  /**
   * WorkDetail deleteMany
   */
  export type WorkDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkDetails to delete
     */
    where?: WorkDetailWhereInput
    /**
     * Limit how many WorkDetails to delete.
     */
    limit?: number
  }

  /**
   * WorkDetail without action
   */
  export type WorkDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDetail
     */
    select?: WorkDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDetail
     */
    omit?: WorkDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDetailInclude<ExtArgs> | null
  }


  /**
   * Model WorkCharacter
   */

  export type AggregateWorkCharacter = {
    _count: WorkCharacterCountAggregateOutputType | null
    _min: WorkCharacterMinAggregateOutputType | null
    _max: WorkCharacterMaxAggregateOutputType | null
  }

  export type WorkCharacterMinAggregateOutputType = {
    id: string | null
    workId: string | null
    name: string | null
    role: string | null
    description: string | null
  }

  export type WorkCharacterMaxAggregateOutputType = {
    id: string | null
    workId: string | null
    name: string | null
    role: string | null
    description: string | null
  }

  export type WorkCharacterCountAggregateOutputType = {
    id: number
    workId: number
    name: number
    role: number
    description: number
    _all: number
  }


  export type WorkCharacterMinAggregateInputType = {
    id?: true
    workId?: true
    name?: true
    role?: true
    description?: true
  }

  export type WorkCharacterMaxAggregateInputType = {
    id?: true
    workId?: true
    name?: true
    role?: true
    description?: true
  }

  export type WorkCharacterCountAggregateInputType = {
    id?: true
    workId?: true
    name?: true
    role?: true
    description?: true
    _all?: true
  }

  export type WorkCharacterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkCharacter to aggregate.
     */
    where?: WorkCharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkCharacters to fetch.
     */
    orderBy?: WorkCharacterOrderByWithRelationInput | WorkCharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkCharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkCharacters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkCharacters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkCharacters
    **/
    _count?: true | WorkCharacterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkCharacterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkCharacterMaxAggregateInputType
  }

  export type GetWorkCharacterAggregateType<T extends WorkCharacterAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkCharacter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkCharacter[P]>
      : GetScalarType<T[P], AggregateWorkCharacter[P]>
  }




  export type WorkCharacterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkCharacterWhereInput
    orderBy?: WorkCharacterOrderByWithAggregationInput | WorkCharacterOrderByWithAggregationInput[]
    by: WorkCharacterScalarFieldEnum[] | WorkCharacterScalarFieldEnum
    having?: WorkCharacterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkCharacterCountAggregateInputType | true
    _min?: WorkCharacterMinAggregateInputType
    _max?: WorkCharacterMaxAggregateInputType
  }

  export type WorkCharacterGroupByOutputType = {
    id: string
    workId: string
    name: string
    role: string
    description: string
    _count: WorkCharacterCountAggregateOutputType | null
    _min: WorkCharacterMinAggregateOutputType | null
    _max: WorkCharacterMaxAggregateOutputType | null
  }

  type GetWorkCharacterGroupByPayload<T extends WorkCharacterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkCharacterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkCharacterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkCharacterGroupByOutputType[P]>
            : GetScalarType<T[P], WorkCharacterGroupByOutputType[P]>
        }
      >
    >


  export type WorkCharacterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workId?: boolean
    name?: boolean
    role?: boolean
    description?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workCharacter"]>

  export type WorkCharacterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workId?: boolean
    name?: boolean
    role?: boolean
    description?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workCharacter"]>

  export type WorkCharacterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workId?: boolean
    name?: boolean
    role?: boolean
    description?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workCharacter"]>

  export type WorkCharacterSelectScalar = {
    id?: boolean
    workId?: boolean
    name?: boolean
    role?: boolean
    description?: boolean
  }

  export type WorkCharacterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workId" | "name" | "role" | "description", ExtArgs["result"]["workCharacter"]>
  export type WorkCharacterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }
  export type WorkCharacterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }
  export type WorkCharacterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }

  export type $WorkCharacterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkCharacter"
    objects: {
      work: Prisma.$WorkPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workId: string
      name: string
      role: string
      description: string
    }, ExtArgs["result"]["workCharacter"]>
    composites: {}
  }

  type WorkCharacterGetPayload<S extends boolean | null | undefined | WorkCharacterDefaultArgs> = $Result.GetResult<Prisma.$WorkCharacterPayload, S>

  type WorkCharacterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkCharacterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkCharacterCountAggregateInputType | true
    }

  export interface WorkCharacterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkCharacter'], meta: { name: 'WorkCharacter' } }
    /**
     * Find zero or one WorkCharacter that matches the filter.
     * @param {WorkCharacterFindUniqueArgs} args - Arguments to find a WorkCharacter
     * @example
     * // Get one WorkCharacter
     * const workCharacter = await prisma.workCharacter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkCharacterFindUniqueArgs>(args: SelectSubset<T, WorkCharacterFindUniqueArgs<ExtArgs>>): Prisma__WorkCharacterClient<$Result.GetResult<Prisma.$WorkCharacterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkCharacter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkCharacterFindUniqueOrThrowArgs} args - Arguments to find a WorkCharacter
     * @example
     * // Get one WorkCharacter
     * const workCharacter = await prisma.workCharacter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkCharacterFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkCharacterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkCharacterClient<$Result.GetResult<Prisma.$WorkCharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkCharacter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkCharacterFindFirstArgs} args - Arguments to find a WorkCharacter
     * @example
     * // Get one WorkCharacter
     * const workCharacter = await prisma.workCharacter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkCharacterFindFirstArgs>(args?: SelectSubset<T, WorkCharacterFindFirstArgs<ExtArgs>>): Prisma__WorkCharacterClient<$Result.GetResult<Prisma.$WorkCharacterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkCharacter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkCharacterFindFirstOrThrowArgs} args - Arguments to find a WorkCharacter
     * @example
     * // Get one WorkCharacter
     * const workCharacter = await prisma.workCharacter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkCharacterFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkCharacterFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkCharacterClient<$Result.GetResult<Prisma.$WorkCharacterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkCharacters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkCharacterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkCharacters
     * const workCharacters = await prisma.workCharacter.findMany()
     * 
     * // Get first 10 WorkCharacters
     * const workCharacters = await prisma.workCharacter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workCharacterWithIdOnly = await prisma.workCharacter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkCharacterFindManyArgs>(args?: SelectSubset<T, WorkCharacterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkCharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkCharacter.
     * @param {WorkCharacterCreateArgs} args - Arguments to create a WorkCharacter.
     * @example
     * // Create one WorkCharacter
     * const WorkCharacter = await prisma.workCharacter.create({
     *   data: {
     *     // ... data to create a WorkCharacter
     *   }
     * })
     * 
     */
    create<T extends WorkCharacterCreateArgs>(args: SelectSubset<T, WorkCharacterCreateArgs<ExtArgs>>): Prisma__WorkCharacterClient<$Result.GetResult<Prisma.$WorkCharacterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkCharacters.
     * @param {WorkCharacterCreateManyArgs} args - Arguments to create many WorkCharacters.
     * @example
     * // Create many WorkCharacters
     * const workCharacter = await prisma.workCharacter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkCharacterCreateManyArgs>(args?: SelectSubset<T, WorkCharacterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkCharacters and returns the data saved in the database.
     * @param {WorkCharacterCreateManyAndReturnArgs} args - Arguments to create many WorkCharacters.
     * @example
     * // Create many WorkCharacters
     * const workCharacter = await prisma.workCharacter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkCharacters and only return the `id`
     * const workCharacterWithIdOnly = await prisma.workCharacter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkCharacterCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkCharacterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkCharacterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkCharacter.
     * @param {WorkCharacterDeleteArgs} args - Arguments to delete one WorkCharacter.
     * @example
     * // Delete one WorkCharacter
     * const WorkCharacter = await prisma.workCharacter.delete({
     *   where: {
     *     // ... filter to delete one WorkCharacter
     *   }
     * })
     * 
     */
    delete<T extends WorkCharacterDeleteArgs>(args: SelectSubset<T, WorkCharacterDeleteArgs<ExtArgs>>): Prisma__WorkCharacterClient<$Result.GetResult<Prisma.$WorkCharacterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkCharacter.
     * @param {WorkCharacterUpdateArgs} args - Arguments to update one WorkCharacter.
     * @example
     * // Update one WorkCharacter
     * const workCharacter = await prisma.workCharacter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkCharacterUpdateArgs>(args: SelectSubset<T, WorkCharacterUpdateArgs<ExtArgs>>): Prisma__WorkCharacterClient<$Result.GetResult<Prisma.$WorkCharacterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkCharacters.
     * @param {WorkCharacterDeleteManyArgs} args - Arguments to filter WorkCharacters to delete.
     * @example
     * // Delete a few WorkCharacters
     * const { count } = await prisma.workCharacter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkCharacterDeleteManyArgs>(args?: SelectSubset<T, WorkCharacterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkCharacters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkCharacterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkCharacters
     * const workCharacter = await prisma.workCharacter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkCharacterUpdateManyArgs>(args: SelectSubset<T, WorkCharacterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkCharacters and returns the data updated in the database.
     * @param {WorkCharacterUpdateManyAndReturnArgs} args - Arguments to update many WorkCharacters.
     * @example
     * // Update many WorkCharacters
     * const workCharacter = await prisma.workCharacter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkCharacters and only return the `id`
     * const workCharacterWithIdOnly = await prisma.workCharacter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkCharacterUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkCharacterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkCharacterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkCharacter.
     * @param {WorkCharacterUpsertArgs} args - Arguments to update or create a WorkCharacter.
     * @example
     * // Update or create a WorkCharacter
     * const workCharacter = await prisma.workCharacter.upsert({
     *   create: {
     *     // ... data to create a WorkCharacter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkCharacter we want to update
     *   }
     * })
     */
    upsert<T extends WorkCharacterUpsertArgs>(args: SelectSubset<T, WorkCharacterUpsertArgs<ExtArgs>>): Prisma__WorkCharacterClient<$Result.GetResult<Prisma.$WorkCharacterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkCharacters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkCharacterCountArgs} args - Arguments to filter WorkCharacters to count.
     * @example
     * // Count the number of WorkCharacters
     * const count = await prisma.workCharacter.count({
     *   where: {
     *     // ... the filter for the WorkCharacters we want to count
     *   }
     * })
    **/
    count<T extends WorkCharacterCountArgs>(
      args?: Subset<T, WorkCharacterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkCharacterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkCharacter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkCharacterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkCharacterAggregateArgs>(args: Subset<T, WorkCharacterAggregateArgs>): Prisma.PrismaPromise<GetWorkCharacterAggregateType<T>>

    /**
     * Group by WorkCharacter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkCharacterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkCharacterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkCharacterGroupByArgs['orderBy'] }
        : { orderBy?: WorkCharacterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkCharacterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkCharacterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkCharacter model
   */
  readonly fields: WorkCharacterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkCharacter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkCharacterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    work<T extends WorkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkDefaultArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkCharacter model
   */
  interface WorkCharacterFieldRefs {
    readonly id: FieldRef<"WorkCharacter", 'String'>
    readonly workId: FieldRef<"WorkCharacter", 'String'>
    readonly name: FieldRef<"WorkCharacter", 'String'>
    readonly role: FieldRef<"WorkCharacter", 'String'>
    readonly description: FieldRef<"WorkCharacter", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WorkCharacter findUnique
   */
  export type WorkCharacterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCharacter
     */
    select?: WorkCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkCharacter
     */
    omit?: WorkCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkCharacterInclude<ExtArgs> | null
    /**
     * Filter, which WorkCharacter to fetch.
     */
    where: WorkCharacterWhereUniqueInput
  }

  /**
   * WorkCharacter findUniqueOrThrow
   */
  export type WorkCharacterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCharacter
     */
    select?: WorkCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkCharacter
     */
    omit?: WorkCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkCharacterInclude<ExtArgs> | null
    /**
     * Filter, which WorkCharacter to fetch.
     */
    where: WorkCharacterWhereUniqueInput
  }

  /**
   * WorkCharacter findFirst
   */
  export type WorkCharacterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCharacter
     */
    select?: WorkCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkCharacter
     */
    omit?: WorkCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkCharacterInclude<ExtArgs> | null
    /**
     * Filter, which WorkCharacter to fetch.
     */
    where?: WorkCharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkCharacters to fetch.
     */
    orderBy?: WorkCharacterOrderByWithRelationInput | WorkCharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkCharacters.
     */
    cursor?: WorkCharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkCharacters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkCharacters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkCharacters.
     */
    distinct?: WorkCharacterScalarFieldEnum | WorkCharacterScalarFieldEnum[]
  }

  /**
   * WorkCharacter findFirstOrThrow
   */
  export type WorkCharacterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCharacter
     */
    select?: WorkCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkCharacter
     */
    omit?: WorkCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkCharacterInclude<ExtArgs> | null
    /**
     * Filter, which WorkCharacter to fetch.
     */
    where?: WorkCharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkCharacters to fetch.
     */
    orderBy?: WorkCharacterOrderByWithRelationInput | WorkCharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkCharacters.
     */
    cursor?: WorkCharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkCharacters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkCharacters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkCharacters.
     */
    distinct?: WorkCharacterScalarFieldEnum | WorkCharacterScalarFieldEnum[]
  }

  /**
   * WorkCharacter findMany
   */
  export type WorkCharacterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCharacter
     */
    select?: WorkCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkCharacter
     */
    omit?: WorkCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkCharacterInclude<ExtArgs> | null
    /**
     * Filter, which WorkCharacters to fetch.
     */
    where?: WorkCharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkCharacters to fetch.
     */
    orderBy?: WorkCharacterOrderByWithRelationInput | WorkCharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkCharacters.
     */
    cursor?: WorkCharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkCharacters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkCharacters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkCharacters.
     */
    distinct?: WorkCharacterScalarFieldEnum | WorkCharacterScalarFieldEnum[]
  }

  /**
   * WorkCharacter create
   */
  export type WorkCharacterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCharacter
     */
    select?: WorkCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkCharacter
     */
    omit?: WorkCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkCharacterInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkCharacter.
     */
    data: XOR<WorkCharacterCreateInput, WorkCharacterUncheckedCreateInput>
  }

  /**
   * WorkCharacter createMany
   */
  export type WorkCharacterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkCharacters.
     */
    data: WorkCharacterCreateManyInput | WorkCharacterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkCharacter createManyAndReturn
   */
  export type WorkCharacterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCharacter
     */
    select?: WorkCharacterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkCharacter
     */
    omit?: WorkCharacterOmit<ExtArgs> | null
    /**
     * The data used to create many WorkCharacters.
     */
    data: WorkCharacterCreateManyInput | WorkCharacterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkCharacterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkCharacter update
   */
  export type WorkCharacterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCharacter
     */
    select?: WorkCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkCharacter
     */
    omit?: WorkCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkCharacterInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkCharacter.
     */
    data: XOR<WorkCharacterUpdateInput, WorkCharacterUncheckedUpdateInput>
    /**
     * Choose, which WorkCharacter to update.
     */
    where: WorkCharacterWhereUniqueInput
  }

  /**
   * WorkCharacter updateMany
   */
  export type WorkCharacterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkCharacters.
     */
    data: XOR<WorkCharacterUpdateManyMutationInput, WorkCharacterUncheckedUpdateManyInput>
    /**
     * Filter which WorkCharacters to update
     */
    where?: WorkCharacterWhereInput
    /**
     * Limit how many WorkCharacters to update.
     */
    limit?: number
  }

  /**
   * WorkCharacter updateManyAndReturn
   */
  export type WorkCharacterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCharacter
     */
    select?: WorkCharacterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkCharacter
     */
    omit?: WorkCharacterOmit<ExtArgs> | null
    /**
     * The data used to update WorkCharacters.
     */
    data: XOR<WorkCharacterUpdateManyMutationInput, WorkCharacterUncheckedUpdateManyInput>
    /**
     * Filter which WorkCharacters to update
     */
    where?: WorkCharacterWhereInput
    /**
     * Limit how many WorkCharacters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkCharacterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkCharacter upsert
   */
  export type WorkCharacterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCharacter
     */
    select?: WorkCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkCharacter
     */
    omit?: WorkCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkCharacterInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkCharacter to update in case it exists.
     */
    where: WorkCharacterWhereUniqueInput
    /**
     * In case the WorkCharacter found by the `where` argument doesn't exist, create a new WorkCharacter with this data.
     */
    create: XOR<WorkCharacterCreateInput, WorkCharacterUncheckedCreateInput>
    /**
     * In case the WorkCharacter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkCharacterUpdateInput, WorkCharacterUncheckedUpdateInput>
  }

  /**
   * WorkCharacter delete
   */
  export type WorkCharacterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCharacter
     */
    select?: WorkCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkCharacter
     */
    omit?: WorkCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkCharacterInclude<ExtArgs> | null
    /**
     * Filter which WorkCharacter to delete.
     */
    where: WorkCharacterWhereUniqueInput
  }

  /**
   * WorkCharacter deleteMany
   */
  export type WorkCharacterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkCharacters to delete
     */
    where?: WorkCharacterWhereInput
    /**
     * Limit how many WorkCharacters to delete.
     */
    limit?: number
  }

  /**
   * WorkCharacter without action
   */
  export type WorkCharacterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCharacter
     */
    select?: WorkCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkCharacter
     */
    omit?: WorkCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkCharacterInclude<ExtArgs> | null
  }


  /**
   * Model BgImage
   */

  export type AggregateBgImage = {
    _count: BgImageCountAggregateOutputType | null
    _min: BgImageMinAggregateOutputType | null
    _max: BgImageMaxAggregateOutputType | null
  }

  export type BgImageMinAggregateOutputType = {
    id: string | null
    workId: string | null
    url: string | null
    status: string | null
    source: string | null
    photographer: string | null
    photographerUrl: string | null
    searchQuery: string | null
    fetchedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BgImageMaxAggregateOutputType = {
    id: string | null
    workId: string | null
    url: string | null
    status: string | null
    source: string | null
    photographer: string | null
    photographerUrl: string | null
    searchQuery: string | null
    fetchedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BgImageCountAggregateOutputType = {
    id: number
    workId: number
    url: number
    status: number
    source: number
    photographer: number
    photographerUrl: number
    searchQuery: number
    fetchedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BgImageMinAggregateInputType = {
    id?: true
    workId?: true
    url?: true
    status?: true
    source?: true
    photographer?: true
    photographerUrl?: true
    searchQuery?: true
    fetchedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BgImageMaxAggregateInputType = {
    id?: true
    workId?: true
    url?: true
    status?: true
    source?: true
    photographer?: true
    photographerUrl?: true
    searchQuery?: true
    fetchedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BgImageCountAggregateInputType = {
    id?: true
    workId?: true
    url?: true
    status?: true
    source?: true
    photographer?: true
    photographerUrl?: true
    searchQuery?: true
    fetchedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BgImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BgImage to aggregate.
     */
    where?: BgImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BgImages to fetch.
     */
    orderBy?: BgImageOrderByWithRelationInput | BgImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BgImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BgImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BgImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BgImages
    **/
    _count?: true | BgImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BgImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BgImageMaxAggregateInputType
  }

  export type GetBgImageAggregateType<T extends BgImageAggregateArgs> = {
        [P in keyof T & keyof AggregateBgImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBgImage[P]>
      : GetScalarType<T[P], AggregateBgImage[P]>
  }




  export type BgImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BgImageWhereInput
    orderBy?: BgImageOrderByWithAggregationInput | BgImageOrderByWithAggregationInput[]
    by: BgImageScalarFieldEnum[] | BgImageScalarFieldEnum
    having?: BgImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BgImageCountAggregateInputType | true
    _min?: BgImageMinAggregateInputType
    _max?: BgImageMaxAggregateInputType
  }

  export type BgImageGroupByOutputType = {
    id: string
    workId: string
    url: string
    status: string
    source: string
    photographer: string
    photographerUrl: string
    searchQuery: string
    fetchedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: BgImageCountAggregateOutputType | null
    _min: BgImageMinAggregateOutputType | null
    _max: BgImageMaxAggregateOutputType | null
  }

  type GetBgImageGroupByPayload<T extends BgImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BgImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BgImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BgImageGroupByOutputType[P]>
            : GetScalarType<T[P], BgImageGroupByOutputType[P]>
        }
      >
    >


  export type BgImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workId?: boolean
    url?: boolean
    status?: boolean
    source?: boolean
    photographer?: boolean
    photographerUrl?: boolean
    searchQuery?: boolean
    fetchedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bgImage"]>

  export type BgImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workId?: boolean
    url?: boolean
    status?: boolean
    source?: boolean
    photographer?: boolean
    photographerUrl?: boolean
    searchQuery?: boolean
    fetchedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bgImage"]>

  export type BgImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workId?: boolean
    url?: boolean
    status?: boolean
    source?: boolean
    photographer?: boolean
    photographerUrl?: boolean
    searchQuery?: boolean
    fetchedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bgImage"]>

  export type BgImageSelectScalar = {
    id?: boolean
    workId?: boolean
    url?: boolean
    status?: boolean
    source?: boolean
    photographer?: boolean
    photographerUrl?: boolean
    searchQuery?: boolean
    fetchedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BgImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workId" | "url" | "status" | "source" | "photographer" | "photographerUrl" | "searchQuery" | "fetchedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["bgImage"]>
  export type BgImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }
  export type BgImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }
  export type BgImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }

  export type $BgImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BgImage"
    objects: {
      work: Prisma.$WorkPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workId: string
      url: string
      status: string
      source: string
      photographer: string
      photographerUrl: string
      searchQuery: string
      fetchedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bgImage"]>
    composites: {}
  }

  type BgImageGetPayload<S extends boolean | null | undefined | BgImageDefaultArgs> = $Result.GetResult<Prisma.$BgImagePayload, S>

  type BgImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BgImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BgImageCountAggregateInputType | true
    }

  export interface BgImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BgImage'], meta: { name: 'BgImage' } }
    /**
     * Find zero or one BgImage that matches the filter.
     * @param {BgImageFindUniqueArgs} args - Arguments to find a BgImage
     * @example
     * // Get one BgImage
     * const bgImage = await prisma.bgImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BgImageFindUniqueArgs>(args: SelectSubset<T, BgImageFindUniqueArgs<ExtArgs>>): Prisma__BgImageClient<$Result.GetResult<Prisma.$BgImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BgImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BgImageFindUniqueOrThrowArgs} args - Arguments to find a BgImage
     * @example
     * // Get one BgImage
     * const bgImage = await prisma.bgImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BgImageFindUniqueOrThrowArgs>(args: SelectSubset<T, BgImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BgImageClient<$Result.GetResult<Prisma.$BgImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BgImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BgImageFindFirstArgs} args - Arguments to find a BgImage
     * @example
     * // Get one BgImage
     * const bgImage = await prisma.bgImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BgImageFindFirstArgs>(args?: SelectSubset<T, BgImageFindFirstArgs<ExtArgs>>): Prisma__BgImageClient<$Result.GetResult<Prisma.$BgImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BgImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BgImageFindFirstOrThrowArgs} args - Arguments to find a BgImage
     * @example
     * // Get one BgImage
     * const bgImage = await prisma.bgImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BgImageFindFirstOrThrowArgs>(args?: SelectSubset<T, BgImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__BgImageClient<$Result.GetResult<Prisma.$BgImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BgImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BgImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BgImages
     * const bgImages = await prisma.bgImage.findMany()
     * 
     * // Get first 10 BgImages
     * const bgImages = await prisma.bgImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bgImageWithIdOnly = await prisma.bgImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BgImageFindManyArgs>(args?: SelectSubset<T, BgImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BgImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BgImage.
     * @param {BgImageCreateArgs} args - Arguments to create a BgImage.
     * @example
     * // Create one BgImage
     * const BgImage = await prisma.bgImage.create({
     *   data: {
     *     // ... data to create a BgImage
     *   }
     * })
     * 
     */
    create<T extends BgImageCreateArgs>(args: SelectSubset<T, BgImageCreateArgs<ExtArgs>>): Prisma__BgImageClient<$Result.GetResult<Prisma.$BgImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BgImages.
     * @param {BgImageCreateManyArgs} args - Arguments to create many BgImages.
     * @example
     * // Create many BgImages
     * const bgImage = await prisma.bgImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BgImageCreateManyArgs>(args?: SelectSubset<T, BgImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BgImages and returns the data saved in the database.
     * @param {BgImageCreateManyAndReturnArgs} args - Arguments to create many BgImages.
     * @example
     * // Create many BgImages
     * const bgImage = await prisma.bgImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BgImages and only return the `id`
     * const bgImageWithIdOnly = await prisma.bgImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BgImageCreateManyAndReturnArgs>(args?: SelectSubset<T, BgImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BgImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BgImage.
     * @param {BgImageDeleteArgs} args - Arguments to delete one BgImage.
     * @example
     * // Delete one BgImage
     * const BgImage = await prisma.bgImage.delete({
     *   where: {
     *     // ... filter to delete one BgImage
     *   }
     * })
     * 
     */
    delete<T extends BgImageDeleteArgs>(args: SelectSubset<T, BgImageDeleteArgs<ExtArgs>>): Prisma__BgImageClient<$Result.GetResult<Prisma.$BgImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BgImage.
     * @param {BgImageUpdateArgs} args - Arguments to update one BgImage.
     * @example
     * // Update one BgImage
     * const bgImage = await prisma.bgImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BgImageUpdateArgs>(args: SelectSubset<T, BgImageUpdateArgs<ExtArgs>>): Prisma__BgImageClient<$Result.GetResult<Prisma.$BgImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BgImages.
     * @param {BgImageDeleteManyArgs} args - Arguments to filter BgImages to delete.
     * @example
     * // Delete a few BgImages
     * const { count } = await prisma.bgImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BgImageDeleteManyArgs>(args?: SelectSubset<T, BgImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BgImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BgImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BgImages
     * const bgImage = await prisma.bgImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BgImageUpdateManyArgs>(args: SelectSubset<T, BgImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BgImages and returns the data updated in the database.
     * @param {BgImageUpdateManyAndReturnArgs} args - Arguments to update many BgImages.
     * @example
     * // Update many BgImages
     * const bgImage = await prisma.bgImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BgImages and only return the `id`
     * const bgImageWithIdOnly = await prisma.bgImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BgImageUpdateManyAndReturnArgs>(args: SelectSubset<T, BgImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BgImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BgImage.
     * @param {BgImageUpsertArgs} args - Arguments to update or create a BgImage.
     * @example
     * // Update or create a BgImage
     * const bgImage = await prisma.bgImage.upsert({
     *   create: {
     *     // ... data to create a BgImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BgImage we want to update
     *   }
     * })
     */
    upsert<T extends BgImageUpsertArgs>(args: SelectSubset<T, BgImageUpsertArgs<ExtArgs>>): Prisma__BgImageClient<$Result.GetResult<Prisma.$BgImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BgImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BgImageCountArgs} args - Arguments to filter BgImages to count.
     * @example
     * // Count the number of BgImages
     * const count = await prisma.bgImage.count({
     *   where: {
     *     // ... the filter for the BgImages we want to count
     *   }
     * })
    **/
    count<T extends BgImageCountArgs>(
      args?: Subset<T, BgImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BgImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BgImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BgImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BgImageAggregateArgs>(args: Subset<T, BgImageAggregateArgs>): Prisma.PrismaPromise<GetBgImageAggregateType<T>>

    /**
     * Group by BgImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BgImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BgImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BgImageGroupByArgs['orderBy'] }
        : { orderBy?: BgImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BgImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBgImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BgImage model
   */
  readonly fields: BgImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BgImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BgImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    work<T extends WorkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkDefaultArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BgImage model
   */
  interface BgImageFieldRefs {
    readonly id: FieldRef<"BgImage", 'String'>
    readonly workId: FieldRef<"BgImage", 'String'>
    readonly url: FieldRef<"BgImage", 'String'>
    readonly status: FieldRef<"BgImage", 'String'>
    readonly source: FieldRef<"BgImage", 'String'>
    readonly photographer: FieldRef<"BgImage", 'String'>
    readonly photographerUrl: FieldRef<"BgImage", 'String'>
    readonly searchQuery: FieldRef<"BgImage", 'String'>
    readonly fetchedAt: FieldRef<"BgImage", 'DateTime'>
    readonly createdAt: FieldRef<"BgImage", 'DateTime'>
    readonly updatedAt: FieldRef<"BgImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BgImage findUnique
   */
  export type BgImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BgImage
     */
    select?: BgImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BgImage
     */
    omit?: BgImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BgImageInclude<ExtArgs> | null
    /**
     * Filter, which BgImage to fetch.
     */
    where: BgImageWhereUniqueInput
  }

  /**
   * BgImage findUniqueOrThrow
   */
  export type BgImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BgImage
     */
    select?: BgImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BgImage
     */
    omit?: BgImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BgImageInclude<ExtArgs> | null
    /**
     * Filter, which BgImage to fetch.
     */
    where: BgImageWhereUniqueInput
  }

  /**
   * BgImage findFirst
   */
  export type BgImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BgImage
     */
    select?: BgImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BgImage
     */
    omit?: BgImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BgImageInclude<ExtArgs> | null
    /**
     * Filter, which BgImage to fetch.
     */
    where?: BgImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BgImages to fetch.
     */
    orderBy?: BgImageOrderByWithRelationInput | BgImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BgImages.
     */
    cursor?: BgImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BgImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BgImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BgImages.
     */
    distinct?: BgImageScalarFieldEnum | BgImageScalarFieldEnum[]
  }

  /**
   * BgImage findFirstOrThrow
   */
  export type BgImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BgImage
     */
    select?: BgImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BgImage
     */
    omit?: BgImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BgImageInclude<ExtArgs> | null
    /**
     * Filter, which BgImage to fetch.
     */
    where?: BgImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BgImages to fetch.
     */
    orderBy?: BgImageOrderByWithRelationInput | BgImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BgImages.
     */
    cursor?: BgImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BgImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BgImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BgImages.
     */
    distinct?: BgImageScalarFieldEnum | BgImageScalarFieldEnum[]
  }

  /**
   * BgImage findMany
   */
  export type BgImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BgImage
     */
    select?: BgImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BgImage
     */
    omit?: BgImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BgImageInclude<ExtArgs> | null
    /**
     * Filter, which BgImages to fetch.
     */
    where?: BgImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BgImages to fetch.
     */
    orderBy?: BgImageOrderByWithRelationInput | BgImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BgImages.
     */
    cursor?: BgImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BgImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BgImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BgImages.
     */
    distinct?: BgImageScalarFieldEnum | BgImageScalarFieldEnum[]
  }

  /**
   * BgImage create
   */
  export type BgImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BgImage
     */
    select?: BgImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BgImage
     */
    omit?: BgImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BgImageInclude<ExtArgs> | null
    /**
     * The data needed to create a BgImage.
     */
    data: XOR<BgImageCreateInput, BgImageUncheckedCreateInput>
  }

  /**
   * BgImage createMany
   */
  export type BgImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BgImages.
     */
    data: BgImageCreateManyInput | BgImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BgImage createManyAndReturn
   */
  export type BgImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BgImage
     */
    select?: BgImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BgImage
     */
    omit?: BgImageOmit<ExtArgs> | null
    /**
     * The data used to create many BgImages.
     */
    data: BgImageCreateManyInput | BgImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BgImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BgImage update
   */
  export type BgImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BgImage
     */
    select?: BgImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BgImage
     */
    omit?: BgImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BgImageInclude<ExtArgs> | null
    /**
     * The data needed to update a BgImage.
     */
    data: XOR<BgImageUpdateInput, BgImageUncheckedUpdateInput>
    /**
     * Choose, which BgImage to update.
     */
    where: BgImageWhereUniqueInput
  }

  /**
   * BgImage updateMany
   */
  export type BgImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BgImages.
     */
    data: XOR<BgImageUpdateManyMutationInput, BgImageUncheckedUpdateManyInput>
    /**
     * Filter which BgImages to update
     */
    where?: BgImageWhereInput
    /**
     * Limit how many BgImages to update.
     */
    limit?: number
  }

  /**
   * BgImage updateManyAndReturn
   */
  export type BgImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BgImage
     */
    select?: BgImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BgImage
     */
    omit?: BgImageOmit<ExtArgs> | null
    /**
     * The data used to update BgImages.
     */
    data: XOR<BgImageUpdateManyMutationInput, BgImageUncheckedUpdateManyInput>
    /**
     * Filter which BgImages to update
     */
    where?: BgImageWhereInput
    /**
     * Limit how many BgImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BgImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BgImage upsert
   */
  export type BgImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BgImage
     */
    select?: BgImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BgImage
     */
    omit?: BgImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BgImageInclude<ExtArgs> | null
    /**
     * The filter to search for the BgImage to update in case it exists.
     */
    where: BgImageWhereUniqueInput
    /**
     * In case the BgImage found by the `where` argument doesn't exist, create a new BgImage with this data.
     */
    create: XOR<BgImageCreateInput, BgImageUncheckedCreateInput>
    /**
     * In case the BgImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BgImageUpdateInput, BgImageUncheckedUpdateInput>
  }

  /**
   * BgImage delete
   */
  export type BgImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BgImage
     */
    select?: BgImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BgImage
     */
    omit?: BgImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BgImageInclude<ExtArgs> | null
    /**
     * Filter which BgImage to delete.
     */
    where: BgImageWhereUniqueInput
  }

  /**
   * BgImage deleteMany
   */
  export type BgImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BgImages to delete
     */
    where?: BgImageWhereInput
    /**
     * Limit how many BgImages to delete.
     */
    limit?: number
  }

  /**
   * BgImage without action
   */
  export type BgImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BgImage
     */
    select?: BgImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BgImage
     */
    omit?: BgImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BgImageInclude<ExtArgs> | null
  }


  /**
   * Model Award
   */

  export type AggregateAward = {
    _count: AwardCountAggregateOutputType | null
    _avg: AwardAvgAggregateOutputType | null
    _sum: AwardSumAggregateOutputType | null
    _min: AwardMinAggregateOutputType | null
    _max: AwardMaxAggregateOutputType | null
  }

  export type AwardAvgAggregateOutputType = {
    established: number | null
  }

  export type AwardSumAggregateOutputType = {
    established: number | null
  }

  export type AwardMinAggregateOutputType = {
    slug: string | null
    name: string | null
    nameEn: string | null
    description: string | null
    established: number | null
    country: string | null
    flag: string | null
    frequency: string | null
    category: string | null
    gradient: string | null
    icon: string | null
    website: string | null
    introduction: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AwardMaxAggregateOutputType = {
    slug: string | null
    name: string | null
    nameEn: string | null
    description: string | null
    established: number | null
    country: string | null
    flag: string | null
    frequency: string | null
    category: string | null
    gradient: string | null
    icon: string | null
    website: string | null
    introduction: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AwardCountAggregateOutputType = {
    slug: number
    name: number
    nameEn: number
    description: number
    established: number
    country: number
    flag: number
    frequency: number
    category: number
    gradient: number
    icon: number
    website: number
    introduction: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AwardAvgAggregateInputType = {
    established?: true
  }

  export type AwardSumAggregateInputType = {
    established?: true
  }

  export type AwardMinAggregateInputType = {
    slug?: true
    name?: true
    nameEn?: true
    description?: true
    established?: true
    country?: true
    flag?: true
    frequency?: true
    category?: true
    gradient?: true
    icon?: true
    website?: true
    introduction?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AwardMaxAggregateInputType = {
    slug?: true
    name?: true
    nameEn?: true
    description?: true
    established?: true
    country?: true
    flag?: true
    frequency?: true
    category?: true
    gradient?: true
    icon?: true
    website?: true
    introduction?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AwardCountAggregateInputType = {
    slug?: true
    name?: true
    nameEn?: true
    description?: true
    established?: true
    country?: true
    flag?: true
    frequency?: true
    category?: true
    gradient?: true
    icon?: true
    website?: true
    introduction?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AwardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Award to aggregate.
     */
    where?: AwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Awards to fetch.
     */
    orderBy?: AwardOrderByWithRelationInput | AwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Awards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Awards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Awards
    **/
    _count?: true | AwardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AwardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AwardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AwardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AwardMaxAggregateInputType
  }

  export type GetAwardAggregateType<T extends AwardAggregateArgs> = {
        [P in keyof T & keyof AggregateAward]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAward[P]>
      : GetScalarType<T[P], AggregateAward[P]>
  }




  export type AwardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AwardWhereInput
    orderBy?: AwardOrderByWithAggregationInput | AwardOrderByWithAggregationInput[]
    by: AwardScalarFieldEnum[] | AwardScalarFieldEnum
    having?: AwardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AwardCountAggregateInputType | true
    _avg?: AwardAvgAggregateInputType
    _sum?: AwardSumAggregateInputType
    _min?: AwardMinAggregateInputType
    _max?: AwardMaxAggregateInputType
  }

  export type AwardGroupByOutputType = {
    slug: string
    name: string
    nameEn: string
    description: string
    established: number
    country: string
    flag: string
    frequency: string
    category: string
    gradient: string
    icon: string
    website: string | null
    introduction: string
    createdAt: Date
    updatedAt: Date
    _count: AwardCountAggregateOutputType | null
    _avg: AwardAvgAggregateOutputType | null
    _sum: AwardSumAggregateOutputType | null
    _min: AwardMinAggregateOutputType | null
    _max: AwardMaxAggregateOutputType | null
  }

  type GetAwardGroupByPayload<T extends AwardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AwardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AwardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AwardGroupByOutputType[P]>
            : GetScalarType<T[P], AwardGroupByOutputType[P]>
        }
      >
    >


  export type AwardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    slug?: boolean
    name?: boolean
    nameEn?: boolean
    description?: boolean
    established?: boolean
    country?: boolean
    flag?: boolean
    frequency?: boolean
    category?: boolean
    gradient?: boolean
    icon?: boolean
    website?: boolean
    introduction?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    winners?: boolean | Award$winnersArgs<ExtArgs>
    _count?: boolean | AwardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["award"]>

  export type AwardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    slug?: boolean
    name?: boolean
    nameEn?: boolean
    description?: boolean
    established?: boolean
    country?: boolean
    flag?: boolean
    frequency?: boolean
    category?: boolean
    gradient?: boolean
    icon?: boolean
    website?: boolean
    introduction?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["award"]>

  export type AwardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    slug?: boolean
    name?: boolean
    nameEn?: boolean
    description?: boolean
    established?: boolean
    country?: boolean
    flag?: boolean
    frequency?: boolean
    category?: boolean
    gradient?: boolean
    icon?: boolean
    website?: boolean
    introduction?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["award"]>

  export type AwardSelectScalar = {
    slug?: boolean
    name?: boolean
    nameEn?: boolean
    description?: boolean
    established?: boolean
    country?: boolean
    flag?: boolean
    frequency?: boolean
    category?: boolean
    gradient?: boolean
    icon?: boolean
    website?: boolean
    introduction?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AwardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"slug" | "name" | "nameEn" | "description" | "established" | "country" | "flag" | "frequency" | "category" | "gradient" | "icon" | "website" | "introduction" | "createdAt" | "updatedAt", ExtArgs["result"]["award"]>
  export type AwardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    winners?: boolean | Award$winnersArgs<ExtArgs>
    _count?: boolean | AwardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AwardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AwardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AwardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Award"
    objects: {
      winners: Prisma.$AwardWinnerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      slug: string
      name: string
      nameEn: string
      description: string
      established: number
      country: string
      flag: string
      frequency: string
      category: string
      gradient: string
      icon: string
      website: string | null
      introduction: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["award"]>
    composites: {}
  }

  type AwardGetPayload<S extends boolean | null | undefined | AwardDefaultArgs> = $Result.GetResult<Prisma.$AwardPayload, S>

  type AwardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AwardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AwardCountAggregateInputType | true
    }

  export interface AwardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Award'], meta: { name: 'Award' } }
    /**
     * Find zero or one Award that matches the filter.
     * @param {AwardFindUniqueArgs} args - Arguments to find a Award
     * @example
     * // Get one Award
     * const award = await prisma.award.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AwardFindUniqueArgs>(args: SelectSubset<T, AwardFindUniqueArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Award that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AwardFindUniqueOrThrowArgs} args - Arguments to find a Award
     * @example
     * // Get one Award
     * const award = await prisma.award.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AwardFindUniqueOrThrowArgs>(args: SelectSubset<T, AwardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Award that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardFindFirstArgs} args - Arguments to find a Award
     * @example
     * // Get one Award
     * const award = await prisma.award.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AwardFindFirstArgs>(args?: SelectSubset<T, AwardFindFirstArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Award that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardFindFirstOrThrowArgs} args - Arguments to find a Award
     * @example
     * // Get one Award
     * const award = await prisma.award.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AwardFindFirstOrThrowArgs>(args?: SelectSubset<T, AwardFindFirstOrThrowArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Awards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Awards
     * const awards = await prisma.award.findMany()
     * 
     * // Get first 10 Awards
     * const awards = await prisma.award.findMany({ take: 10 })
     * 
     * // Only select the `slug`
     * const awardWithSlugOnly = await prisma.award.findMany({ select: { slug: true } })
     * 
     */
    findMany<T extends AwardFindManyArgs>(args?: SelectSubset<T, AwardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Award.
     * @param {AwardCreateArgs} args - Arguments to create a Award.
     * @example
     * // Create one Award
     * const Award = await prisma.award.create({
     *   data: {
     *     // ... data to create a Award
     *   }
     * })
     * 
     */
    create<T extends AwardCreateArgs>(args: SelectSubset<T, AwardCreateArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Awards.
     * @param {AwardCreateManyArgs} args - Arguments to create many Awards.
     * @example
     * // Create many Awards
     * const award = await prisma.award.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AwardCreateManyArgs>(args?: SelectSubset<T, AwardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Awards and returns the data saved in the database.
     * @param {AwardCreateManyAndReturnArgs} args - Arguments to create many Awards.
     * @example
     * // Create many Awards
     * const award = await prisma.award.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Awards and only return the `slug`
     * const awardWithSlugOnly = await prisma.award.createManyAndReturn({
     *   select: { slug: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AwardCreateManyAndReturnArgs>(args?: SelectSubset<T, AwardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Award.
     * @param {AwardDeleteArgs} args - Arguments to delete one Award.
     * @example
     * // Delete one Award
     * const Award = await prisma.award.delete({
     *   where: {
     *     // ... filter to delete one Award
     *   }
     * })
     * 
     */
    delete<T extends AwardDeleteArgs>(args: SelectSubset<T, AwardDeleteArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Award.
     * @param {AwardUpdateArgs} args - Arguments to update one Award.
     * @example
     * // Update one Award
     * const award = await prisma.award.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AwardUpdateArgs>(args: SelectSubset<T, AwardUpdateArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Awards.
     * @param {AwardDeleteManyArgs} args - Arguments to filter Awards to delete.
     * @example
     * // Delete a few Awards
     * const { count } = await prisma.award.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AwardDeleteManyArgs>(args?: SelectSubset<T, AwardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Awards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Awards
     * const award = await prisma.award.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AwardUpdateManyArgs>(args: SelectSubset<T, AwardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Awards and returns the data updated in the database.
     * @param {AwardUpdateManyAndReturnArgs} args - Arguments to update many Awards.
     * @example
     * // Update many Awards
     * const award = await prisma.award.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Awards and only return the `slug`
     * const awardWithSlugOnly = await prisma.award.updateManyAndReturn({
     *   select: { slug: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AwardUpdateManyAndReturnArgs>(args: SelectSubset<T, AwardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Award.
     * @param {AwardUpsertArgs} args - Arguments to update or create a Award.
     * @example
     * // Update or create a Award
     * const award = await prisma.award.upsert({
     *   create: {
     *     // ... data to create a Award
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Award we want to update
     *   }
     * })
     */
    upsert<T extends AwardUpsertArgs>(args: SelectSubset<T, AwardUpsertArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Awards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardCountArgs} args - Arguments to filter Awards to count.
     * @example
     * // Count the number of Awards
     * const count = await prisma.award.count({
     *   where: {
     *     // ... the filter for the Awards we want to count
     *   }
     * })
    **/
    count<T extends AwardCountArgs>(
      args?: Subset<T, AwardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AwardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Award.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AwardAggregateArgs>(args: Subset<T, AwardAggregateArgs>): Prisma.PrismaPromise<GetAwardAggregateType<T>>

    /**
     * Group by Award.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AwardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AwardGroupByArgs['orderBy'] }
        : { orderBy?: AwardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AwardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAwardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Award model
   */
  readonly fields: AwardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Award.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AwardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    winners<T extends Award$winnersArgs<ExtArgs> = {}>(args?: Subset<T, Award$winnersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwardWinnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Award model
   */
  interface AwardFieldRefs {
    readonly slug: FieldRef<"Award", 'String'>
    readonly name: FieldRef<"Award", 'String'>
    readonly nameEn: FieldRef<"Award", 'String'>
    readonly description: FieldRef<"Award", 'String'>
    readonly established: FieldRef<"Award", 'Int'>
    readonly country: FieldRef<"Award", 'String'>
    readonly flag: FieldRef<"Award", 'String'>
    readonly frequency: FieldRef<"Award", 'String'>
    readonly category: FieldRef<"Award", 'String'>
    readonly gradient: FieldRef<"Award", 'String'>
    readonly icon: FieldRef<"Award", 'String'>
    readonly website: FieldRef<"Award", 'String'>
    readonly introduction: FieldRef<"Award", 'String'>
    readonly createdAt: FieldRef<"Award", 'DateTime'>
    readonly updatedAt: FieldRef<"Award", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Award findUnique
   */
  export type AwardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * Filter, which Award to fetch.
     */
    where: AwardWhereUniqueInput
  }

  /**
   * Award findUniqueOrThrow
   */
  export type AwardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * Filter, which Award to fetch.
     */
    where: AwardWhereUniqueInput
  }

  /**
   * Award findFirst
   */
  export type AwardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * Filter, which Award to fetch.
     */
    where?: AwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Awards to fetch.
     */
    orderBy?: AwardOrderByWithRelationInput | AwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Awards.
     */
    cursor?: AwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Awards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Awards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Awards.
     */
    distinct?: AwardScalarFieldEnum | AwardScalarFieldEnum[]
  }

  /**
   * Award findFirstOrThrow
   */
  export type AwardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * Filter, which Award to fetch.
     */
    where?: AwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Awards to fetch.
     */
    orderBy?: AwardOrderByWithRelationInput | AwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Awards.
     */
    cursor?: AwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Awards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Awards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Awards.
     */
    distinct?: AwardScalarFieldEnum | AwardScalarFieldEnum[]
  }

  /**
   * Award findMany
   */
  export type AwardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * Filter, which Awards to fetch.
     */
    where?: AwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Awards to fetch.
     */
    orderBy?: AwardOrderByWithRelationInput | AwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Awards.
     */
    cursor?: AwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Awards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Awards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Awards.
     */
    distinct?: AwardScalarFieldEnum | AwardScalarFieldEnum[]
  }

  /**
   * Award create
   */
  export type AwardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * The data needed to create a Award.
     */
    data: XOR<AwardCreateInput, AwardUncheckedCreateInput>
  }

  /**
   * Award createMany
   */
  export type AwardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Awards.
     */
    data: AwardCreateManyInput | AwardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Award createManyAndReturn
   */
  export type AwardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * The data used to create many Awards.
     */
    data: AwardCreateManyInput | AwardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Award update
   */
  export type AwardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * The data needed to update a Award.
     */
    data: XOR<AwardUpdateInput, AwardUncheckedUpdateInput>
    /**
     * Choose, which Award to update.
     */
    where: AwardWhereUniqueInput
  }

  /**
   * Award updateMany
   */
  export type AwardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Awards.
     */
    data: XOR<AwardUpdateManyMutationInput, AwardUncheckedUpdateManyInput>
    /**
     * Filter which Awards to update
     */
    where?: AwardWhereInput
    /**
     * Limit how many Awards to update.
     */
    limit?: number
  }

  /**
   * Award updateManyAndReturn
   */
  export type AwardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * The data used to update Awards.
     */
    data: XOR<AwardUpdateManyMutationInput, AwardUncheckedUpdateManyInput>
    /**
     * Filter which Awards to update
     */
    where?: AwardWhereInput
    /**
     * Limit how many Awards to update.
     */
    limit?: number
  }

  /**
   * Award upsert
   */
  export type AwardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * The filter to search for the Award to update in case it exists.
     */
    where: AwardWhereUniqueInput
    /**
     * In case the Award found by the `where` argument doesn't exist, create a new Award with this data.
     */
    create: XOR<AwardCreateInput, AwardUncheckedCreateInput>
    /**
     * In case the Award was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AwardUpdateInput, AwardUncheckedUpdateInput>
  }

  /**
   * Award delete
   */
  export type AwardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * Filter which Award to delete.
     */
    where: AwardWhereUniqueInput
  }

  /**
   * Award deleteMany
   */
  export type AwardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Awards to delete
     */
    where?: AwardWhereInput
    /**
     * Limit how many Awards to delete.
     */
    limit?: number
  }

  /**
   * Award.winners
   */
  export type Award$winnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwardWinner
     */
    select?: AwardWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwardWinner
     */
    omit?: AwardWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardWinnerInclude<ExtArgs> | null
    where?: AwardWinnerWhereInput
    orderBy?: AwardWinnerOrderByWithRelationInput | AwardWinnerOrderByWithRelationInput[]
    cursor?: AwardWinnerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AwardWinnerScalarFieldEnum | AwardWinnerScalarFieldEnum[]
  }

  /**
   * Award without action
   */
  export type AwardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
  }


  /**
   * Model AwardWinner
   */

  export type AggregateAwardWinner = {
    _count: AwardWinnerCountAggregateOutputType | null
    _avg: AwardWinnerAvgAggregateOutputType | null
    _sum: AwardWinnerSumAggregateOutputType | null
    _min: AwardWinnerMinAggregateOutputType | null
    _max: AwardWinnerMaxAggregateOutputType | null
  }

  export type AwardWinnerAvgAggregateOutputType = {
    year: number | null
  }

  export type AwardWinnerSumAggregateOutputType = {
    year: number | null
  }

  export type AwardWinnerMinAggregateOutputType = {
    id: string | null
    workId: string | null
    awardSlug: string | null
    year: number | null
    category: string | null
  }

  export type AwardWinnerMaxAggregateOutputType = {
    id: string | null
    workId: string | null
    awardSlug: string | null
    year: number | null
    category: string | null
  }

  export type AwardWinnerCountAggregateOutputType = {
    id: number
    workId: number
    awardSlug: number
    year: number
    category: number
    _all: number
  }


  export type AwardWinnerAvgAggregateInputType = {
    year?: true
  }

  export type AwardWinnerSumAggregateInputType = {
    year?: true
  }

  export type AwardWinnerMinAggregateInputType = {
    id?: true
    workId?: true
    awardSlug?: true
    year?: true
    category?: true
  }

  export type AwardWinnerMaxAggregateInputType = {
    id?: true
    workId?: true
    awardSlug?: true
    year?: true
    category?: true
  }

  export type AwardWinnerCountAggregateInputType = {
    id?: true
    workId?: true
    awardSlug?: true
    year?: true
    category?: true
    _all?: true
  }

  export type AwardWinnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AwardWinner to aggregate.
     */
    where?: AwardWinnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AwardWinners to fetch.
     */
    orderBy?: AwardWinnerOrderByWithRelationInput | AwardWinnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AwardWinnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AwardWinners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AwardWinners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AwardWinners
    **/
    _count?: true | AwardWinnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AwardWinnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AwardWinnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AwardWinnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AwardWinnerMaxAggregateInputType
  }

  export type GetAwardWinnerAggregateType<T extends AwardWinnerAggregateArgs> = {
        [P in keyof T & keyof AggregateAwardWinner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAwardWinner[P]>
      : GetScalarType<T[P], AggregateAwardWinner[P]>
  }




  export type AwardWinnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AwardWinnerWhereInput
    orderBy?: AwardWinnerOrderByWithAggregationInput | AwardWinnerOrderByWithAggregationInput[]
    by: AwardWinnerScalarFieldEnum[] | AwardWinnerScalarFieldEnum
    having?: AwardWinnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AwardWinnerCountAggregateInputType | true
    _avg?: AwardWinnerAvgAggregateInputType
    _sum?: AwardWinnerSumAggregateInputType
    _min?: AwardWinnerMinAggregateInputType
    _max?: AwardWinnerMaxAggregateInputType
  }

  export type AwardWinnerGroupByOutputType = {
    id: string
    workId: string
    awardSlug: string
    year: number
    category: string | null
    _count: AwardWinnerCountAggregateOutputType | null
    _avg: AwardWinnerAvgAggregateOutputType | null
    _sum: AwardWinnerSumAggregateOutputType | null
    _min: AwardWinnerMinAggregateOutputType | null
    _max: AwardWinnerMaxAggregateOutputType | null
  }

  type GetAwardWinnerGroupByPayload<T extends AwardWinnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AwardWinnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AwardWinnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AwardWinnerGroupByOutputType[P]>
            : GetScalarType<T[P], AwardWinnerGroupByOutputType[P]>
        }
      >
    >


  export type AwardWinnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workId?: boolean
    awardSlug?: boolean
    year?: boolean
    category?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
    award?: boolean | AwardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["awardWinner"]>

  export type AwardWinnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workId?: boolean
    awardSlug?: boolean
    year?: boolean
    category?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
    award?: boolean | AwardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["awardWinner"]>

  export type AwardWinnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workId?: boolean
    awardSlug?: boolean
    year?: boolean
    category?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
    award?: boolean | AwardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["awardWinner"]>

  export type AwardWinnerSelectScalar = {
    id?: boolean
    workId?: boolean
    awardSlug?: boolean
    year?: boolean
    category?: boolean
  }

  export type AwardWinnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workId" | "awardSlug" | "year" | "category", ExtArgs["result"]["awardWinner"]>
  export type AwardWinnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
    award?: boolean | AwardDefaultArgs<ExtArgs>
  }
  export type AwardWinnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
    award?: boolean | AwardDefaultArgs<ExtArgs>
  }
  export type AwardWinnerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
    award?: boolean | AwardDefaultArgs<ExtArgs>
  }

  export type $AwardWinnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AwardWinner"
    objects: {
      work: Prisma.$WorkPayload<ExtArgs>
      award: Prisma.$AwardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workId: string
      awardSlug: string
      year: number
      category: string | null
    }, ExtArgs["result"]["awardWinner"]>
    composites: {}
  }

  type AwardWinnerGetPayload<S extends boolean | null | undefined | AwardWinnerDefaultArgs> = $Result.GetResult<Prisma.$AwardWinnerPayload, S>

  type AwardWinnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AwardWinnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AwardWinnerCountAggregateInputType | true
    }

  export interface AwardWinnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AwardWinner'], meta: { name: 'AwardWinner' } }
    /**
     * Find zero or one AwardWinner that matches the filter.
     * @param {AwardWinnerFindUniqueArgs} args - Arguments to find a AwardWinner
     * @example
     * // Get one AwardWinner
     * const awardWinner = await prisma.awardWinner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AwardWinnerFindUniqueArgs>(args: SelectSubset<T, AwardWinnerFindUniqueArgs<ExtArgs>>): Prisma__AwardWinnerClient<$Result.GetResult<Prisma.$AwardWinnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AwardWinner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AwardWinnerFindUniqueOrThrowArgs} args - Arguments to find a AwardWinner
     * @example
     * // Get one AwardWinner
     * const awardWinner = await prisma.awardWinner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AwardWinnerFindUniqueOrThrowArgs>(args: SelectSubset<T, AwardWinnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AwardWinnerClient<$Result.GetResult<Prisma.$AwardWinnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AwardWinner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardWinnerFindFirstArgs} args - Arguments to find a AwardWinner
     * @example
     * // Get one AwardWinner
     * const awardWinner = await prisma.awardWinner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AwardWinnerFindFirstArgs>(args?: SelectSubset<T, AwardWinnerFindFirstArgs<ExtArgs>>): Prisma__AwardWinnerClient<$Result.GetResult<Prisma.$AwardWinnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AwardWinner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardWinnerFindFirstOrThrowArgs} args - Arguments to find a AwardWinner
     * @example
     * // Get one AwardWinner
     * const awardWinner = await prisma.awardWinner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AwardWinnerFindFirstOrThrowArgs>(args?: SelectSubset<T, AwardWinnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AwardWinnerClient<$Result.GetResult<Prisma.$AwardWinnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AwardWinners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardWinnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AwardWinners
     * const awardWinners = await prisma.awardWinner.findMany()
     * 
     * // Get first 10 AwardWinners
     * const awardWinners = await prisma.awardWinner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const awardWinnerWithIdOnly = await prisma.awardWinner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AwardWinnerFindManyArgs>(args?: SelectSubset<T, AwardWinnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwardWinnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AwardWinner.
     * @param {AwardWinnerCreateArgs} args - Arguments to create a AwardWinner.
     * @example
     * // Create one AwardWinner
     * const AwardWinner = await prisma.awardWinner.create({
     *   data: {
     *     // ... data to create a AwardWinner
     *   }
     * })
     * 
     */
    create<T extends AwardWinnerCreateArgs>(args: SelectSubset<T, AwardWinnerCreateArgs<ExtArgs>>): Prisma__AwardWinnerClient<$Result.GetResult<Prisma.$AwardWinnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AwardWinners.
     * @param {AwardWinnerCreateManyArgs} args - Arguments to create many AwardWinners.
     * @example
     * // Create many AwardWinners
     * const awardWinner = await prisma.awardWinner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AwardWinnerCreateManyArgs>(args?: SelectSubset<T, AwardWinnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AwardWinners and returns the data saved in the database.
     * @param {AwardWinnerCreateManyAndReturnArgs} args - Arguments to create many AwardWinners.
     * @example
     * // Create many AwardWinners
     * const awardWinner = await prisma.awardWinner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AwardWinners and only return the `id`
     * const awardWinnerWithIdOnly = await prisma.awardWinner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AwardWinnerCreateManyAndReturnArgs>(args?: SelectSubset<T, AwardWinnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwardWinnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AwardWinner.
     * @param {AwardWinnerDeleteArgs} args - Arguments to delete one AwardWinner.
     * @example
     * // Delete one AwardWinner
     * const AwardWinner = await prisma.awardWinner.delete({
     *   where: {
     *     // ... filter to delete one AwardWinner
     *   }
     * })
     * 
     */
    delete<T extends AwardWinnerDeleteArgs>(args: SelectSubset<T, AwardWinnerDeleteArgs<ExtArgs>>): Prisma__AwardWinnerClient<$Result.GetResult<Prisma.$AwardWinnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AwardWinner.
     * @param {AwardWinnerUpdateArgs} args - Arguments to update one AwardWinner.
     * @example
     * // Update one AwardWinner
     * const awardWinner = await prisma.awardWinner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AwardWinnerUpdateArgs>(args: SelectSubset<T, AwardWinnerUpdateArgs<ExtArgs>>): Prisma__AwardWinnerClient<$Result.GetResult<Prisma.$AwardWinnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AwardWinners.
     * @param {AwardWinnerDeleteManyArgs} args - Arguments to filter AwardWinners to delete.
     * @example
     * // Delete a few AwardWinners
     * const { count } = await prisma.awardWinner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AwardWinnerDeleteManyArgs>(args?: SelectSubset<T, AwardWinnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AwardWinners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardWinnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AwardWinners
     * const awardWinner = await prisma.awardWinner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AwardWinnerUpdateManyArgs>(args: SelectSubset<T, AwardWinnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AwardWinners and returns the data updated in the database.
     * @param {AwardWinnerUpdateManyAndReturnArgs} args - Arguments to update many AwardWinners.
     * @example
     * // Update many AwardWinners
     * const awardWinner = await prisma.awardWinner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AwardWinners and only return the `id`
     * const awardWinnerWithIdOnly = await prisma.awardWinner.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AwardWinnerUpdateManyAndReturnArgs>(args: SelectSubset<T, AwardWinnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwardWinnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AwardWinner.
     * @param {AwardWinnerUpsertArgs} args - Arguments to update or create a AwardWinner.
     * @example
     * // Update or create a AwardWinner
     * const awardWinner = await prisma.awardWinner.upsert({
     *   create: {
     *     // ... data to create a AwardWinner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AwardWinner we want to update
     *   }
     * })
     */
    upsert<T extends AwardWinnerUpsertArgs>(args: SelectSubset<T, AwardWinnerUpsertArgs<ExtArgs>>): Prisma__AwardWinnerClient<$Result.GetResult<Prisma.$AwardWinnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AwardWinners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardWinnerCountArgs} args - Arguments to filter AwardWinners to count.
     * @example
     * // Count the number of AwardWinners
     * const count = await prisma.awardWinner.count({
     *   where: {
     *     // ... the filter for the AwardWinners we want to count
     *   }
     * })
    **/
    count<T extends AwardWinnerCountArgs>(
      args?: Subset<T, AwardWinnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AwardWinnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AwardWinner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardWinnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AwardWinnerAggregateArgs>(args: Subset<T, AwardWinnerAggregateArgs>): Prisma.PrismaPromise<GetAwardWinnerAggregateType<T>>

    /**
     * Group by AwardWinner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardWinnerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AwardWinnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AwardWinnerGroupByArgs['orderBy'] }
        : { orderBy?: AwardWinnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AwardWinnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAwardWinnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AwardWinner model
   */
  readonly fields: AwardWinnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AwardWinner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AwardWinnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    work<T extends WorkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkDefaultArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    award<T extends AwardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AwardDefaultArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AwardWinner model
   */
  interface AwardWinnerFieldRefs {
    readonly id: FieldRef<"AwardWinner", 'String'>
    readonly workId: FieldRef<"AwardWinner", 'String'>
    readonly awardSlug: FieldRef<"AwardWinner", 'String'>
    readonly year: FieldRef<"AwardWinner", 'Int'>
    readonly category: FieldRef<"AwardWinner", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AwardWinner findUnique
   */
  export type AwardWinnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwardWinner
     */
    select?: AwardWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwardWinner
     */
    omit?: AwardWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardWinnerInclude<ExtArgs> | null
    /**
     * Filter, which AwardWinner to fetch.
     */
    where: AwardWinnerWhereUniqueInput
  }

  /**
   * AwardWinner findUniqueOrThrow
   */
  export type AwardWinnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwardWinner
     */
    select?: AwardWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwardWinner
     */
    omit?: AwardWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardWinnerInclude<ExtArgs> | null
    /**
     * Filter, which AwardWinner to fetch.
     */
    where: AwardWinnerWhereUniqueInput
  }

  /**
   * AwardWinner findFirst
   */
  export type AwardWinnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwardWinner
     */
    select?: AwardWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwardWinner
     */
    omit?: AwardWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardWinnerInclude<ExtArgs> | null
    /**
     * Filter, which AwardWinner to fetch.
     */
    where?: AwardWinnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AwardWinners to fetch.
     */
    orderBy?: AwardWinnerOrderByWithRelationInput | AwardWinnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AwardWinners.
     */
    cursor?: AwardWinnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AwardWinners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AwardWinners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AwardWinners.
     */
    distinct?: AwardWinnerScalarFieldEnum | AwardWinnerScalarFieldEnum[]
  }

  /**
   * AwardWinner findFirstOrThrow
   */
  export type AwardWinnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwardWinner
     */
    select?: AwardWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwardWinner
     */
    omit?: AwardWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardWinnerInclude<ExtArgs> | null
    /**
     * Filter, which AwardWinner to fetch.
     */
    where?: AwardWinnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AwardWinners to fetch.
     */
    orderBy?: AwardWinnerOrderByWithRelationInput | AwardWinnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AwardWinners.
     */
    cursor?: AwardWinnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AwardWinners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AwardWinners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AwardWinners.
     */
    distinct?: AwardWinnerScalarFieldEnum | AwardWinnerScalarFieldEnum[]
  }

  /**
   * AwardWinner findMany
   */
  export type AwardWinnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwardWinner
     */
    select?: AwardWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwardWinner
     */
    omit?: AwardWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardWinnerInclude<ExtArgs> | null
    /**
     * Filter, which AwardWinners to fetch.
     */
    where?: AwardWinnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AwardWinners to fetch.
     */
    orderBy?: AwardWinnerOrderByWithRelationInput | AwardWinnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AwardWinners.
     */
    cursor?: AwardWinnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AwardWinners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AwardWinners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AwardWinners.
     */
    distinct?: AwardWinnerScalarFieldEnum | AwardWinnerScalarFieldEnum[]
  }

  /**
   * AwardWinner create
   */
  export type AwardWinnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwardWinner
     */
    select?: AwardWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwardWinner
     */
    omit?: AwardWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardWinnerInclude<ExtArgs> | null
    /**
     * The data needed to create a AwardWinner.
     */
    data: XOR<AwardWinnerCreateInput, AwardWinnerUncheckedCreateInput>
  }

  /**
   * AwardWinner createMany
   */
  export type AwardWinnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AwardWinners.
     */
    data: AwardWinnerCreateManyInput | AwardWinnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AwardWinner createManyAndReturn
   */
  export type AwardWinnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwardWinner
     */
    select?: AwardWinnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AwardWinner
     */
    omit?: AwardWinnerOmit<ExtArgs> | null
    /**
     * The data used to create many AwardWinners.
     */
    data: AwardWinnerCreateManyInput | AwardWinnerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardWinnerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AwardWinner update
   */
  export type AwardWinnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwardWinner
     */
    select?: AwardWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwardWinner
     */
    omit?: AwardWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardWinnerInclude<ExtArgs> | null
    /**
     * The data needed to update a AwardWinner.
     */
    data: XOR<AwardWinnerUpdateInput, AwardWinnerUncheckedUpdateInput>
    /**
     * Choose, which AwardWinner to update.
     */
    where: AwardWinnerWhereUniqueInput
  }

  /**
   * AwardWinner updateMany
   */
  export type AwardWinnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AwardWinners.
     */
    data: XOR<AwardWinnerUpdateManyMutationInput, AwardWinnerUncheckedUpdateManyInput>
    /**
     * Filter which AwardWinners to update
     */
    where?: AwardWinnerWhereInput
    /**
     * Limit how many AwardWinners to update.
     */
    limit?: number
  }

  /**
   * AwardWinner updateManyAndReturn
   */
  export type AwardWinnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwardWinner
     */
    select?: AwardWinnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AwardWinner
     */
    omit?: AwardWinnerOmit<ExtArgs> | null
    /**
     * The data used to update AwardWinners.
     */
    data: XOR<AwardWinnerUpdateManyMutationInput, AwardWinnerUncheckedUpdateManyInput>
    /**
     * Filter which AwardWinners to update
     */
    where?: AwardWinnerWhereInput
    /**
     * Limit how many AwardWinners to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardWinnerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AwardWinner upsert
   */
  export type AwardWinnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwardWinner
     */
    select?: AwardWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwardWinner
     */
    omit?: AwardWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardWinnerInclude<ExtArgs> | null
    /**
     * The filter to search for the AwardWinner to update in case it exists.
     */
    where: AwardWinnerWhereUniqueInput
    /**
     * In case the AwardWinner found by the `where` argument doesn't exist, create a new AwardWinner with this data.
     */
    create: XOR<AwardWinnerCreateInput, AwardWinnerUncheckedCreateInput>
    /**
     * In case the AwardWinner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AwardWinnerUpdateInput, AwardWinnerUncheckedUpdateInput>
  }

  /**
   * AwardWinner delete
   */
  export type AwardWinnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwardWinner
     */
    select?: AwardWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwardWinner
     */
    omit?: AwardWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardWinnerInclude<ExtArgs> | null
    /**
     * Filter which AwardWinner to delete.
     */
    where: AwardWinnerWhereUniqueInput
  }

  /**
   * AwardWinner deleteMany
   */
  export type AwardWinnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AwardWinners to delete
     */
    where?: AwardWinnerWhereInput
    /**
     * Limit how many AwardWinners to delete.
     */
    limit?: number
  }

  /**
   * AwardWinner without action
   */
  export type AwardWinnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwardWinner
     */
    select?: AwardWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwardWinner
     */
    omit?: AwardWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardWinnerInclude<ExtArgs> | null
  }


  /**
   * Model DailyTrend
   */

  export type AggregateDailyTrend = {
    _count: DailyTrendCountAggregateOutputType | null
    _avg: DailyTrendAvgAggregateOutputType | null
    _sum: DailyTrendSumAggregateOutputType | null
    _min: DailyTrendMinAggregateOutputType | null
    _max: DailyTrendMaxAggregateOutputType | null
  }

  export type DailyTrendAvgAggregateOutputType = {
    totalPostsAnalyzed: number | null
  }

  export type DailyTrendSumAggregateOutputType = {
    totalPostsAnalyzed: number | null
  }

  export type DailyTrendMinAggregateOutputType = {
    id: string | null
    date: string | null
    title: string | null
    background: string | null
    perspectives: string | null
    insight: string | null
    sourceType: string | null
    generatedAt: Date | null
    totalPostsAnalyzed: number | null
    createdAt: Date | null
  }

  export type DailyTrendMaxAggregateOutputType = {
    id: string | null
    date: string | null
    title: string | null
    background: string | null
    perspectives: string | null
    insight: string | null
    sourceType: string | null
    generatedAt: Date | null
    totalPostsAnalyzed: number | null
    createdAt: Date | null
  }

  export type DailyTrendCountAggregateOutputType = {
    id: number
    date: number
    title: number
    background: number
    perspectives: number
    insight: number
    sourceLinks: number
    sourceType: number
    generatedAt: number
    totalPostsAnalyzed: number
    createdAt: number
    _all: number
  }


  export type DailyTrendAvgAggregateInputType = {
    totalPostsAnalyzed?: true
  }

  export type DailyTrendSumAggregateInputType = {
    totalPostsAnalyzed?: true
  }

  export type DailyTrendMinAggregateInputType = {
    id?: true
    date?: true
    title?: true
    background?: true
    perspectives?: true
    insight?: true
    sourceType?: true
    generatedAt?: true
    totalPostsAnalyzed?: true
    createdAt?: true
  }

  export type DailyTrendMaxAggregateInputType = {
    id?: true
    date?: true
    title?: true
    background?: true
    perspectives?: true
    insight?: true
    sourceType?: true
    generatedAt?: true
    totalPostsAnalyzed?: true
    createdAt?: true
  }

  export type DailyTrendCountAggregateInputType = {
    id?: true
    date?: true
    title?: true
    background?: true
    perspectives?: true
    insight?: true
    sourceLinks?: true
    sourceType?: true
    generatedAt?: true
    totalPostsAnalyzed?: true
    createdAt?: true
    _all?: true
  }

  export type DailyTrendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyTrend to aggregate.
     */
    where?: DailyTrendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyTrends to fetch.
     */
    orderBy?: DailyTrendOrderByWithRelationInput | DailyTrendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyTrendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyTrends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyTrends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyTrends
    **/
    _count?: true | DailyTrendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyTrendAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyTrendSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyTrendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyTrendMaxAggregateInputType
  }

  export type GetDailyTrendAggregateType<T extends DailyTrendAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyTrend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyTrend[P]>
      : GetScalarType<T[P], AggregateDailyTrend[P]>
  }




  export type DailyTrendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyTrendWhereInput
    orderBy?: DailyTrendOrderByWithAggregationInput | DailyTrendOrderByWithAggregationInput[]
    by: DailyTrendScalarFieldEnum[] | DailyTrendScalarFieldEnum
    having?: DailyTrendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyTrendCountAggregateInputType | true
    _avg?: DailyTrendAvgAggregateInputType
    _sum?: DailyTrendSumAggregateInputType
    _min?: DailyTrendMinAggregateInputType
    _max?: DailyTrendMaxAggregateInputType
  }

  export type DailyTrendGroupByOutputType = {
    id: string
    date: string
    title: string
    background: string
    perspectives: string
    insight: string
    sourceLinks: JsonValue
    sourceType: string | null
    generatedAt: Date
    totalPostsAnalyzed: number
    createdAt: Date
    _count: DailyTrendCountAggregateOutputType | null
    _avg: DailyTrendAvgAggregateOutputType | null
    _sum: DailyTrendSumAggregateOutputType | null
    _min: DailyTrendMinAggregateOutputType | null
    _max: DailyTrendMaxAggregateOutputType | null
  }

  type GetDailyTrendGroupByPayload<T extends DailyTrendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyTrendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyTrendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyTrendGroupByOutputType[P]>
            : GetScalarType<T[P], DailyTrendGroupByOutputType[P]>
        }
      >
    >


  export type DailyTrendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    title?: boolean
    background?: boolean
    perspectives?: boolean
    insight?: boolean
    sourceLinks?: boolean
    sourceType?: boolean
    generatedAt?: boolean
    totalPostsAnalyzed?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dailyTrend"]>

  export type DailyTrendSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    title?: boolean
    background?: boolean
    perspectives?: boolean
    insight?: boolean
    sourceLinks?: boolean
    sourceType?: boolean
    generatedAt?: boolean
    totalPostsAnalyzed?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dailyTrend"]>

  export type DailyTrendSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    title?: boolean
    background?: boolean
    perspectives?: boolean
    insight?: boolean
    sourceLinks?: boolean
    sourceType?: boolean
    generatedAt?: boolean
    totalPostsAnalyzed?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dailyTrend"]>

  export type DailyTrendSelectScalar = {
    id?: boolean
    date?: boolean
    title?: boolean
    background?: boolean
    perspectives?: boolean
    insight?: boolean
    sourceLinks?: boolean
    sourceType?: boolean
    generatedAt?: boolean
    totalPostsAnalyzed?: boolean
    createdAt?: boolean
  }

  export type DailyTrendOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "title" | "background" | "perspectives" | "insight" | "sourceLinks" | "sourceType" | "generatedAt" | "totalPostsAnalyzed" | "createdAt", ExtArgs["result"]["dailyTrend"]>

  export type $DailyTrendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyTrend"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: string
      title: string
      background: string
      perspectives: string
      insight: string
      sourceLinks: Prisma.JsonValue
      sourceType: string | null
      generatedAt: Date
      totalPostsAnalyzed: number
      createdAt: Date
    }, ExtArgs["result"]["dailyTrend"]>
    composites: {}
  }

  type DailyTrendGetPayload<S extends boolean | null | undefined | DailyTrendDefaultArgs> = $Result.GetResult<Prisma.$DailyTrendPayload, S>

  type DailyTrendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyTrendFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyTrendCountAggregateInputType | true
    }

  export interface DailyTrendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyTrend'], meta: { name: 'DailyTrend' } }
    /**
     * Find zero or one DailyTrend that matches the filter.
     * @param {DailyTrendFindUniqueArgs} args - Arguments to find a DailyTrend
     * @example
     * // Get one DailyTrend
     * const dailyTrend = await prisma.dailyTrend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyTrendFindUniqueArgs>(args: SelectSubset<T, DailyTrendFindUniqueArgs<ExtArgs>>): Prisma__DailyTrendClient<$Result.GetResult<Prisma.$DailyTrendPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyTrend that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyTrendFindUniqueOrThrowArgs} args - Arguments to find a DailyTrend
     * @example
     * // Get one DailyTrend
     * const dailyTrend = await prisma.dailyTrend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyTrendFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyTrendFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyTrendClient<$Result.GetResult<Prisma.$DailyTrendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyTrend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyTrendFindFirstArgs} args - Arguments to find a DailyTrend
     * @example
     * // Get one DailyTrend
     * const dailyTrend = await prisma.dailyTrend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyTrendFindFirstArgs>(args?: SelectSubset<T, DailyTrendFindFirstArgs<ExtArgs>>): Prisma__DailyTrendClient<$Result.GetResult<Prisma.$DailyTrendPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyTrend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyTrendFindFirstOrThrowArgs} args - Arguments to find a DailyTrend
     * @example
     * // Get one DailyTrend
     * const dailyTrend = await prisma.dailyTrend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyTrendFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyTrendFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyTrendClient<$Result.GetResult<Prisma.$DailyTrendPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyTrends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyTrendFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyTrends
     * const dailyTrends = await prisma.dailyTrend.findMany()
     * 
     * // Get first 10 DailyTrends
     * const dailyTrends = await prisma.dailyTrend.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyTrendWithIdOnly = await prisma.dailyTrend.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyTrendFindManyArgs>(args?: SelectSubset<T, DailyTrendFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyTrendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyTrend.
     * @param {DailyTrendCreateArgs} args - Arguments to create a DailyTrend.
     * @example
     * // Create one DailyTrend
     * const DailyTrend = await prisma.dailyTrend.create({
     *   data: {
     *     // ... data to create a DailyTrend
     *   }
     * })
     * 
     */
    create<T extends DailyTrendCreateArgs>(args: SelectSubset<T, DailyTrendCreateArgs<ExtArgs>>): Prisma__DailyTrendClient<$Result.GetResult<Prisma.$DailyTrendPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyTrends.
     * @param {DailyTrendCreateManyArgs} args - Arguments to create many DailyTrends.
     * @example
     * // Create many DailyTrends
     * const dailyTrend = await prisma.dailyTrend.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyTrendCreateManyArgs>(args?: SelectSubset<T, DailyTrendCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyTrends and returns the data saved in the database.
     * @param {DailyTrendCreateManyAndReturnArgs} args - Arguments to create many DailyTrends.
     * @example
     * // Create many DailyTrends
     * const dailyTrend = await prisma.dailyTrend.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyTrends and only return the `id`
     * const dailyTrendWithIdOnly = await prisma.dailyTrend.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyTrendCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyTrendCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyTrendPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyTrend.
     * @param {DailyTrendDeleteArgs} args - Arguments to delete one DailyTrend.
     * @example
     * // Delete one DailyTrend
     * const DailyTrend = await prisma.dailyTrend.delete({
     *   where: {
     *     // ... filter to delete one DailyTrend
     *   }
     * })
     * 
     */
    delete<T extends DailyTrendDeleteArgs>(args: SelectSubset<T, DailyTrendDeleteArgs<ExtArgs>>): Prisma__DailyTrendClient<$Result.GetResult<Prisma.$DailyTrendPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyTrend.
     * @param {DailyTrendUpdateArgs} args - Arguments to update one DailyTrend.
     * @example
     * // Update one DailyTrend
     * const dailyTrend = await prisma.dailyTrend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyTrendUpdateArgs>(args: SelectSubset<T, DailyTrendUpdateArgs<ExtArgs>>): Prisma__DailyTrendClient<$Result.GetResult<Prisma.$DailyTrendPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyTrends.
     * @param {DailyTrendDeleteManyArgs} args - Arguments to filter DailyTrends to delete.
     * @example
     * // Delete a few DailyTrends
     * const { count } = await prisma.dailyTrend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyTrendDeleteManyArgs>(args?: SelectSubset<T, DailyTrendDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyTrends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyTrendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyTrends
     * const dailyTrend = await prisma.dailyTrend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyTrendUpdateManyArgs>(args: SelectSubset<T, DailyTrendUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyTrends and returns the data updated in the database.
     * @param {DailyTrendUpdateManyAndReturnArgs} args - Arguments to update many DailyTrends.
     * @example
     * // Update many DailyTrends
     * const dailyTrend = await prisma.dailyTrend.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyTrends and only return the `id`
     * const dailyTrendWithIdOnly = await prisma.dailyTrend.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DailyTrendUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyTrendUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyTrendPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyTrend.
     * @param {DailyTrendUpsertArgs} args - Arguments to update or create a DailyTrend.
     * @example
     * // Update or create a DailyTrend
     * const dailyTrend = await prisma.dailyTrend.upsert({
     *   create: {
     *     // ... data to create a DailyTrend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyTrend we want to update
     *   }
     * })
     */
    upsert<T extends DailyTrendUpsertArgs>(args: SelectSubset<T, DailyTrendUpsertArgs<ExtArgs>>): Prisma__DailyTrendClient<$Result.GetResult<Prisma.$DailyTrendPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyTrends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyTrendCountArgs} args - Arguments to filter DailyTrends to count.
     * @example
     * // Count the number of DailyTrends
     * const count = await prisma.dailyTrend.count({
     *   where: {
     *     // ... the filter for the DailyTrends we want to count
     *   }
     * })
    **/
    count<T extends DailyTrendCountArgs>(
      args?: Subset<T, DailyTrendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyTrendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyTrend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyTrendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyTrendAggregateArgs>(args: Subset<T, DailyTrendAggregateArgs>): Prisma.PrismaPromise<GetDailyTrendAggregateType<T>>

    /**
     * Group by DailyTrend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyTrendGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyTrendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyTrendGroupByArgs['orderBy'] }
        : { orderBy?: DailyTrendGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyTrendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyTrendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyTrend model
   */
  readonly fields: DailyTrendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyTrend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyTrendClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyTrend model
   */
  interface DailyTrendFieldRefs {
    readonly id: FieldRef<"DailyTrend", 'String'>
    readonly date: FieldRef<"DailyTrend", 'String'>
    readonly title: FieldRef<"DailyTrend", 'String'>
    readonly background: FieldRef<"DailyTrend", 'String'>
    readonly perspectives: FieldRef<"DailyTrend", 'String'>
    readonly insight: FieldRef<"DailyTrend", 'String'>
    readonly sourceLinks: FieldRef<"DailyTrend", 'Json'>
    readonly sourceType: FieldRef<"DailyTrend", 'String'>
    readonly generatedAt: FieldRef<"DailyTrend", 'DateTime'>
    readonly totalPostsAnalyzed: FieldRef<"DailyTrend", 'Int'>
    readonly createdAt: FieldRef<"DailyTrend", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyTrend findUnique
   */
  export type DailyTrendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTrend
     */
    select?: DailyTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTrend
     */
    omit?: DailyTrendOmit<ExtArgs> | null
    /**
     * Filter, which DailyTrend to fetch.
     */
    where: DailyTrendWhereUniqueInput
  }

  /**
   * DailyTrend findUniqueOrThrow
   */
  export type DailyTrendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTrend
     */
    select?: DailyTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTrend
     */
    omit?: DailyTrendOmit<ExtArgs> | null
    /**
     * Filter, which DailyTrend to fetch.
     */
    where: DailyTrendWhereUniqueInput
  }

  /**
   * DailyTrend findFirst
   */
  export type DailyTrendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTrend
     */
    select?: DailyTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTrend
     */
    omit?: DailyTrendOmit<ExtArgs> | null
    /**
     * Filter, which DailyTrend to fetch.
     */
    where?: DailyTrendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyTrends to fetch.
     */
    orderBy?: DailyTrendOrderByWithRelationInput | DailyTrendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyTrends.
     */
    cursor?: DailyTrendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyTrends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyTrends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyTrends.
     */
    distinct?: DailyTrendScalarFieldEnum | DailyTrendScalarFieldEnum[]
  }

  /**
   * DailyTrend findFirstOrThrow
   */
  export type DailyTrendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTrend
     */
    select?: DailyTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTrend
     */
    omit?: DailyTrendOmit<ExtArgs> | null
    /**
     * Filter, which DailyTrend to fetch.
     */
    where?: DailyTrendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyTrends to fetch.
     */
    orderBy?: DailyTrendOrderByWithRelationInput | DailyTrendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyTrends.
     */
    cursor?: DailyTrendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyTrends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyTrends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyTrends.
     */
    distinct?: DailyTrendScalarFieldEnum | DailyTrendScalarFieldEnum[]
  }

  /**
   * DailyTrend findMany
   */
  export type DailyTrendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTrend
     */
    select?: DailyTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTrend
     */
    omit?: DailyTrendOmit<ExtArgs> | null
    /**
     * Filter, which DailyTrends to fetch.
     */
    where?: DailyTrendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyTrends to fetch.
     */
    orderBy?: DailyTrendOrderByWithRelationInput | DailyTrendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyTrends.
     */
    cursor?: DailyTrendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyTrends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyTrends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyTrends.
     */
    distinct?: DailyTrendScalarFieldEnum | DailyTrendScalarFieldEnum[]
  }

  /**
   * DailyTrend create
   */
  export type DailyTrendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTrend
     */
    select?: DailyTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTrend
     */
    omit?: DailyTrendOmit<ExtArgs> | null
    /**
     * The data needed to create a DailyTrend.
     */
    data: XOR<DailyTrendCreateInput, DailyTrendUncheckedCreateInput>
  }

  /**
   * DailyTrend createMany
   */
  export type DailyTrendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyTrends.
     */
    data: DailyTrendCreateManyInput | DailyTrendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyTrend createManyAndReturn
   */
  export type DailyTrendCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTrend
     */
    select?: DailyTrendSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTrend
     */
    omit?: DailyTrendOmit<ExtArgs> | null
    /**
     * The data used to create many DailyTrends.
     */
    data: DailyTrendCreateManyInput | DailyTrendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyTrend update
   */
  export type DailyTrendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTrend
     */
    select?: DailyTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTrend
     */
    omit?: DailyTrendOmit<ExtArgs> | null
    /**
     * The data needed to update a DailyTrend.
     */
    data: XOR<DailyTrendUpdateInput, DailyTrendUncheckedUpdateInput>
    /**
     * Choose, which DailyTrend to update.
     */
    where: DailyTrendWhereUniqueInput
  }

  /**
   * DailyTrend updateMany
   */
  export type DailyTrendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyTrends.
     */
    data: XOR<DailyTrendUpdateManyMutationInput, DailyTrendUncheckedUpdateManyInput>
    /**
     * Filter which DailyTrends to update
     */
    where?: DailyTrendWhereInput
    /**
     * Limit how many DailyTrends to update.
     */
    limit?: number
  }

  /**
   * DailyTrend updateManyAndReturn
   */
  export type DailyTrendUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTrend
     */
    select?: DailyTrendSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTrend
     */
    omit?: DailyTrendOmit<ExtArgs> | null
    /**
     * The data used to update DailyTrends.
     */
    data: XOR<DailyTrendUpdateManyMutationInput, DailyTrendUncheckedUpdateManyInput>
    /**
     * Filter which DailyTrends to update
     */
    where?: DailyTrendWhereInput
    /**
     * Limit how many DailyTrends to update.
     */
    limit?: number
  }

  /**
   * DailyTrend upsert
   */
  export type DailyTrendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTrend
     */
    select?: DailyTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTrend
     */
    omit?: DailyTrendOmit<ExtArgs> | null
    /**
     * The filter to search for the DailyTrend to update in case it exists.
     */
    where: DailyTrendWhereUniqueInput
    /**
     * In case the DailyTrend found by the `where` argument doesn't exist, create a new DailyTrend with this data.
     */
    create: XOR<DailyTrendCreateInput, DailyTrendUncheckedCreateInput>
    /**
     * In case the DailyTrend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyTrendUpdateInput, DailyTrendUncheckedUpdateInput>
  }

  /**
   * DailyTrend delete
   */
  export type DailyTrendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTrend
     */
    select?: DailyTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTrend
     */
    omit?: DailyTrendOmit<ExtArgs> | null
    /**
     * Filter which DailyTrend to delete.
     */
    where: DailyTrendWhereUniqueInput
  }

  /**
   * DailyTrend deleteMany
   */
  export type DailyTrendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyTrends to delete
     */
    where?: DailyTrendWhereInput
    /**
     * Limit how many DailyTrends to delete.
     */
    limit?: number
  }

  /**
   * DailyTrend without action
   */
  export type DailyTrendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTrend
     */
    select?: DailyTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTrend
     */
    omit?: DailyTrendOmit<ExtArgs> | null
  }


  /**
   * Model DailyNewWork
   */

  export type AggregateDailyNewWork = {
    _count: DailyNewWorkCountAggregateOutputType | null
    _min: DailyNewWorkMinAggregateOutputType | null
    _max: DailyNewWorkMaxAggregateOutputType | null
  }

  export type DailyNewWorkMinAggregateOutputType = {
    id: string | null
    title: string | null
    author: string | null
    source: string | null
    sourceUrl: string | null
    excerpt: string | null
    fullContent: string | null
    criticism: string | null
    language: string | null
    type: string | null
    publishedAt: Date | null
    collectedAt: Date | null
    date: string | null
    createdAt: Date | null
  }

  export type DailyNewWorkMaxAggregateOutputType = {
    id: string | null
    title: string | null
    author: string | null
    source: string | null
    sourceUrl: string | null
    excerpt: string | null
    fullContent: string | null
    criticism: string | null
    language: string | null
    type: string | null
    publishedAt: Date | null
    collectedAt: Date | null
    date: string | null
    createdAt: Date | null
  }

  export type DailyNewWorkCountAggregateOutputType = {
    id: number
    title: number
    author: number
    source: number
    sourceUrl: number
    excerpt: number
    fullContent: number
    criticism: number
    language: number
    tags: number
    type: number
    publishedAt: number
    collectedAt: number
    date: number
    createdAt: number
    _all: number
  }


  export type DailyNewWorkMinAggregateInputType = {
    id?: true
    title?: true
    author?: true
    source?: true
    sourceUrl?: true
    excerpt?: true
    fullContent?: true
    criticism?: true
    language?: true
    type?: true
    publishedAt?: true
    collectedAt?: true
    date?: true
    createdAt?: true
  }

  export type DailyNewWorkMaxAggregateInputType = {
    id?: true
    title?: true
    author?: true
    source?: true
    sourceUrl?: true
    excerpt?: true
    fullContent?: true
    criticism?: true
    language?: true
    type?: true
    publishedAt?: true
    collectedAt?: true
    date?: true
    createdAt?: true
  }

  export type DailyNewWorkCountAggregateInputType = {
    id?: true
    title?: true
    author?: true
    source?: true
    sourceUrl?: true
    excerpt?: true
    fullContent?: true
    criticism?: true
    language?: true
    tags?: true
    type?: true
    publishedAt?: true
    collectedAt?: true
    date?: true
    createdAt?: true
    _all?: true
  }

  export type DailyNewWorkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyNewWork to aggregate.
     */
    where?: DailyNewWorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyNewWorks to fetch.
     */
    orderBy?: DailyNewWorkOrderByWithRelationInput | DailyNewWorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyNewWorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyNewWorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyNewWorks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyNewWorks
    **/
    _count?: true | DailyNewWorkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyNewWorkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyNewWorkMaxAggregateInputType
  }

  export type GetDailyNewWorkAggregateType<T extends DailyNewWorkAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyNewWork]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyNewWork[P]>
      : GetScalarType<T[P], AggregateDailyNewWork[P]>
  }




  export type DailyNewWorkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyNewWorkWhereInput
    orderBy?: DailyNewWorkOrderByWithAggregationInput | DailyNewWorkOrderByWithAggregationInput[]
    by: DailyNewWorkScalarFieldEnum[] | DailyNewWorkScalarFieldEnum
    having?: DailyNewWorkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyNewWorkCountAggregateInputType | true
    _min?: DailyNewWorkMinAggregateInputType
    _max?: DailyNewWorkMaxAggregateInputType
  }

  export type DailyNewWorkGroupByOutputType = {
    id: string
    title: string
    author: string
    source: string
    sourceUrl: string
    excerpt: string
    fullContent: string | null
    criticism: string | null
    language: string
    tags: JsonValue
    type: string
    publishedAt: Date
    collectedAt: Date
    date: string
    createdAt: Date
    _count: DailyNewWorkCountAggregateOutputType | null
    _min: DailyNewWorkMinAggregateOutputType | null
    _max: DailyNewWorkMaxAggregateOutputType | null
  }

  type GetDailyNewWorkGroupByPayload<T extends DailyNewWorkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyNewWorkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyNewWorkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyNewWorkGroupByOutputType[P]>
            : GetScalarType<T[P], DailyNewWorkGroupByOutputType[P]>
        }
      >
    >


  export type DailyNewWorkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    source?: boolean
    sourceUrl?: boolean
    excerpt?: boolean
    fullContent?: boolean
    criticism?: boolean
    language?: boolean
    tags?: boolean
    type?: boolean
    publishedAt?: boolean
    collectedAt?: boolean
    date?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dailyNewWork"]>

  export type DailyNewWorkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    source?: boolean
    sourceUrl?: boolean
    excerpt?: boolean
    fullContent?: boolean
    criticism?: boolean
    language?: boolean
    tags?: boolean
    type?: boolean
    publishedAt?: boolean
    collectedAt?: boolean
    date?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dailyNewWork"]>

  export type DailyNewWorkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    source?: boolean
    sourceUrl?: boolean
    excerpt?: boolean
    fullContent?: boolean
    criticism?: boolean
    language?: boolean
    tags?: boolean
    type?: boolean
    publishedAt?: boolean
    collectedAt?: boolean
    date?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dailyNewWork"]>

  export type DailyNewWorkSelectScalar = {
    id?: boolean
    title?: boolean
    author?: boolean
    source?: boolean
    sourceUrl?: boolean
    excerpt?: boolean
    fullContent?: boolean
    criticism?: boolean
    language?: boolean
    tags?: boolean
    type?: boolean
    publishedAt?: boolean
    collectedAt?: boolean
    date?: boolean
    createdAt?: boolean
  }

  export type DailyNewWorkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "author" | "source" | "sourceUrl" | "excerpt" | "fullContent" | "criticism" | "language" | "tags" | "type" | "publishedAt" | "collectedAt" | "date" | "createdAt", ExtArgs["result"]["dailyNewWork"]>

  export type $DailyNewWorkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyNewWork"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      author: string
      source: string
      sourceUrl: string
      excerpt: string
      fullContent: string | null
      criticism: string | null
      language: string
      tags: Prisma.JsonValue
      type: string
      publishedAt: Date
      collectedAt: Date
      date: string
      createdAt: Date
    }, ExtArgs["result"]["dailyNewWork"]>
    composites: {}
  }

  type DailyNewWorkGetPayload<S extends boolean | null | undefined | DailyNewWorkDefaultArgs> = $Result.GetResult<Prisma.$DailyNewWorkPayload, S>

  type DailyNewWorkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyNewWorkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyNewWorkCountAggregateInputType | true
    }

  export interface DailyNewWorkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyNewWork'], meta: { name: 'DailyNewWork' } }
    /**
     * Find zero or one DailyNewWork that matches the filter.
     * @param {DailyNewWorkFindUniqueArgs} args - Arguments to find a DailyNewWork
     * @example
     * // Get one DailyNewWork
     * const dailyNewWork = await prisma.dailyNewWork.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyNewWorkFindUniqueArgs>(args: SelectSubset<T, DailyNewWorkFindUniqueArgs<ExtArgs>>): Prisma__DailyNewWorkClient<$Result.GetResult<Prisma.$DailyNewWorkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyNewWork that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyNewWorkFindUniqueOrThrowArgs} args - Arguments to find a DailyNewWork
     * @example
     * // Get one DailyNewWork
     * const dailyNewWork = await prisma.dailyNewWork.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyNewWorkFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyNewWorkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyNewWorkClient<$Result.GetResult<Prisma.$DailyNewWorkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyNewWork that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyNewWorkFindFirstArgs} args - Arguments to find a DailyNewWork
     * @example
     * // Get one DailyNewWork
     * const dailyNewWork = await prisma.dailyNewWork.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyNewWorkFindFirstArgs>(args?: SelectSubset<T, DailyNewWorkFindFirstArgs<ExtArgs>>): Prisma__DailyNewWorkClient<$Result.GetResult<Prisma.$DailyNewWorkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyNewWork that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyNewWorkFindFirstOrThrowArgs} args - Arguments to find a DailyNewWork
     * @example
     * // Get one DailyNewWork
     * const dailyNewWork = await prisma.dailyNewWork.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyNewWorkFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyNewWorkFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyNewWorkClient<$Result.GetResult<Prisma.$DailyNewWorkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyNewWorks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyNewWorkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyNewWorks
     * const dailyNewWorks = await prisma.dailyNewWork.findMany()
     * 
     * // Get first 10 DailyNewWorks
     * const dailyNewWorks = await prisma.dailyNewWork.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyNewWorkWithIdOnly = await prisma.dailyNewWork.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyNewWorkFindManyArgs>(args?: SelectSubset<T, DailyNewWorkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyNewWorkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyNewWork.
     * @param {DailyNewWorkCreateArgs} args - Arguments to create a DailyNewWork.
     * @example
     * // Create one DailyNewWork
     * const DailyNewWork = await prisma.dailyNewWork.create({
     *   data: {
     *     // ... data to create a DailyNewWork
     *   }
     * })
     * 
     */
    create<T extends DailyNewWorkCreateArgs>(args: SelectSubset<T, DailyNewWorkCreateArgs<ExtArgs>>): Prisma__DailyNewWorkClient<$Result.GetResult<Prisma.$DailyNewWorkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyNewWorks.
     * @param {DailyNewWorkCreateManyArgs} args - Arguments to create many DailyNewWorks.
     * @example
     * // Create many DailyNewWorks
     * const dailyNewWork = await prisma.dailyNewWork.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyNewWorkCreateManyArgs>(args?: SelectSubset<T, DailyNewWorkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyNewWorks and returns the data saved in the database.
     * @param {DailyNewWorkCreateManyAndReturnArgs} args - Arguments to create many DailyNewWorks.
     * @example
     * // Create many DailyNewWorks
     * const dailyNewWork = await prisma.dailyNewWork.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyNewWorks and only return the `id`
     * const dailyNewWorkWithIdOnly = await prisma.dailyNewWork.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyNewWorkCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyNewWorkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyNewWorkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyNewWork.
     * @param {DailyNewWorkDeleteArgs} args - Arguments to delete one DailyNewWork.
     * @example
     * // Delete one DailyNewWork
     * const DailyNewWork = await prisma.dailyNewWork.delete({
     *   where: {
     *     // ... filter to delete one DailyNewWork
     *   }
     * })
     * 
     */
    delete<T extends DailyNewWorkDeleteArgs>(args: SelectSubset<T, DailyNewWorkDeleteArgs<ExtArgs>>): Prisma__DailyNewWorkClient<$Result.GetResult<Prisma.$DailyNewWorkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyNewWork.
     * @param {DailyNewWorkUpdateArgs} args - Arguments to update one DailyNewWork.
     * @example
     * // Update one DailyNewWork
     * const dailyNewWork = await prisma.dailyNewWork.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyNewWorkUpdateArgs>(args: SelectSubset<T, DailyNewWorkUpdateArgs<ExtArgs>>): Prisma__DailyNewWorkClient<$Result.GetResult<Prisma.$DailyNewWorkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyNewWorks.
     * @param {DailyNewWorkDeleteManyArgs} args - Arguments to filter DailyNewWorks to delete.
     * @example
     * // Delete a few DailyNewWorks
     * const { count } = await prisma.dailyNewWork.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyNewWorkDeleteManyArgs>(args?: SelectSubset<T, DailyNewWorkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyNewWorks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyNewWorkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyNewWorks
     * const dailyNewWork = await prisma.dailyNewWork.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyNewWorkUpdateManyArgs>(args: SelectSubset<T, DailyNewWorkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyNewWorks and returns the data updated in the database.
     * @param {DailyNewWorkUpdateManyAndReturnArgs} args - Arguments to update many DailyNewWorks.
     * @example
     * // Update many DailyNewWorks
     * const dailyNewWork = await prisma.dailyNewWork.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyNewWorks and only return the `id`
     * const dailyNewWorkWithIdOnly = await prisma.dailyNewWork.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DailyNewWorkUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyNewWorkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyNewWorkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyNewWork.
     * @param {DailyNewWorkUpsertArgs} args - Arguments to update or create a DailyNewWork.
     * @example
     * // Update or create a DailyNewWork
     * const dailyNewWork = await prisma.dailyNewWork.upsert({
     *   create: {
     *     // ... data to create a DailyNewWork
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyNewWork we want to update
     *   }
     * })
     */
    upsert<T extends DailyNewWorkUpsertArgs>(args: SelectSubset<T, DailyNewWorkUpsertArgs<ExtArgs>>): Prisma__DailyNewWorkClient<$Result.GetResult<Prisma.$DailyNewWorkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyNewWorks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyNewWorkCountArgs} args - Arguments to filter DailyNewWorks to count.
     * @example
     * // Count the number of DailyNewWorks
     * const count = await prisma.dailyNewWork.count({
     *   where: {
     *     // ... the filter for the DailyNewWorks we want to count
     *   }
     * })
    **/
    count<T extends DailyNewWorkCountArgs>(
      args?: Subset<T, DailyNewWorkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyNewWorkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyNewWork.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyNewWorkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyNewWorkAggregateArgs>(args: Subset<T, DailyNewWorkAggregateArgs>): Prisma.PrismaPromise<GetDailyNewWorkAggregateType<T>>

    /**
     * Group by DailyNewWork.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyNewWorkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyNewWorkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyNewWorkGroupByArgs['orderBy'] }
        : { orderBy?: DailyNewWorkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyNewWorkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyNewWorkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyNewWork model
   */
  readonly fields: DailyNewWorkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyNewWork.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyNewWorkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyNewWork model
   */
  interface DailyNewWorkFieldRefs {
    readonly id: FieldRef<"DailyNewWork", 'String'>
    readonly title: FieldRef<"DailyNewWork", 'String'>
    readonly author: FieldRef<"DailyNewWork", 'String'>
    readonly source: FieldRef<"DailyNewWork", 'String'>
    readonly sourceUrl: FieldRef<"DailyNewWork", 'String'>
    readonly excerpt: FieldRef<"DailyNewWork", 'String'>
    readonly fullContent: FieldRef<"DailyNewWork", 'String'>
    readonly criticism: FieldRef<"DailyNewWork", 'String'>
    readonly language: FieldRef<"DailyNewWork", 'String'>
    readonly tags: FieldRef<"DailyNewWork", 'Json'>
    readonly type: FieldRef<"DailyNewWork", 'String'>
    readonly publishedAt: FieldRef<"DailyNewWork", 'DateTime'>
    readonly collectedAt: FieldRef<"DailyNewWork", 'DateTime'>
    readonly date: FieldRef<"DailyNewWork", 'String'>
    readonly createdAt: FieldRef<"DailyNewWork", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyNewWork findUnique
   */
  export type DailyNewWorkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyNewWork
     */
    select?: DailyNewWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyNewWork
     */
    omit?: DailyNewWorkOmit<ExtArgs> | null
    /**
     * Filter, which DailyNewWork to fetch.
     */
    where: DailyNewWorkWhereUniqueInput
  }

  /**
   * DailyNewWork findUniqueOrThrow
   */
  export type DailyNewWorkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyNewWork
     */
    select?: DailyNewWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyNewWork
     */
    omit?: DailyNewWorkOmit<ExtArgs> | null
    /**
     * Filter, which DailyNewWork to fetch.
     */
    where: DailyNewWorkWhereUniqueInput
  }

  /**
   * DailyNewWork findFirst
   */
  export type DailyNewWorkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyNewWork
     */
    select?: DailyNewWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyNewWork
     */
    omit?: DailyNewWorkOmit<ExtArgs> | null
    /**
     * Filter, which DailyNewWork to fetch.
     */
    where?: DailyNewWorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyNewWorks to fetch.
     */
    orderBy?: DailyNewWorkOrderByWithRelationInput | DailyNewWorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyNewWorks.
     */
    cursor?: DailyNewWorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyNewWorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyNewWorks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyNewWorks.
     */
    distinct?: DailyNewWorkScalarFieldEnum | DailyNewWorkScalarFieldEnum[]
  }

  /**
   * DailyNewWork findFirstOrThrow
   */
  export type DailyNewWorkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyNewWork
     */
    select?: DailyNewWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyNewWork
     */
    omit?: DailyNewWorkOmit<ExtArgs> | null
    /**
     * Filter, which DailyNewWork to fetch.
     */
    where?: DailyNewWorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyNewWorks to fetch.
     */
    orderBy?: DailyNewWorkOrderByWithRelationInput | DailyNewWorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyNewWorks.
     */
    cursor?: DailyNewWorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyNewWorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyNewWorks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyNewWorks.
     */
    distinct?: DailyNewWorkScalarFieldEnum | DailyNewWorkScalarFieldEnum[]
  }

  /**
   * DailyNewWork findMany
   */
  export type DailyNewWorkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyNewWork
     */
    select?: DailyNewWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyNewWork
     */
    omit?: DailyNewWorkOmit<ExtArgs> | null
    /**
     * Filter, which DailyNewWorks to fetch.
     */
    where?: DailyNewWorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyNewWorks to fetch.
     */
    orderBy?: DailyNewWorkOrderByWithRelationInput | DailyNewWorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyNewWorks.
     */
    cursor?: DailyNewWorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyNewWorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyNewWorks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyNewWorks.
     */
    distinct?: DailyNewWorkScalarFieldEnum | DailyNewWorkScalarFieldEnum[]
  }

  /**
   * DailyNewWork create
   */
  export type DailyNewWorkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyNewWork
     */
    select?: DailyNewWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyNewWork
     */
    omit?: DailyNewWorkOmit<ExtArgs> | null
    /**
     * The data needed to create a DailyNewWork.
     */
    data: XOR<DailyNewWorkCreateInput, DailyNewWorkUncheckedCreateInput>
  }

  /**
   * DailyNewWork createMany
   */
  export type DailyNewWorkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyNewWorks.
     */
    data: DailyNewWorkCreateManyInput | DailyNewWorkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyNewWork createManyAndReturn
   */
  export type DailyNewWorkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyNewWork
     */
    select?: DailyNewWorkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyNewWork
     */
    omit?: DailyNewWorkOmit<ExtArgs> | null
    /**
     * The data used to create many DailyNewWorks.
     */
    data: DailyNewWorkCreateManyInput | DailyNewWorkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyNewWork update
   */
  export type DailyNewWorkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyNewWork
     */
    select?: DailyNewWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyNewWork
     */
    omit?: DailyNewWorkOmit<ExtArgs> | null
    /**
     * The data needed to update a DailyNewWork.
     */
    data: XOR<DailyNewWorkUpdateInput, DailyNewWorkUncheckedUpdateInput>
    /**
     * Choose, which DailyNewWork to update.
     */
    where: DailyNewWorkWhereUniqueInput
  }

  /**
   * DailyNewWork updateMany
   */
  export type DailyNewWorkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyNewWorks.
     */
    data: XOR<DailyNewWorkUpdateManyMutationInput, DailyNewWorkUncheckedUpdateManyInput>
    /**
     * Filter which DailyNewWorks to update
     */
    where?: DailyNewWorkWhereInput
    /**
     * Limit how many DailyNewWorks to update.
     */
    limit?: number
  }

  /**
   * DailyNewWork updateManyAndReturn
   */
  export type DailyNewWorkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyNewWork
     */
    select?: DailyNewWorkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyNewWork
     */
    omit?: DailyNewWorkOmit<ExtArgs> | null
    /**
     * The data used to update DailyNewWorks.
     */
    data: XOR<DailyNewWorkUpdateManyMutationInput, DailyNewWorkUncheckedUpdateManyInput>
    /**
     * Filter which DailyNewWorks to update
     */
    where?: DailyNewWorkWhereInput
    /**
     * Limit how many DailyNewWorks to update.
     */
    limit?: number
  }

  /**
   * DailyNewWork upsert
   */
  export type DailyNewWorkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyNewWork
     */
    select?: DailyNewWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyNewWork
     */
    omit?: DailyNewWorkOmit<ExtArgs> | null
    /**
     * The filter to search for the DailyNewWork to update in case it exists.
     */
    where: DailyNewWorkWhereUniqueInput
    /**
     * In case the DailyNewWork found by the `where` argument doesn't exist, create a new DailyNewWork with this data.
     */
    create: XOR<DailyNewWorkCreateInput, DailyNewWorkUncheckedCreateInput>
    /**
     * In case the DailyNewWork was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyNewWorkUpdateInput, DailyNewWorkUncheckedUpdateInput>
  }

  /**
   * DailyNewWork delete
   */
  export type DailyNewWorkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyNewWork
     */
    select?: DailyNewWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyNewWork
     */
    omit?: DailyNewWorkOmit<ExtArgs> | null
    /**
     * Filter which DailyNewWork to delete.
     */
    where: DailyNewWorkWhereUniqueInput
  }

  /**
   * DailyNewWork deleteMany
   */
  export type DailyNewWorkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyNewWorks to delete
     */
    where?: DailyNewWorkWhereInput
    /**
     * Limit how many DailyNewWorks to delete.
     */
    limit?: number
  }

  /**
   * DailyNewWork without action
   */
  export type DailyNewWorkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyNewWork
     */
    select?: DailyNewWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyNewWork
     */
    omit?: DailyNewWorkOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    passwordHash: 'passwordHash',
    avatar: 'avatar',
    provider: 'provider',
    preferences: 'preferences',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BookmarkScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    workId: 'workId',
    createdAt: 'createdAt'
  };

  export type BookmarkScalarFieldEnum = (typeof BookmarkScalarFieldEnum)[keyof typeof BookmarkScalarFieldEnum]


  export const FavoriteTrendScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    trendId: 'trendId',
    trendDate: 'trendDate',
    trendTitle: 'trendTitle',
    savedAt: 'savedAt'
  };

  export type FavoriteTrendScalarFieldEnum = (typeof FavoriteTrendScalarFieldEnum)[keyof typeof FavoriteTrendScalarFieldEnum]


  export const FavoriteArticleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    articleId: 'articleId',
    articleTitle: 'articleTitle',
    articleSource: 'articleSource',
    articleDate: 'articleDate',
    excerpt: 'excerpt',
    savedAt: 'savedAt'
  };

  export type FavoriteArticleScalarFieldEnum = (typeof FavoriteArticleScalarFieldEnum)[keyof typeof FavoriteArticleScalarFieldEnum]


  export const DailyRecommendationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bookId: 'bookId',
    date: 'date',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type DailyRecommendationScalarFieldEnum = (typeof DailyRecommendationScalarFieldEnum)[keyof typeof DailyRecommendationScalarFieldEnum]


  export const WorkScalarFieldEnum: {
    id: 'id',
    title: 'title',
    titleEn: 'titleEn',
    author: 'author',
    country: 'country',
    flag: 'flag',
    continent: 'continent',
    era: 'era',
    genres: 'genres',
    themes: 'themes',
    excerpt: 'excerpt',
    gradient: 'gradient',
    year: 'year',
    featured: 'featured',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkScalarFieldEnum = (typeof WorkScalarFieldEnum)[keyof typeof WorkScalarFieldEnum]


  export const WorkDetailScalarFieldEnum: {
    id: 'id',
    workId: 'workId',
    characters: 'characters',
    plotSummary: 'plotSummary',
    plotNodes: 'plotNodes',
    themeAnalysis: 'themeAnalysis',
    techniques: 'techniques',
    excerpts: 'excerpts',
    insights: 'insights',
    sourceAttribution: 'sourceAttribution',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkDetailScalarFieldEnum = (typeof WorkDetailScalarFieldEnum)[keyof typeof WorkDetailScalarFieldEnum]


  export const WorkCharacterScalarFieldEnum: {
    id: 'id',
    workId: 'workId',
    name: 'name',
    role: 'role',
    description: 'description'
  };

  export type WorkCharacterScalarFieldEnum = (typeof WorkCharacterScalarFieldEnum)[keyof typeof WorkCharacterScalarFieldEnum]


  export const BgImageScalarFieldEnum: {
    id: 'id',
    workId: 'workId',
    url: 'url',
    status: 'status',
    source: 'source',
    photographer: 'photographer',
    photographerUrl: 'photographerUrl',
    searchQuery: 'searchQuery',
    fetchedAt: 'fetchedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BgImageScalarFieldEnum = (typeof BgImageScalarFieldEnum)[keyof typeof BgImageScalarFieldEnum]


  export const AwardScalarFieldEnum: {
    slug: 'slug',
    name: 'name',
    nameEn: 'nameEn',
    description: 'description',
    established: 'established',
    country: 'country',
    flag: 'flag',
    frequency: 'frequency',
    category: 'category',
    gradient: 'gradient',
    icon: 'icon',
    website: 'website',
    introduction: 'introduction',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AwardScalarFieldEnum = (typeof AwardScalarFieldEnum)[keyof typeof AwardScalarFieldEnum]


  export const AwardWinnerScalarFieldEnum: {
    id: 'id',
    workId: 'workId',
    awardSlug: 'awardSlug',
    year: 'year',
    category: 'category'
  };

  export type AwardWinnerScalarFieldEnum = (typeof AwardWinnerScalarFieldEnum)[keyof typeof AwardWinnerScalarFieldEnum]


  export const DailyTrendScalarFieldEnum: {
    id: 'id',
    date: 'date',
    title: 'title',
    background: 'background',
    perspectives: 'perspectives',
    insight: 'insight',
    sourceLinks: 'sourceLinks',
    sourceType: 'sourceType',
    generatedAt: 'generatedAt',
    totalPostsAnalyzed: 'totalPostsAnalyzed',
    createdAt: 'createdAt'
  };

  export type DailyTrendScalarFieldEnum = (typeof DailyTrendScalarFieldEnum)[keyof typeof DailyTrendScalarFieldEnum]


  export const DailyNewWorkScalarFieldEnum: {
    id: 'id',
    title: 'title',
    author: 'author',
    source: 'source',
    sourceUrl: 'sourceUrl',
    excerpt: 'excerpt',
    fullContent: 'fullContent',
    criticism: 'criticism',
    language: 'language',
    tags: 'tags',
    type: 'type',
    publishedAt: 'publishedAt',
    collectedAt: 'collectedAt',
    date: 'date',
    createdAt: 'createdAt'
  };

  export type DailyNewWorkScalarFieldEnum = (typeof DailyNewWorkScalarFieldEnum)[keyof typeof DailyNewWorkScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    provider?: StringFilter<"User"> | string
    preferences?: JsonNullableFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bookmarks?: BookmarkListRelationFilter
    favoriteTrends?: FavoriteTrendListRelationFilter
    favoriteArticles?: FavoriteArticleListRelationFilter
    dailyRecommendations?: DailyRecommendationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    avatar?: SortOrderInput | SortOrder
    provider?: SortOrder
    preferences?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookmarks?: BookmarkOrderByRelationAggregateInput
    favoriteTrends?: FavoriteTrendOrderByRelationAggregateInput
    favoriteArticles?: FavoriteArticleOrderByRelationAggregateInput
    dailyRecommendations?: DailyRecommendationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    provider?: StringFilter<"User"> | string
    preferences?: JsonNullableFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bookmarks?: BookmarkListRelationFilter
    favoriteTrends?: FavoriteTrendListRelationFilter
    favoriteArticles?: FavoriteArticleListRelationFilter
    dailyRecommendations?: DailyRecommendationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    avatar?: SortOrderInput | SortOrder
    provider?: SortOrder
    preferences?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    provider?: StringWithAggregatesFilter<"User"> | string
    preferences?: JsonNullableWithAggregatesFilter<"User">
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BookmarkWhereInput = {
    AND?: BookmarkWhereInput | BookmarkWhereInput[]
    OR?: BookmarkWhereInput[]
    NOT?: BookmarkWhereInput | BookmarkWhereInput[]
    id?: StringFilter<"Bookmark"> | string
    userId?: StringFilter<"Bookmark"> | string
    workId?: StringFilter<"Bookmark"> | string
    createdAt?: DateTimeFilter<"Bookmark"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BookmarkOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    workId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BookmarkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_workId?: BookmarkUserIdWorkIdCompoundUniqueInput
    AND?: BookmarkWhereInput | BookmarkWhereInput[]
    OR?: BookmarkWhereInput[]
    NOT?: BookmarkWhereInput | BookmarkWhereInput[]
    userId?: StringFilter<"Bookmark"> | string
    workId?: StringFilter<"Bookmark"> | string
    createdAt?: DateTimeFilter<"Bookmark"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_workId">

  export type BookmarkOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    workId?: SortOrder
    createdAt?: SortOrder
    _count?: BookmarkCountOrderByAggregateInput
    _max?: BookmarkMaxOrderByAggregateInput
    _min?: BookmarkMinOrderByAggregateInput
  }

  export type BookmarkScalarWhereWithAggregatesInput = {
    AND?: BookmarkScalarWhereWithAggregatesInput | BookmarkScalarWhereWithAggregatesInput[]
    OR?: BookmarkScalarWhereWithAggregatesInput[]
    NOT?: BookmarkScalarWhereWithAggregatesInput | BookmarkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bookmark"> | string
    userId?: StringWithAggregatesFilter<"Bookmark"> | string
    workId?: StringWithAggregatesFilter<"Bookmark"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Bookmark"> | Date | string
  }

  export type FavoriteTrendWhereInput = {
    AND?: FavoriteTrendWhereInput | FavoriteTrendWhereInput[]
    OR?: FavoriteTrendWhereInput[]
    NOT?: FavoriteTrendWhereInput | FavoriteTrendWhereInput[]
    id?: StringFilter<"FavoriteTrend"> | string
    userId?: StringFilter<"FavoriteTrend"> | string
    trendId?: StringFilter<"FavoriteTrend"> | string
    trendDate?: StringFilter<"FavoriteTrend"> | string
    trendTitle?: StringFilter<"FavoriteTrend"> | string
    savedAt?: DateTimeFilter<"FavoriteTrend"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FavoriteTrendOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    trendId?: SortOrder
    trendDate?: SortOrder
    trendTitle?: SortOrder
    savedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FavoriteTrendWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_trendId?: FavoriteTrendUserIdTrendIdCompoundUniqueInput
    AND?: FavoriteTrendWhereInput | FavoriteTrendWhereInput[]
    OR?: FavoriteTrendWhereInput[]
    NOT?: FavoriteTrendWhereInput | FavoriteTrendWhereInput[]
    userId?: StringFilter<"FavoriteTrend"> | string
    trendId?: StringFilter<"FavoriteTrend"> | string
    trendDate?: StringFilter<"FavoriteTrend"> | string
    trendTitle?: StringFilter<"FavoriteTrend"> | string
    savedAt?: DateTimeFilter<"FavoriteTrend"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_trendId">

  export type FavoriteTrendOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    trendId?: SortOrder
    trendDate?: SortOrder
    trendTitle?: SortOrder
    savedAt?: SortOrder
    _count?: FavoriteTrendCountOrderByAggregateInput
    _max?: FavoriteTrendMaxOrderByAggregateInput
    _min?: FavoriteTrendMinOrderByAggregateInput
  }

  export type FavoriteTrendScalarWhereWithAggregatesInput = {
    AND?: FavoriteTrendScalarWhereWithAggregatesInput | FavoriteTrendScalarWhereWithAggregatesInput[]
    OR?: FavoriteTrendScalarWhereWithAggregatesInput[]
    NOT?: FavoriteTrendScalarWhereWithAggregatesInput | FavoriteTrendScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FavoriteTrend"> | string
    userId?: StringWithAggregatesFilter<"FavoriteTrend"> | string
    trendId?: StringWithAggregatesFilter<"FavoriteTrend"> | string
    trendDate?: StringWithAggregatesFilter<"FavoriteTrend"> | string
    trendTitle?: StringWithAggregatesFilter<"FavoriteTrend"> | string
    savedAt?: DateTimeWithAggregatesFilter<"FavoriteTrend"> | Date | string
  }

  export type FavoriteArticleWhereInput = {
    AND?: FavoriteArticleWhereInput | FavoriteArticleWhereInput[]
    OR?: FavoriteArticleWhereInput[]
    NOT?: FavoriteArticleWhereInput | FavoriteArticleWhereInput[]
    id?: StringFilter<"FavoriteArticle"> | string
    userId?: StringFilter<"FavoriteArticle"> | string
    articleId?: StringFilter<"FavoriteArticle"> | string
    articleTitle?: StringFilter<"FavoriteArticle"> | string
    articleSource?: StringFilter<"FavoriteArticle"> | string
    articleDate?: StringFilter<"FavoriteArticle"> | string
    excerpt?: StringNullableFilter<"FavoriteArticle"> | string | null
    savedAt?: DateTimeFilter<"FavoriteArticle"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FavoriteArticleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    articleId?: SortOrder
    articleTitle?: SortOrder
    articleSource?: SortOrder
    articleDate?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    savedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FavoriteArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_articleId?: FavoriteArticleUserIdArticleIdCompoundUniqueInput
    AND?: FavoriteArticleWhereInput | FavoriteArticleWhereInput[]
    OR?: FavoriteArticleWhereInput[]
    NOT?: FavoriteArticleWhereInput | FavoriteArticleWhereInput[]
    userId?: StringFilter<"FavoriteArticle"> | string
    articleId?: StringFilter<"FavoriteArticle"> | string
    articleTitle?: StringFilter<"FavoriteArticle"> | string
    articleSource?: StringFilter<"FavoriteArticle"> | string
    articleDate?: StringFilter<"FavoriteArticle"> | string
    excerpt?: StringNullableFilter<"FavoriteArticle"> | string | null
    savedAt?: DateTimeFilter<"FavoriteArticle"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_articleId">

  export type FavoriteArticleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    articleId?: SortOrder
    articleTitle?: SortOrder
    articleSource?: SortOrder
    articleDate?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    savedAt?: SortOrder
    _count?: FavoriteArticleCountOrderByAggregateInput
    _max?: FavoriteArticleMaxOrderByAggregateInput
    _min?: FavoriteArticleMinOrderByAggregateInput
  }

  export type FavoriteArticleScalarWhereWithAggregatesInput = {
    AND?: FavoriteArticleScalarWhereWithAggregatesInput | FavoriteArticleScalarWhereWithAggregatesInput[]
    OR?: FavoriteArticleScalarWhereWithAggregatesInput[]
    NOT?: FavoriteArticleScalarWhereWithAggregatesInput | FavoriteArticleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FavoriteArticle"> | string
    userId?: StringWithAggregatesFilter<"FavoriteArticle"> | string
    articleId?: StringWithAggregatesFilter<"FavoriteArticle"> | string
    articleTitle?: StringWithAggregatesFilter<"FavoriteArticle"> | string
    articleSource?: StringWithAggregatesFilter<"FavoriteArticle"> | string
    articleDate?: StringWithAggregatesFilter<"FavoriteArticle"> | string
    excerpt?: StringNullableWithAggregatesFilter<"FavoriteArticle"> | string | null
    savedAt?: DateTimeWithAggregatesFilter<"FavoriteArticle"> | Date | string
  }

  export type DailyRecommendationWhereInput = {
    AND?: DailyRecommendationWhereInput | DailyRecommendationWhereInput[]
    OR?: DailyRecommendationWhereInput[]
    NOT?: DailyRecommendationWhereInput | DailyRecommendationWhereInput[]
    id?: StringFilter<"DailyRecommendation"> | string
    userId?: StringFilter<"DailyRecommendation"> | string
    bookId?: StringFilter<"DailyRecommendation"> | string
    date?: StringFilter<"DailyRecommendation"> | string
    reason?: StringFilter<"DailyRecommendation"> | string
    createdAt?: DateTimeFilter<"DailyRecommendation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DailyRecommendationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    date?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DailyRecommendationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_date?: DailyRecommendationUserIdDateCompoundUniqueInput
    AND?: DailyRecommendationWhereInput | DailyRecommendationWhereInput[]
    OR?: DailyRecommendationWhereInput[]
    NOT?: DailyRecommendationWhereInput | DailyRecommendationWhereInput[]
    userId?: StringFilter<"DailyRecommendation"> | string
    bookId?: StringFilter<"DailyRecommendation"> | string
    date?: StringFilter<"DailyRecommendation"> | string
    reason?: StringFilter<"DailyRecommendation"> | string
    createdAt?: DateTimeFilter<"DailyRecommendation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_date">

  export type DailyRecommendationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    date?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    _count?: DailyRecommendationCountOrderByAggregateInput
    _max?: DailyRecommendationMaxOrderByAggregateInput
    _min?: DailyRecommendationMinOrderByAggregateInput
  }

  export type DailyRecommendationScalarWhereWithAggregatesInput = {
    AND?: DailyRecommendationScalarWhereWithAggregatesInput | DailyRecommendationScalarWhereWithAggregatesInput[]
    OR?: DailyRecommendationScalarWhereWithAggregatesInput[]
    NOT?: DailyRecommendationScalarWhereWithAggregatesInput | DailyRecommendationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyRecommendation"> | string
    userId?: StringWithAggregatesFilter<"DailyRecommendation"> | string
    bookId?: StringWithAggregatesFilter<"DailyRecommendation"> | string
    date?: StringWithAggregatesFilter<"DailyRecommendation"> | string
    reason?: StringWithAggregatesFilter<"DailyRecommendation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DailyRecommendation"> | Date | string
  }

  export type WorkWhereInput = {
    AND?: WorkWhereInput | WorkWhereInput[]
    OR?: WorkWhereInput[]
    NOT?: WorkWhereInput | WorkWhereInput[]
    id?: StringFilter<"Work"> | string
    title?: StringFilter<"Work"> | string
    titleEn?: StringFilter<"Work"> | string
    author?: StringFilter<"Work"> | string
    country?: StringFilter<"Work"> | string
    flag?: StringFilter<"Work"> | string
    continent?: StringFilter<"Work"> | string
    era?: StringFilter<"Work"> | string
    genres?: JsonFilter<"Work">
    themes?: JsonFilter<"Work">
    excerpt?: StringFilter<"Work"> | string
    gradient?: StringFilter<"Work"> | string
    year?: IntNullableFilter<"Work"> | number | null
    featured?: BoolFilter<"Work"> | boolean
    createdAt?: DateTimeFilter<"Work"> | Date | string
    updatedAt?: DateTimeFilter<"Work"> | Date | string
    detail?: XOR<WorkDetailNullableScalarRelationFilter, WorkDetailWhereInput> | null
    characters?: WorkCharacterListRelationFilter
    bgImage?: XOR<BgImageNullableScalarRelationFilter, BgImageWhereInput> | null
    awardWinners?: AwardWinnerListRelationFilter
  }

  export type WorkOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    titleEn?: SortOrder
    author?: SortOrder
    country?: SortOrder
    flag?: SortOrder
    continent?: SortOrder
    era?: SortOrder
    genres?: SortOrder
    themes?: SortOrder
    excerpt?: SortOrder
    gradient?: SortOrder
    year?: SortOrderInput | SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    detail?: WorkDetailOrderByWithRelationInput
    characters?: WorkCharacterOrderByRelationAggregateInput
    bgImage?: BgImageOrderByWithRelationInput
    awardWinners?: AwardWinnerOrderByRelationAggregateInput
  }

  export type WorkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkWhereInput | WorkWhereInput[]
    OR?: WorkWhereInput[]
    NOT?: WorkWhereInput | WorkWhereInput[]
    title?: StringFilter<"Work"> | string
    titleEn?: StringFilter<"Work"> | string
    author?: StringFilter<"Work"> | string
    country?: StringFilter<"Work"> | string
    flag?: StringFilter<"Work"> | string
    continent?: StringFilter<"Work"> | string
    era?: StringFilter<"Work"> | string
    genres?: JsonFilter<"Work">
    themes?: JsonFilter<"Work">
    excerpt?: StringFilter<"Work"> | string
    gradient?: StringFilter<"Work"> | string
    year?: IntNullableFilter<"Work"> | number | null
    featured?: BoolFilter<"Work"> | boolean
    createdAt?: DateTimeFilter<"Work"> | Date | string
    updatedAt?: DateTimeFilter<"Work"> | Date | string
    detail?: XOR<WorkDetailNullableScalarRelationFilter, WorkDetailWhereInput> | null
    characters?: WorkCharacterListRelationFilter
    bgImage?: XOR<BgImageNullableScalarRelationFilter, BgImageWhereInput> | null
    awardWinners?: AwardWinnerListRelationFilter
  }, "id">

  export type WorkOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    titleEn?: SortOrder
    author?: SortOrder
    country?: SortOrder
    flag?: SortOrder
    continent?: SortOrder
    era?: SortOrder
    genres?: SortOrder
    themes?: SortOrder
    excerpt?: SortOrder
    gradient?: SortOrder
    year?: SortOrderInput | SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkCountOrderByAggregateInput
    _avg?: WorkAvgOrderByAggregateInput
    _max?: WorkMaxOrderByAggregateInput
    _min?: WorkMinOrderByAggregateInput
    _sum?: WorkSumOrderByAggregateInput
  }

  export type WorkScalarWhereWithAggregatesInput = {
    AND?: WorkScalarWhereWithAggregatesInput | WorkScalarWhereWithAggregatesInput[]
    OR?: WorkScalarWhereWithAggregatesInput[]
    NOT?: WorkScalarWhereWithAggregatesInput | WorkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Work"> | string
    title?: StringWithAggregatesFilter<"Work"> | string
    titleEn?: StringWithAggregatesFilter<"Work"> | string
    author?: StringWithAggregatesFilter<"Work"> | string
    country?: StringWithAggregatesFilter<"Work"> | string
    flag?: StringWithAggregatesFilter<"Work"> | string
    continent?: StringWithAggregatesFilter<"Work"> | string
    era?: StringWithAggregatesFilter<"Work"> | string
    genres?: JsonWithAggregatesFilter<"Work">
    themes?: JsonWithAggregatesFilter<"Work">
    excerpt?: StringWithAggregatesFilter<"Work"> | string
    gradient?: StringWithAggregatesFilter<"Work"> | string
    year?: IntNullableWithAggregatesFilter<"Work"> | number | null
    featured?: BoolWithAggregatesFilter<"Work"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Work"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Work"> | Date | string
  }

  export type WorkDetailWhereInput = {
    AND?: WorkDetailWhereInput | WorkDetailWhereInput[]
    OR?: WorkDetailWhereInput[]
    NOT?: WorkDetailWhereInput | WorkDetailWhereInput[]
    id?: StringFilter<"WorkDetail"> | string
    workId?: StringFilter<"WorkDetail"> | string
    characters?: JsonFilter<"WorkDetail">
    plotSummary?: StringFilter<"WorkDetail"> | string
    plotNodes?: JsonFilter<"WorkDetail">
    themeAnalysis?: StringFilter<"WorkDetail"> | string
    techniques?: StringFilter<"WorkDetail"> | string
    excerpts?: JsonFilter<"WorkDetail">
    insights?: StringFilter<"WorkDetail"> | string
    sourceAttribution?: JsonNullableFilter<"WorkDetail">
    createdAt?: DateTimeFilter<"WorkDetail"> | Date | string
    updatedAt?: DateTimeFilter<"WorkDetail"> | Date | string
    work?: XOR<WorkScalarRelationFilter, WorkWhereInput>
  }

  export type WorkDetailOrderByWithRelationInput = {
    id?: SortOrder
    workId?: SortOrder
    characters?: SortOrder
    plotSummary?: SortOrder
    plotNodes?: SortOrder
    themeAnalysis?: SortOrder
    techniques?: SortOrder
    excerpts?: SortOrder
    insights?: SortOrder
    sourceAttribution?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    work?: WorkOrderByWithRelationInput
  }

  export type WorkDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    workId?: string
    AND?: WorkDetailWhereInput | WorkDetailWhereInput[]
    OR?: WorkDetailWhereInput[]
    NOT?: WorkDetailWhereInput | WorkDetailWhereInput[]
    characters?: JsonFilter<"WorkDetail">
    plotSummary?: StringFilter<"WorkDetail"> | string
    plotNodes?: JsonFilter<"WorkDetail">
    themeAnalysis?: StringFilter<"WorkDetail"> | string
    techniques?: StringFilter<"WorkDetail"> | string
    excerpts?: JsonFilter<"WorkDetail">
    insights?: StringFilter<"WorkDetail"> | string
    sourceAttribution?: JsonNullableFilter<"WorkDetail">
    createdAt?: DateTimeFilter<"WorkDetail"> | Date | string
    updatedAt?: DateTimeFilter<"WorkDetail"> | Date | string
    work?: XOR<WorkScalarRelationFilter, WorkWhereInput>
  }, "id" | "workId">

  export type WorkDetailOrderByWithAggregationInput = {
    id?: SortOrder
    workId?: SortOrder
    characters?: SortOrder
    plotSummary?: SortOrder
    plotNodes?: SortOrder
    themeAnalysis?: SortOrder
    techniques?: SortOrder
    excerpts?: SortOrder
    insights?: SortOrder
    sourceAttribution?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkDetailCountOrderByAggregateInput
    _max?: WorkDetailMaxOrderByAggregateInput
    _min?: WorkDetailMinOrderByAggregateInput
  }

  export type WorkDetailScalarWhereWithAggregatesInput = {
    AND?: WorkDetailScalarWhereWithAggregatesInput | WorkDetailScalarWhereWithAggregatesInput[]
    OR?: WorkDetailScalarWhereWithAggregatesInput[]
    NOT?: WorkDetailScalarWhereWithAggregatesInput | WorkDetailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkDetail"> | string
    workId?: StringWithAggregatesFilter<"WorkDetail"> | string
    characters?: JsonWithAggregatesFilter<"WorkDetail">
    plotSummary?: StringWithAggregatesFilter<"WorkDetail"> | string
    plotNodes?: JsonWithAggregatesFilter<"WorkDetail">
    themeAnalysis?: StringWithAggregatesFilter<"WorkDetail"> | string
    techniques?: StringWithAggregatesFilter<"WorkDetail"> | string
    excerpts?: JsonWithAggregatesFilter<"WorkDetail">
    insights?: StringWithAggregatesFilter<"WorkDetail"> | string
    sourceAttribution?: JsonNullableWithAggregatesFilter<"WorkDetail">
    createdAt?: DateTimeWithAggregatesFilter<"WorkDetail"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkDetail"> | Date | string
  }

  export type WorkCharacterWhereInput = {
    AND?: WorkCharacterWhereInput | WorkCharacterWhereInput[]
    OR?: WorkCharacterWhereInput[]
    NOT?: WorkCharacterWhereInput | WorkCharacterWhereInput[]
    id?: StringFilter<"WorkCharacter"> | string
    workId?: StringFilter<"WorkCharacter"> | string
    name?: StringFilter<"WorkCharacter"> | string
    role?: StringFilter<"WorkCharacter"> | string
    description?: StringFilter<"WorkCharacter"> | string
    work?: XOR<WorkScalarRelationFilter, WorkWhereInput>
  }

  export type WorkCharacterOrderByWithRelationInput = {
    id?: SortOrder
    workId?: SortOrder
    name?: SortOrder
    role?: SortOrder
    description?: SortOrder
    work?: WorkOrderByWithRelationInput
  }

  export type WorkCharacterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkCharacterWhereInput | WorkCharacterWhereInput[]
    OR?: WorkCharacterWhereInput[]
    NOT?: WorkCharacterWhereInput | WorkCharacterWhereInput[]
    workId?: StringFilter<"WorkCharacter"> | string
    name?: StringFilter<"WorkCharacter"> | string
    role?: StringFilter<"WorkCharacter"> | string
    description?: StringFilter<"WorkCharacter"> | string
    work?: XOR<WorkScalarRelationFilter, WorkWhereInput>
  }, "id">

  export type WorkCharacterOrderByWithAggregationInput = {
    id?: SortOrder
    workId?: SortOrder
    name?: SortOrder
    role?: SortOrder
    description?: SortOrder
    _count?: WorkCharacterCountOrderByAggregateInput
    _max?: WorkCharacterMaxOrderByAggregateInput
    _min?: WorkCharacterMinOrderByAggregateInput
  }

  export type WorkCharacterScalarWhereWithAggregatesInput = {
    AND?: WorkCharacterScalarWhereWithAggregatesInput | WorkCharacterScalarWhereWithAggregatesInput[]
    OR?: WorkCharacterScalarWhereWithAggregatesInput[]
    NOT?: WorkCharacterScalarWhereWithAggregatesInput | WorkCharacterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkCharacter"> | string
    workId?: StringWithAggregatesFilter<"WorkCharacter"> | string
    name?: StringWithAggregatesFilter<"WorkCharacter"> | string
    role?: StringWithAggregatesFilter<"WorkCharacter"> | string
    description?: StringWithAggregatesFilter<"WorkCharacter"> | string
  }

  export type BgImageWhereInput = {
    AND?: BgImageWhereInput | BgImageWhereInput[]
    OR?: BgImageWhereInput[]
    NOT?: BgImageWhereInput | BgImageWhereInput[]
    id?: StringFilter<"BgImage"> | string
    workId?: StringFilter<"BgImage"> | string
    url?: StringFilter<"BgImage"> | string
    status?: StringFilter<"BgImage"> | string
    source?: StringFilter<"BgImage"> | string
    photographer?: StringFilter<"BgImage"> | string
    photographerUrl?: StringFilter<"BgImage"> | string
    searchQuery?: StringFilter<"BgImage"> | string
    fetchedAt?: DateTimeNullableFilter<"BgImage"> | Date | string | null
    createdAt?: DateTimeFilter<"BgImage"> | Date | string
    updatedAt?: DateTimeFilter<"BgImage"> | Date | string
    work?: XOR<WorkScalarRelationFilter, WorkWhereInput>
  }

  export type BgImageOrderByWithRelationInput = {
    id?: SortOrder
    workId?: SortOrder
    url?: SortOrder
    status?: SortOrder
    source?: SortOrder
    photographer?: SortOrder
    photographerUrl?: SortOrder
    searchQuery?: SortOrder
    fetchedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    work?: WorkOrderByWithRelationInput
  }

  export type BgImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    workId?: string
    AND?: BgImageWhereInput | BgImageWhereInput[]
    OR?: BgImageWhereInput[]
    NOT?: BgImageWhereInput | BgImageWhereInput[]
    url?: StringFilter<"BgImage"> | string
    status?: StringFilter<"BgImage"> | string
    source?: StringFilter<"BgImage"> | string
    photographer?: StringFilter<"BgImage"> | string
    photographerUrl?: StringFilter<"BgImage"> | string
    searchQuery?: StringFilter<"BgImage"> | string
    fetchedAt?: DateTimeNullableFilter<"BgImage"> | Date | string | null
    createdAt?: DateTimeFilter<"BgImage"> | Date | string
    updatedAt?: DateTimeFilter<"BgImage"> | Date | string
    work?: XOR<WorkScalarRelationFilter, WorkWhereInput>
  }, "id" | "workId">

  export type BgImageOrderByWithAggregationInput = {
    id?: SortOrder
    workId?: SortOrder
    url?: SortOrder
    status?: SortOrder
    source?: SortOrder
    photographer?: SortOrder
    photographerUrl?: SortOrder
    searchQuery?: SortOrder
    fetchedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BgImageCountOrderByAggregateInput
    _max?: BgImageMaxOrderByAggregateInput
    _min?: BgImageMinOrderByAggregateInput
  }

  export type BgImageScalarWhereWithAggregatesInput = {
    AND?: BgImageScalarWhereWithAggregatesInput | BgImageScalarWhereWithAggregatesInput[]
    OR?: BgImageScalarWhereWithAggregatesInput[]
    NOT?: BgImageScalarWhereWithAggregatesInput | BgImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BgImage"> | string
    workId?: StringWithAggregatesFilter<"BgImage"> | string
    url?: StringWithAggregatesFilter<"BgImage"> | string
    status?: StringWithAggregatesFilter<"BgImage"> | string
    source?: StringWithAggregatesFilter<"BgImage"> | string
    photographer?: StringWithAggregatesFilter<"BgImage"> | string
    photographerUrl?: StringWithAggregatesFilter<"BgImage"> | string
    searchQuery?: StringWithAggregatesFilter<"BgImage"> | string
    fetchedAt?: DateTimeNullableWithAggregatesFilter<"BgImage"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BgImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BgImage"> | Date | string
  }

  export type AwardWhereInput = {
    AND?: AwardWhereInput | AwardWhereInput[]
    OR?: AwardWhereInput[]
    NOT?: AwardWhereInput | AwardWhereInput[]
    slug?: StringFilter<"Award"> | string
    name?: StringFilter<"Award"> | string
    nameEn?: StringFilter<"Award"> | string
    description?: StringFilter<"Award"> | string
    established?: IntFilter<"Award"> | number
    country?: StringFilter<"Award"> | string
    flag?: StringFilter<"Award"> | string
    frequency?: StringFilter<"Award"> | string
    category?: StringFilter<"Award"> | string
    gradient?: StringFilter<"Award"> | string
    icon?: StringFilter<"Award"> | string
    website?: StringNullableFilter<"Award"> | string | null
    introduction?: StringFilter<"Award"> | string
    createdAt?: DateTimeFilter<"Award"> | Date | string
    updatedAt?: DateTimeFilter<"Award"> | Date | string
    winners?: AwardWinnerListRelationFilter
  }

  export type AwardOrderByWithRelationInput = {
    slug?: SortOrder
    name?: SortOrder
    nameEn?: SortOrder
    description?: SortOrder
    established?: SortOrder
    country?: SortOrder
    flag?: SortOrder
    frequency?: SortOrder
    category?: SortOrder
    gradient?: SortOrder
    icon?: SortOrder
    website?: SortOrderInput | SortOrder
    introduction?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    winners?: AwardWinnerOrderByRelationAggregateInput
  }

  export type AwardWhereUniqueInput = Prisma.AtLeast<{
    slug?: string
    AND?: AwardWhereInput | AwardWhereInput[]
    OR?: AwardWhereInput[]
    NOT?: AwardWhereInput | AwardWhereInput[]
    name?: StringFilter<"Award"> | string
    nameEn?: StringFilter<"Award"> | string
    description?: StringFilter<"Award"> | string
    established?: IntFilter<"Award"> | number
    country?: StringFilter<"Award"> | string
    flag?: StringFilter<"Award"> | string
    frequency?: StringFilter<"Award"> | string
    category?: StringFilter<"Award"> | string
    gradient?: StringFilter<"Award"> | string
    icon?: StringFilter<"Award"> | string
    website?: StringNullableFilter<"Award"> | string | null
    introduction?: StringFilter<"Award"> | string
    createdAt?: DateTimeFilter<"Award"> | Date | string
    updatedAt?: DateTimeFilter<"Award"> | Date | string
    winners?: AwardWinnerListRelationFilter
  }, "slug">

  export type AwardOrderByWithAggregationInput = {
    slug?: SortOrder
    name?: SortOrder
    nameEn?: SortOrder
    description?: SortOrder
    established?: SortOrder
    country?: SortOrder
    flag?: SortOrder
    frequency?: SortOrder
    category?: SortOrder
    gradient?: SortOrder
    icon?: SortOrder
    website?: SortOrderInput | SortOrder
    introduction?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AwardCountOrderByAggregateInput
    _avg?: AwardAvgOrderByAggregateInput
    _max?: AwardMaxOrderByAggregateInput
    _min?: AwardMinOrderByAggregateInput
    _sum?: AwardSumOrderByAggregateInput
  }

  export type AwardScalarWhereWithAggregatesInput = {
    AND?: AwardScalarWhereWithAggregatesInput | AwardScalarWhereWithAggregatesInput[]
    OR?: AwardScalarWhereWithAggregatesInput[]
    NOT?: AwardScalarWhereWithAggregatesInput | AwardScalarWhereWithAggregatesInput[]
    slug?: StringWithAggregatesFilter<"Award"> | string
    name?: StringWithAggregatesFilter<"Award"> | string
    nameEn?: StringWithAggregatesFilter<"Award"> | string
    description?: StringWithAggregatesFilter<"Award"> | string
    established?: IntWithAggregatesFilter<"Award"> | number
    country?: StringWithAggregatesFilter<"Award"> | string
    flag?: StringWithAggregatesFilter<"Award"> | string
    frequency?: StringWithAggregatesFilter<"Award"> | string
    category?: StringWithAggregatesFilter<"Award"> | string
    gradient?: StringWithAggregatesFilter<"Award"> | string
    icon?: StringWithAggregatesFilter<"Award"> | string
    website?: StringNullableWithAggregatesFilter<"Award"> | string | null
    introduction?: StringWithAggregatesFilter<"Award"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Award"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Award"> | Date | string
  }

  export type AwardWinnerWhereInput = {
    AND?: AwardWinnerWhereInput | AwardWinnerWhereInput[]
    OR?: AwardWinnerWhereInput[]
    NOT?: AwardWinnerWhereInput | AwardWinnerWhereInput[]
    id?: StringFilter<"AwardWinner"> | string
    workId?: StringFilter<"AwardWinner"> | string
    awardSlug?: StringFilter<"AwardWinner"> | string
    year?: IntFilter<"AwardWinner"> | number
    category?: StringNullableFilter<"AwardWinner"> | string | null
    work?: XOR<WorkScalarRelationFilter, WorkWhereInput>
    award?: XOR<AwardScalarRelationFilter, AwardWhereInput>
  }

  export type AwardWinnerOrderByWithRelationInput = {
    id?: SortOrder
    workId?: SortOrder
    awardSlug?: SortOrder
    year?: SortOrder
    category?: SortOrderInput | SortOrder
    work?: WorkOrderByWithRelationInput
    award?: AwardOrderByWithRelationInput
  }

  export type AwardWinnerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    workId_awardSlug_year?: AwardWinnerWorkIdAwardSlugYearCompoundUniqueInput
    AND?: AwardWinnerWhereInput | AwardWinnerWhereInput[]
    OR?: AwardWinnerWhereInput[]
    NOT?: AwardWinnerWhereInput | AwardWinnerWhereInput[]
    workId?: StringFilter<"AwardWinner"> | string
    awardSlug?: StringFilter<"AwardWinner"> | string
    year?: IntFilter<"AwardWinner"> | number
    category?: StringNullableFilter<"AwardWinner"> | string | null
    work?: XOR<WorkScalarRelationFilter, WorkWhereInput>
    award?: XOR<AwardScalarRelationFilter, AwardWhereInput>
  }, "id" | "workId_awardSlug_year">

  export type AwardWinnerOrderByWithAggregationInput = {
    id?: SortOrder
    workId?: SortOrder
    awardSlug?: SortOrder
    year?: SortOrder
    category?: SortOrderInput | SortOrder
    _count?: AwardWinnerCountOrderByAggregateInput
    _avg?: AwardWinnerAvgOrderByAggregateInput
    _max?: AwardWinnerMaxOrderByAggregateInput
    _min?: AwardWinnerMinOrderByAggregateInput
    _sum?: AwardWinnerSumOrderByAggregateInput
  }

  export type AwardWinnerScalarWhereWithAggregatesInput = {
    AND?: AwardWinnerScalarWhereWithAggregatesInput | AwardWinnerScalarWhereWithAggregatesInput[]
    OR?: AwardWinnerScalarWhereWithAggregatesInput[]
    NOT?: AwardWinnerScalarWhereWithAggregatesInput | AwardWinnerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AwardWinner"> | string
    workId?: StringWithAggregatesFilter<"AwardWinner"> | string
    awardSlug?: StringWithAggregatesFilter<"AwardWinner"> | string
    year?: IntWithAggregatesFilter<"AwardWinner"> | number
    category?: StringNullableWithAggregatesFilter<"AwardWinner"> | string | null
  }

  export type DailyTrendWhereInput = {
    AND?: DailyTrendWhereInput | DailyTrendWhereInput[]
    OR?: DailyTrendWhereInput[]
    NOT?: DailyTrendWhereInput | DailyTrendWhereInput[]
    id?: StringFilter<"DailyTrend"> | string
    date?: StringFilter<"DailyTrend"> | string
    title?: StringFilter<"DailyTrend"> | string
    background?: StringFilter<"DailyTrend"> | string
    perspectives?: StringFilter<"DailyTrend"> | string
    insight?: StringFilter<"DailyTrend"> | string
    sourceLinks?: JsonFilter<"DailyTrend">
    sourceType?: StringNullableFilter<"DailyTrend"> | string | null
    generatedAt?: DateTimeFilter<"DailyTrend"> | Date | string
    totalPostsAnalyzed?: IntFilter<"DailyTrend"> | number
    createdAt?: DateTimeFilter<"DailyTrend"> | Date | string
  }

  export type DailyTrendOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    title?: SortOrder
    background?: SortOrder
    perspectives?: SortOrder
    insight?: SortOrder
    sourceLinks?: SortOrder
    sourceType?: SortOrderInput | SortOrder
    generatedAt?: SortOrder
    totalPostsAnalyzed?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyTrendWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DailyTrendWhereInput | DailyTrendWhereInput[]
    OR?: DailyTrendWhereInput[]
    NOT?: DailyTrendWhereInput | DailyTrendWhereInput[]
    date?: StringFilter<"DailyTrend"> | string
    title?: StringFilter<"DailyTrend"> | string
    background?: StringFilter<"DailyTrend"> | string
    perspectives?: StringFilter<"DailyTrend"> | string
    insight?: StringFilter<"DailyTrend"> | string
    sourceLinks?: JsonFilter<"DailyTrend">
    sourceType?: StringNullableFilter<"DailyTrend"> | string | null
    generatedAt?: DateTimeFilter<"DailyTrend"> | Date | string
    totalPostsAnalyzed?: IntFilter<"DailyTrend"> | number
    createdAt?: DateTimeFilter<"DailyTrend"> | Date | string
  }, "id">

  export type DailyTrendOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    title?: SortOrder
    background?: SortOrder
    perspectives?: SortOrder
    insight?: SortOrder
    sourceLinks?: SortOrder
    sourceType?: SortOrderInput | SortOrder
    generatedAt?: SortOrder
    totalPostsAnalyzed?: SortOrder
    createdAt?: SortOrder
    _count?: DailyTrendCountOrderByAggregateInput
    _avg?: DailyTrendAvgOrderByAggregateInput
    _max?: DailyTrendMaxOrderByAggregateInput
    _min?: DailyTrendMinOrderByAggregateInput
    _sum?: DailyTrendSumOrderByAggregateInput
  }

  export type DailyTrendScalarWhereWithAggregatesInput = {
    AND?: DailyTrendScalarWhereWithAggregatesInput | DailyTrendScalarWhereWithAggregatesInput[]
    OR?: DailyTrendScalarWhereWithAggregatesInput[]
    NOT?: DailyTrendScalarWhereWithAggregatesInput | DailyTrendScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyTrend"> | string
    date?: StringWithAggregatesFilter<"DailyTrend"> | string
    title?: StringWithAggregatesFilter<"DailyTrend"> | string
    background?: StringWithAggregatesFilter<"DailyTrend"> | string
    perspectives?: StringWithAggregatesFilter<"DailyTrend"> | string
    insight?: StringWithAggregatesFilter<"DailyTrend"> | string
    sourceLinks?: JsonWithAggregatesFilter<"DailyTrend">
    sourceType?: StringNullableWithAggregatesFilter<"DailyTrend"> | string | null
    generatedAt?: DateTimeWithAggregatesFilter<"DailyTrend"> | Date | string
    totalPostsAnalyzed?: IntWithAggregatesFilter<"DailyTrend"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DailyTrend"> | Date | string
  }

  export type DailyNewWorkWhereInput = {
    AND?: DailyNewWorkWhereInput | DailyNewWorkWhereInput[]
    OR?: DailyNewWorkWhereInput[]
    NOT?: DailyNewWorkWhereInput | DailyNewWorkWhereInput[]
    id?: StringFilter<"DailyNewWork"> | string
    title?: StringFilter<"DailyNewWork"> | string
    author?: StringFilter<"DailyNewWork"> | string
    source?: StringFilter<"DailyNewWork"> | string
    sourceUrl?: StringFilter<"DailyNewWork"> | string
    excerpt?: StringFilter<"DailyNewWork"> | string
    fullContent?: StringNullableFilter<"DailyNewWork"> | string | null
    criticism?: StringNullableFilter<"DailyNewWork"> | string | null
    language?: StringFilter<"DailyNewWork"> | string
    tags?: JsonFilter<"DailyNewWork">
    type?: StringFilter<"DailyNewWork"> | string
    publishedAt?: DateTimeFilter<"DailyNewWork"> | Date | string
    collectedAt?: DateTimeFilter<"DailyNewWork"> | Date | string
    date?: StringFilter<"DailyNewWork"> | string
    createdAt?: DateTimeFilter<"DailyNewWork"> | Date | string
  }

  export type DailyNewWorkOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    source?: SortOrder
    sourceUrl?: SortOrder
    excerpt?: SortOrder
    fullContent?: SortOrderInput | SortOrder
    criticism?: SortOrderInput | SortOrder
    language?: SortOrder
    tags?: SortOrder
    type?: SortOrder
    publishedAt?: SortOrder
    collectedAt?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyNewWorkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DailyNewWorkWhereInput | DailyNewWorkWhereInput[]
    OR?: DailyNewWorkWhereInput[]
    NOT?: DailyNewWorkWhereInput | DailyNewWorkWhereInput[]
    title?: StringFilter<"DailyNewWork"> | string
    author?: StringFilter<"DailyNewWork"> | string
    source?: StringFilter<"DailyNewWork"> | string
    sourceUrl?: StringFilter<"DailyNewWork"> | string
    excerpt?: StringFilter<"DailyNewWork"> | string
    fullContent?: StringNullableFilter<"DailyNewWork"> | string | null
    criticism?: StringNullableFilter<"DailyNewWork"> | string | null
    language?: StringFilter<"DailyNewWork"> | string
    tags?: JsonFilter<"DailyNewWork">
    type?: StringFilter<"DailyNewWork"> | string
    publishedAt?: DateTimeFilter<"DailyNewWork"> | Date | string
    collectedAt?: DateTimeFilter<"DailyNewWork"> | Date | string
    date?: StringFilter<"DailyNewWork"> | string
    createdAt?: DateTimeFilter<"DailyNewWork"> | Date | string
  }, "id">

  export type DailyNewWorkOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    source?: SortOrder
    sourceUrl?: SortOrder
    excerpt?: SortOrder
    fullContent?: SortOrderInput | SortOrder
    criticism?: SortOrderInput | SortOrder
    language?: SortOrder
    tags?: SortOrder
    type?: SortOrder
    publishedAt?: SortOrder
    collectedAt?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    _count?: DailyNewWorkCountOrderByAggregateInput
    _max?: DailyNewWorkMaxOrderByAggregateInput
    _min?: DailyNewWorkMinOrderByAggregateInput
  }

  export type DailyNewWorkScalarWhereWithAggregatesInput = {
    AND?: DailyNewWorkScalarWhereWithAggregatesInput | DailyNewWorkScalarWhereWithAggregatesInput[]
    OR?: DailyNewWorkScalarWhereWithAggregatesInput[]
    NOT?: DailyNewWorkScalarWhereWithAggregatesInput | DailyNewWorkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyNewWork"> | string
    title?: StringWithAggregatesFilter<"DailyNewWork"> | string
    author?: StringWithAggregatesFilter<"DailyNewWork"> | string
    source?: StringWithAggregatesFilter<"DailyNewWork"> | string
    sourceUrl?: StringWithAggregatesFilter<"DailyNewWork"> | string
    excerpt?: StringWithAggregatesFilter<"DailyNewWork"> | string
    fullContent?: StringNullableWithAggregatesFilter<"DailyNewWork"> | string | null
    criticism?: StringNullableWithAggregatesFilter<"DailyNewWork"> | string | null
    language?: StringWithAggregatesFilter<"DailyNewWork"> | string
    tags?: JsonWithAggregatesFilter<"DailyNewWork">
    type?: StringWithAggregatesFilter<"DailyNewWork"> | string
    publishedAt?: DateTimeWithAggregatesFilter<"DailyNewWork"> | Date | string
    collectedAt?: DateTimeWithAggregatesFilter<"DailyNewWork"> | Date | string
    date?: StringWithAggregatesFilter<"DailyNewWork"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DailyNewWork"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    passwordHash?: string
    avatar?: string | null
    provider?: string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput
    favoriteTrends?: FavoriteTrendCreateNestedManyWithoutUserInput
    favoriteArticles?: FavoriteArticleCreateNestedManyWithoutUserInput
    dailyRecommendations?: DailyRecommendationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    passwordHash?: string
    avatar?: string | null
    provider?: string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    favoriteTrends?: FavoriteTrendUncheckedCreateNestedManyWithoutUserInput
    favoriteArticles?: FavoriteArticleUncheckedCreateNestedManyWithoutUserInput
    dailyRecommendations?: DailyRecommendationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput
    favoriteTrends?: FavoriteTrendUpdateManyWithoutUserNestedInput
    favoriteArticles?: FavoriteArticleUpdateManyWithoutUserNestedInput
    dailyRecommendations?: DailyRecommendationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    favoriteTrends?: FavoriteTrendUncheckedUpdateManyWithoutUserNestedInput
    favoriteArticles?: FavoriteArticleUncheckedUpdateManyWithoutUserNestedInput
    dailyRecommendations?: DailyRecommendationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    passwordHash?: string
    avatar?: string | null
    provider?: string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkCreateInput = {
    id?: string
    workId: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBookmarksInput
  }

  export type BookmarkUncheckedCreateInput = {
    id?: string
    userId: string
    workId: string
    createdAt?: Date | string
  }

  export type BookmarkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookmarksNestedInput
  }

  export type BookmarkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkCreateManyInput = {
    id?: string
    userId: string
    workId: string
    createdAt?: Date | string
  }

  export type BookmarkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    workId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteTrendCreateInput = {
    id?: string
    trendId: string
    trendDate: string
    trendTitle: string
    savedAt?: Date | string
    user: UserCreateNestedOneWithoutFavoriteTrendsInput
  }

  export type FavoriteTrendUncheckedCreateInput = {
    id?: string
    userId: string
    trendId: string
    trendDate: string
    trendTitle: string
    savedAt?: Date | string
  }

  export type FavoriteTrendUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trendId?: StringFieldUpdateOperationsInput | string
    trendDate?: StringFieldUpdateOperationsInput | string
    trendTitle?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoriteTrendsNestedInput
  }

  export type FavoriteTrendUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trendId?: StringFieldUpdateOperationsInput | string
    trendDate?: StringFieldUpdateOperationsInput | string
    trendTitle?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteTrendCreateManyInput = {
    id?: string
    userId: string
    trendId: string
    trendDate: string
    trendTitle: string
    savedAt?: Date | string
  }

  export type FavoriteTrendUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    trendId?: StringFieldUpdateOperationsInput | string
    trendDate?: StringFieldUpdateOperationsInput | string
    trendTitle?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteTrendUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trendId?: StringFieldUpdateOperationsInput | string
    trendDate?: StringFieldUpdateOperationsInput | string
    trendTitle?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteArticleCreateInput = {
    id?: string
    articleId: string
    articleTitle: string
    articleSource: string
    articleDate: string
    excerpt?: string | null
    savedAt?: Date | string
    user: UserCreateNestedOneWithoutFavoriteArticlesInput
  }

  export type FavoriteArticleUncheckedCreateInput = {
    id?: string
    userId: string
    articleId: string
    articleTitle: string
    articleSource: string
    articleDate: string
    excerpt?: string | null
    savedAt?: Date | string
  }

  export type FavoriteArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    articleTitle?: StringFieldUpdateOperationsInput | string
    articleSource?: StringFieldUpdateOperationsInput | string
    articleDate?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoriteArticlesNestedInput
  }

  export type FavoriteArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    articleTitle?: StringFieldUpdateOperationsInput | string
    articleSource?: StringFieldUpdateOperationsInput | string
    articleDate?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteArticleCreateManyInput = {
    id?: string
    userId: string
    articleId: string
    articleTitle: string
    articleSource: string
    articleDate: string
    excerpt?: string | null
    savedAt?: Date | string
  }

  export type FavoriteArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    articleTitle?: StringFieldUpdateOperationsInput | string
    articleSource?: StringFieldUpdateOperationsInput | string
    articleDate?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    articleTitle?: StringFieldUpdateOperationsInput | string
    articleSource?: StringFieldUpdateOperationsInput | string
    articleDate?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyRecommendationCreateInput = {
    id?: string
    bookId: string
    date: string
    reason: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutDailyRecommendationsInput
  }

  export type DailyRecommendationUncheckedCreateInput = {
    id?: string
    userId: string
    bookId: string
    date: string
    reason: string
    createdAt?: Date | string
  }

  export type DailyRecommendationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDailyRecommendationsNestedInput
  }

  export type DailyRecommendationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyRecommendationCreateManyInput = {
    id?: string
    userId: string
    bookId: string
    date: string
    reason: string
    createdAt?: Date | string
  }

  export type DailyRecommendationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyRecommendationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkCreateInput = {
    id: string
    title: string
    titleEn: string
    author: string
    country: string
    flag?: string
    continent: string
    era: string
    genres?: JsonNullValueInput | InputJsonValue
    themes?: JsonNullValueInput | InputJsonValue
    excerpt?: string
    gradient?: string
    year?: number | null
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    detail?: WorkDetailCreateNestedOneWithoutWorkInput
    characters?: WorkCharacterCreateNestedManyWithoutWorkInput
    bgImage?: BgImageCreateNestedOneWithoutWorkInput
    awardWinners?: AwardWinnerCreateNestedManyWithoutWorkInput
  }

  export type WorkUncheckedCreateInput = {
    id: string
    title: string
    titleEn: string
    author: string
    country: string
    flag?: string
    continent: string
    era: string
    genres?: JsonNullValueInput | InputJsonValue
    themes?: JsonNullValueInput | InputJsonValue
    excerpt?: string
    gradient?: string
    year?: number | null
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    detail?: WorkDetailUncheckedCreateNestedOneWithoutWorkInput
    characters?: WorkCharacterUncheckedCreateNestedManyWithoutWorkInput
    bgImage?: BgImageUncheckedCreateNestedOneWithoutWorkInput
    awardWinners?: AwardWinnerUncheckedCreateNestedManyWithoutWorkInput
  }

  export type WorkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    continent?: StringFieldUpdateOperationsInput | string
    era?: StringFieldUpdateOperationsInput | string
    genres?: JsonNullValueInput | InputJsonValue
    themes?: JsonNullValueInput | InputJsonValue
    excerpt?: StringFieldUpdateOperationsInput | string
    gradient?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detail?: WorkDetailUpdateOneWithoutWorkNestedInput
    characters?: WorkCharacterUpdateManyWithoutWorkNestedInput
    bgImage?: BgImageUpdateOneWithoutWorkNestedInput
    awardWinners?: AwardWinnerUpdateManyWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    continent?: StringFieldUpdateOperationsInput | string
    era?: StringFieldUpdateOperationsInput | string
    genres?: JsonNullValueInput | InputJsonValue
    themes?: JsonNullValueInput | InputJsonValue
    excerpt?: StringFieldUpdateOperationsInput | string
    gradient?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detail?: WorkDetailUncheckedUpdateOneWithoutWorkNestedInput
    characters?: WorkCharacterUncheckedUpdateManyWithoutWorkNestedInput
    bgImage?: BgImageUncheckedUpdateOneWithoutWorkNestedInput
    awardWinners?: AwardWinnerUncheckedUpdateManyWithoutWorkNestedInput
  }

  export type WorkCreateManyInput = {
    id: string
    title: string
    titleEn: string
    author: string
    country: string
    flag?: string
    continent: string
    era: string
    genres?: JsonNullValueInput | InputJsonValue
    themes?: JsonNullValueInput | InputJsonValue
    excerpt?: string
    gradient?: string
    year?: number | null
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    continent?: StringFieldUpdateOperationsInput | string
    era?: StringFieldUpdateOperationsInput | string
    genres?: JsonNullValueInput | InputJsonValue
    themes?: JsonNullValueInput | InputJsonValue
    excerpt?: StringFieldUpdateOperationsInput | string
    gradient?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    continent?: StringFieldUpdateOperationsInput | string
    era?: StringFieldUpdateOperationsInput | string
    genres?: JsonNullValueInput | InputJsonValue
    themes?: JsonNullValueInput | InputJsonValue
    excerpt?: StringFieldUpdateOperationsInput | string
    gradient?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkDetailCreateInput = {
    id: string
    characters?: JsonNullValueInput | InputJsonValue
    plotSummary?: string
    plotNodes?: JsonNullValueInput | InputJsonValue
    themeAnalysis?: string
    techniques?: string
    excerpts?: JsonNullValueInput | InputJsonValue
    insights?: string
    sourceAttribution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    work: WorkCreateNestedOneWithoutDetailInput
  }

  export type WorkDetailUncheckedCreateInput = {
    id: string
    workId: string
    characters?: JsonNullValueInput | InputJsonValue
    plotSummary?: string
    plotNodes?: JsonNullValueInput | InputJsonValue
    themeAnalysis?: string
    techniques?: string
    excerpts?: JsonNullValueInput | InputJsonValue
    insights?: string
    sourceAttribution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkDetailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    characters?: JsonNullValueInput | InputJsonValue
    plotSummary?: StringFieldUpdateOperationsInput | string
    plotNodes?: JsonNullValueInput | InputJsonValue
    themeAnalysis?: StringFieldUpdateOperationsInput | string
    techniques?: StringFieldUpdateOperationsInput | string
    excerpts?: JsonNullValueInput | InputJsonValue
    insights?: StringFieldUpdateOperationsInput | string
    sourceAttribution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: WorkUpdateOneRequiredWithoutDetailNestedInput
  }

  export type WorkDetailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workId?: StringFieldUpdateOperationsInput | string
    characters?: JsonNullValueInput | InputJsonValue
    plotSummary?: StringFieldUpdateOperationsInput | string
    plotNodes?: JsonNullValueInput | InputJsonValue
    themeAnalysis?: StringFieldUpdateOperationsInput | string
    techniques?: StringFieldUpdateOperationsInput | string
    excerpts?: JsonNullValueInput | InputJsonValue
    insights?: StringFieldUpdateOperationsInput | string
    sourceAttribution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkDetailCreateManyInput = {
    id: string
    workId: string
    characters?: JsonNullValueInput | InputJsonValue
    plotSummary?: string
    plotNodes?: JsonNullValueInput | InputJsonValue
    themeAnalysis?: string
    techniques?: string
    excerpts?: JsonNullValueInput | InputJsonValue
    insights?: string
    sourceAttribution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkDetailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    characters?: JsonNullValueInput | InputJsonValue
    plotSummary?: StringFieldUpdateOperationsInput | string
    plotNodes?: JsonNullValueInput | InputJsonValue
    themeAnalysis?: StringFieldUpdateOperationsInput | string
    techniques?: StringFieldUpdateOperationsInput | string
    excerpts?: JsonNullValueInput | InputJsonValue
    insights?: StringFieldUpdateOperationsInput | string
    sourceAttribution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkDetailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workId?: StringFieldUpdateOperationsInput | string
    characters?: JsonNullValueInput | InputJsonValue
    plotSummary?: StringFieldUpdateOperationsInput | string
    plotNodes?: JsonNullValueInput | InputJsonValue
    themeAnalysis?: StringFieldUpdateOperationsInput | string
    techniques?: StringFieldUpdateOperationsInput | string
    excerpts?: JsonNullValueInput | InputJsonValue
    insights?: StringFieldUpdateOperationsInput | string
    sourceAttribution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkCharacterCreateInput = {
    id?: string
    name: string
    role: string
    description: string
    work: WorkCreateNestedOneWithoutCharactersInput
  }

  export type WorkCharacterUncheckedCreateInput = {
    id?: string
    workId: string
    name: string
    role: string
    description: string
  }

  export type WorkCharacterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    work?: WorkUpdateOneRequiredWithoutCharactersNestedInput
  }

  export type WorkCharacterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type WorkCharacterCreateManyInput = {
    id?: string
    workId: string
    name: string
    role: string
    description: string
  }

  export type WorkCharacterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type WorkCharacterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type BgImageCreateInput = {
    id?: string
    url?: string
    status?: string
    source?: string
    photographer?: string
    photographerUrl?: string
    searchQuery?: string
    fetchedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    work: WorkCreateNestedOneWithoutBgImageInput
  }

  export type BgImageUncheckedCreateInput = {
    id?: string
    workId: string
    url?: string
    status?: string
    source?: string
    photographer?: string
    photographerUrl?: string
    searchQuery?: string
    fetchedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BgImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    photographer?: StringFieldUpdateOperationsInput | string
    photographerUrl?: StringFieldUpdateOperationsInput | string
    searchQuery?: StringFieldUpdateOperationsInput | string
    fetchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: WorkUpdateOneRequiredWithoutBgImageNestedInput
  }

  export type BgImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    photographer?: StringFieldUpdateOperationsInput | string
    photographerUrl?: StringFieldUpdateOperationsInput | string
    searchQuery?: StringFieldUpdateOperationsInput | string
    fetchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BgImageCreateManyInput = {
    id?: string
    workId: string
    url?: string
    status?: string
    source?: string
    photographer?: string
    photographerUrl?: string
    searchQuery?: string
    fetchedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BgImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    photographer?: StringFieldUpdateOperationsInput | string
    photographerUrl?: StringFieldUpdateOperationsInput | string
    searchQuery?: StringFieldUpdateOperationsInput | string
    fetchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BgImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    photographer?: StringFieldUpdateOperationsInput | string
    photographerUrl?: StringFieldUpdateOperationsInput | string
    searchQuery?: StringFieldUpdateOperationsInput | string
    fetchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AwardCreateInput = {
    slug: string
    name: string
    nameEn: string
    description: string
    established: number
    country: string
    flag: string
    frequency: string
    category: string
    gradient: string
    icon: string
    website?: string | null
    introduction: string
    createdAt?: Date | string
    updatedAt?: Date | string
    winners?: AwardWinnerCreateNestedManyWithoutAwardInput
  }

  export type AwardUncheckedCreateInput = {
    slug: string
    name: string
    nameEn: string
    description: string
    established: number
    country: string
    flag: string
    frequency: string
    category: string
    gradient: string
    icon: string
    website?: string | null
    introduction: string
    createdAt?: Date | string
    updatedAt?: Date | string
    winners?: AwardWinnerUncheckedCreateNestedManyWithoutAwardInput
  }

  export type AwardUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    established?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    gradient?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winners?: AwardWinnerUpdateManyWithoutAwardNestedInput
  }

  export type AwardUncheckedUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    established?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    gradient?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winners?: AwardWinnerUncheckedUpdateManyWithoutAwardNestedInput
  }

  export type AwardCreateManyInput = {
    slug: string
    name: string
    nameEn: string
    description: string
    established: number
    country: string
    flag: string
    frequency: string
    category: string
    gradient: string
    icon: string
    website?: string | null
    introduction: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AwardUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    established?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    gradient?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AwardUncheckedUpdateManyInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    established?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    gradient?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AwardWinnerCreateInput = {
    id?: string
    year: number
    category?: string | null
    work: WorkCreateNestedOneWithoutAwardWinnersInput
    award: AwardCreateNestedOneWithoutWinnersInput
  }

  export type AwardWinnerUncheckedCreateInput = {
    id?: string
    workId: string
    awardSlug: string
    year: number
    category?: string | null
  }

  export type AwardWinnerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    work?: WorkUpdateOneRequiredWithoutAwardWinnersNestedInput
    award?: AwardUpdateOneRequiredWithoutWinnersNestedInput
  }

  export type AwardWinnerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workId?: StringFieldUpdateOperationsInput | string
    awardSlug?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AwardWinnerCreateManyInput = {
    id?: string
    workId: string
    awardSlug: string
    year: number
    category?: string | null
  }

  export type AwardWinnerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AwardWinnerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workId?: StringFieldUpdateOperationsInput | string
    awardSlug?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DailyTrendCreateInput = {
    id?: string
    date: string
    title: string
    background: string
    perspectives: string
    insight: string
    sourceLinks?: JsonNullValueInput | InputJsonValue
    sourceType?: string | null
    generatedAt: Date | string
    totalPostsAnalyzed?: number
    createdAt?: Date | string
  }

  export type DailyTrendUncheckedCreateInput = {
    id?: string
    date: string
    title: string
    background: string
    perspectives: string
    insight: string
    sourceLinks?: JsonNullValueInput | InputJsonValue
    sourceType?: string | null
    generatedAt: Date | string
    totalPostsAnalyzed?: number
    createdAt?: Date | string
  }

  export type DailyTrendUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    perspectives?: StringFieldUpdateOperationsInput | string
    insight?: StringFieldUpdateOperationsInput | string
    sourceLinks?: JsonNullValueInput | InputJsonValue
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPostsAnalyzed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyTrendUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    perspectives?: StringFieldUpdateOperationsInput | string
    insight?: StringFieldUpdateOperationsInput | string
    sourceLinks?: JsonNullValueInput | InputJsonValue
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPostsAnalyzed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyTrendCreateManyInput = {
    id?: string
    date: string
    title: string
    background: string
    perspectives: string
    insight: string
    sourceLinks?: JsonNullValueInput | InputJsonValue
    sourceType?: string | null
    generatedAt: Date | string
    totalPostsAnalyzed?: number
    createdAt?: Date | string
  }

  export type DailyTrendUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    perspectives?: StringFieldUpdateOperationsInput | string
    insight?: StringFieldUpdateOperationsInput | string
    sourceLinks?: JsonNullValueInput | InputJsonValue
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPostsAnalyzed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyTrendUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    perspectives?: StringFieldUpdateOperationsInput | string
    insight?: StringFieldUpdateOperationsInput | string
    sourceLinks?: JsonNullValueInput | InputJsonValue
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPostsAnalyzed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyNewWorkCreateInput = {
    id: string
    title: string
    author: string
    source: string
    sourceUrl?: string
    excerpt: string
    fullContent?: string | null
    criticism?: string | null
    language: string
    tags?: JsonNullValueInput | InputJsonValue
    type?: string
    publishedAt: Date | string
    collectedAt: Date | string
    date: string
    createdAt?: Date | string
  }

  export type DailyNewWorkUncheckedCreateInput = {
    id: string
    title: string
    author: string
    source: string
    sourceUrl?: string
    excerpt: string
    fullContent?: string | null
    criticism?: string | null
    language: string
    tags?: JsonNullValueInput | InputJsonValue
    type?: string
    publishedAt: Date | string
    collectedAt: Date | string
    date: string
    createdAt?: Date | string
  }

  export type DailyNewWorkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    fullContent?: NullableStringFieldUpdateOperationsInput | string | null
    criticism?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyNewWorkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    fullContent?: NullableStringFieldUpdateOperationsInput | string | null
    criticism?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyNewWorkCreateManyInput = {
    id: string
    title: string
    author: string
    source: string
    sourceUrl?: string
    excerpt: string
    fullContent?: string | null
    criticism?: string | null
    language: string
    tags?: JsonNullValueInput | InputJsonValue
    type?: string
    publishedAt: Date | string
    collectedAt: Date | string
    date: string
    createdAt?: Date | string
  }

  export type DailyNewWorkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    fullContent?: NullableStringFieldUpdateOperationsInput | string | null
    criticism?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyNewWorkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    fullContent?: NullableStringFieldUpdateOperationsInput | string | null
    criticism?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BookmarkListRelationFilter = {
    every?: BookmarkWhereInput
    some?: BookmarkWhereInput
    none?: BookmarkWhereInput
  }

  export type FavoriteTrendListRelationFilter = {
    every?: FavoriteTrendWhereInput
    some?: FavoriteTrendWhereInput
    none?: FavoriteTrendWhereInput
  }

  export type FavoriteArticleListRelationFilter = {
    every?: FavoriteArticleWhereInput
    some?: FavoriteArticleWhereInput
    none?: FavoriteArticleWhereInput
  }

  export type DailyRecommendationListRelationFilter = {
    every?: DailyRecommendationWhereInput
    some?: DailyRecommendationWhereInput
    none?: DailyRecommendationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookmarkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriteTrendOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriteArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyRecommendationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    avatar?: SortOrder
    provider?: SortOrder
    preferences?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    avatar?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    avatar?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BookmarkUserIdWorkIdCompoundUniqueInput = {
    userId: string
    workId: string
  }

  export type BookmarkCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookmarkMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookmarkMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteTrendUserIdTrendIdCompoundUniqueInput = {
    userId: string
    trendId: string
  }

  export type FavoriteTrendCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trendId?: SortOrder
    trendDate?: SortOrder
    trendTitle?: SortOrder
    savedAt?: SortOrder
  }

  export type FavoriteTrendMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trendId?: SortOrder
    trendDate?: SortOrder
    trendTitle?: SortOrder
    savedAt?: SortOrder
  }

  export type FavoriteTrendMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trendId?: SortOrder
    trendDate?: SortOrder
    trendTitle?: SortOrder
    savedAt?: SortOrder
  }

  export type FavoriteArticleUserIdArticleIdCompoundUniqueInput = {
    userId: string
    articleId: string
  }

  export type FavoriteArticleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    articleId?: SortOrder
    articleTitle?: SortOrder
    articleSource?: SortOrder
    articleDate?: SortOrder
    excerpt?: SortOrder
    savedAt?: SortOrder
  }

  export type FavoriteArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    articleId?: SortOrder
    articleTitle?: SortOrder
    articleSource?: SortOrder
    articleDate?: SortOrder
    excerpt?: SortOrder
    savedAt?: SortOrder
  }

  export type FavoriteArticleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    articleId?: SortOrder
    articleTitle?: SortOrder
    articleSource?: SortOrder
    articleDate?: SortOrder
    excerpt?: SortOrder
    savedAt?: SortOrder
  }

  export type DailyRecommendationUserIdDateCompoundUniqueInput = {
    userId: string
    date: string
  }

  export type DailyRecommendationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    date?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyRecommendationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    date?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyRecommendationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    date?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type WorkDetailNullableScalarRelationFilter = {
    is?: WorkDetailWhereInput | null
    isNot?: WorkDetailWhereInput | null
  }

  export type WorkCharacterListRelationFilter = {
    every?: WorkCharacterWhereInput
    some?: WorkCharacterWhereInput
    none?: WorkCharacterWhereInput
  }

  export type BgImageNullableScalarRelationFilter = {
    is?: BgImageWhereInput | null
    isNot?: BgImageWhereInput | null
  }

  export type AwardWinnerListRelationFilter = {
    every?: AwardWinnerWhereInput
    some?: AwardWinnerWhereInput
    none?: AwardWinnerWhereInput
  }

  export type WorkCharacterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AwardWinnerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    titleEn?: SortOrder
    author?: SortOrder
    country?: SortOrder
    flag?: SortOrder
    continent?: SortOrder
    era?: SortOrder
    genres?: SortOrder
    themes?: SortOrder
    excerpt?: SortOrder
    gradient?: SortOrder
    year?: SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type WorkMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    titleEn?: SortOrder
    author?: SortOrder
    country?: SortOrder
    flag?: SortOrder
    continent?: SortOrder
    era?: SortOrder
    excerpt?: SortOrder
    gradient?: SortOrder
    year?: SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    titleEn?: SortOrder
    author?: SortOrder
    country?: SortOrder
    flag?: SortOrder
    continent?: SortOrder
    era?: SortOrder
    excerpt?: SortOrder
    gradient?: SortOrder
    year?: SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkSumOrderByAggregateInput = {
    year?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type WorkScalarRelationFilter = {
    is?: WorkWhereInput
    isNot?: WorkWhereInput
  }

  export type WorkDetailCountOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    characters?: SortOrder
    plotSummary?: SortOrder
    plotNodes?: SortOrder
    themeAnalysis?: SortOrder
    techniques?: SortOrder
    excerpts?: SortOrder
    insights?: SortOrder
    sourceAttribution?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    plotSummary?: SortOrder
    themeAnalysis?: SortOrder
    techniques?: SortOrder
    insights?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkDetailMinOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    plotSummary?: SortOrder
    themeAnalysis?: SortOrder
    techniques?: SortOrder
    insights?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkCharacterCountOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    name?: SortOrder
    role?: SortOrder
    description?: SortOrder
  }

  export type WorkCharacterMaxOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    name?: SortOrder
    role?: SortOrder
    description?: SortOrder
  }

  export type WorkCharacterMinOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    name?: SortOrder
    role?: SortOrder
    description?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BgImageCountOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    url?: SortOrder
    status?: SortOrder
    source?: SortOrder
    photographer?: SortOrder
    photographerUrl?: SortOrder
    searchQuery?: SortOrder
    fetchedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BgImageMaxOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    url?: SortOrder
    status?: SortOrder
    source?: SortOrder
    photographer?: SortOrder
    photographerUrl?: SortOrder
    searchQuery?: SortOrder
    fetchedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BgImageMinOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    url?: SortOrder
    status?: SortOrder
    source?: SortOrder
    photographer?: SortOrder
    photographerUrl?: SortOrder
    searchQuery?: SortOrder
    fetchedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AwardCountOrderByAggregateInput = {
    slug?: SortOrder
    name?: SortOrder
    nameEn?: SortOrder
    description?: SortOrder
    established?: SortOrder
    country?: SortOrder
    flag?: SortOrder
    frequency?: SortOrder
    category?: SortOrder
    gradient?: SortOrder
    icon?: SortOrder
    website?: SortOrder
    introduction?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AwardAvgOrderByAggregateInput = {
    established?: SortOrder
  }

  export type AwardMaxOrderByAggregateInput = {
    slug?: SortOrder
    name?: SortOrder
    nameEn?: SortOrder
    description?: SortOrder
    established?: SortOrder
    country?: SortOrder
    flag?: SortOrder
    frequency?: SortOrder
    category?: SortOrder
    gradient?: SortOrder
    icon?: SortOrder
    website?: SortOrder
    introduction?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AwardMinOrderByAggregateInput = {
    slug?: SortOrder
    name?: SortOrder
    nameEn?: SortOrder
    description?: SortOrder
    established?: SortOrder
    country?: SortOrder
    flag?: SortOrder
    frequency?: SortOrder
    category?: SortOrder
    gradient?: SortOrder
    icon?: SortOrder
    website?: SortOrder
    introduction?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AwardSumOrderByAggregateInput = {
    established?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type AwardScalarRelationFilter = {
    is?: AwardWhereInput
    isNot?: AwardWhereInput
  }

  export type AwardWinnerWorkIdAwardSlugYearCompoundUniqueInput = {
    workId: string
    awardSlug: string
    year: number
  }

  export type AwardWinnerCountOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    awardSlug?: SortOrder
    year?: SortOrder
    category?: SortOrder
  }

  export type AwardWinnerAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type AwardWinnerMaxOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    awardSlug?: SortOrder
    year?: SortOrder
    category?: SortOrder
  }

  export type AwardWinnerMinOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    awardSlug?: SortOrder
    year?: SortOrder
    category?: SortOrder
  }

  export type AwardWinnerSumOrderByAggregateInput = {
    year?: SortOrder
  }

  export type DailyTrendCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    title?: SortOrder
    background?: SortOrder
    perspectives?: SortOrder
    insight?: SortOrder
    sourceLinks?: SortOrder
    sourceType?: SortOrder
    generatedAt?: SortOrder
    totalPostsAnalyzed?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyTrendAvgOrderByAggregateInput = {
    totalPostsAnalyzed?: SortOrder
  }

  export type DailyTrendMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    title?: SortOrder
    background?: SortOrder
    perspectives?: SortOrder
    insight?: SortOrder
    sourceType?: SortOrder
    generatedAt?: SortOrder
    totalPostsAnalyzed?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyTrendMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    title?: SortOrder
    background?: SortOrder
    perspectives?: SortOrder
    insight?: SortOrder
    sourceType?: SortOrder
    generatedAt?: SortOrder
    totalPostsAnalyzed?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyTrendSumOrderByAggregateInput = {
    totalPostsAnalyzed?: SortOrder
  }

  export type DailyNewWorkCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    source?: SortOrder
    sourceUrl?: SortOrder
    excerpt?: SortOrder
    fullContent?: SortOrder
    criticism?: SortOrder
    language?: SortOrder
    tags?: SortOrder
    type?: SortOrder
    publishedAt?: SortOrder
    collectedAt?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyNewWorkMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    source?: SortOrder
    sourceUrl?: SortOrder
    excerpt?: SortOrder
    fullContent?: SortOrder
    criticism?: SortOrder
    language?: SortOrder
    type?: SortOrder
    publishedAt?: SortOrder
    collectedAt?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyNewWorkMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    source?: SortOrder
    sourceUrl?: SortOrder
    excerpt?: SortOrder
    fullContent?: SortOrder
    criticism?: SortOrder
    language?: SortOrder
    type?: SortOrder
    publishedAt?: SortOrder
    collectedAt?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type BookmarkCreateNestedManyWithoutUserInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[]
    createMany?: BookmarkCreateManyUserInputEnvelope
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
  }

  export type FavoriteTrendCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteTrendCreateWithoutUserInput, FavoriteTrendUncheckedCreateWithoutUserInput> | FavoriteTrendCreateWithoutUserInput[] | FavoriteTrendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteTrendCreateOrConnectWithoutUserInput | FavoriteTrendCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteTrendCreateManyUserInputEnvelope
    connect?: FavoriteTrendWhereUniqueInput | FavoriteTrendWhereUniqueInput[]
  }

  export type FavoriteArticleCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteArticleCreateWithoutUserInput, FavoriteArticleUncheckedCreateWithoutUserInput> | FavoriteArticleCreateWithoutUserInput[] | FavoriteArticleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteArticleCreateOrConnectWithoutUserInput | FavoriteArticleCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteArticleCreateManyUserInputEnvelope
    connect?: FavoriteArticleWhereUniqueInput | FavoriteArticleWhereUniqueInput[]
  }

  export type DailyRecommendationCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyRecommendationCreateWithoutUserInput, DailyRecommendationUncheckedCreateWithoutUserInput> | DailyRecommendationCreateWithoutUserInput[] | DailyRecommendationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyRecommendationCreateOrConnectWithoutUserInput | DailyRecommendationCreateOrConnectWithoutUserInput[]
    createMany?: DailyRecommendationCreateManyUserInputEnvelope
    connect?: DailyRecommendationWhereUniqueInput | DailyRecommendationWhereUniqueInput[]
  }

  export type BookmarkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[]
    createMany?: BookmarkCreateManyUserInputEnvelope
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
  }

  export type FavoriteTrendUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteTrendCreateWithoutUserInput, FavoriteTrendUncheckedCreateWithoutUserInput> | FavoriteTrendCreateWithoutUserInput[] | FavoriteTrendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteTrendCreateOrConnectWithoutUserInput | FavoriteTrendCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteTrendCreateManyUserInputEnvelope
    connect?: FavoriteTrendWhereUniqueInput | FavoriteTrendWhereUniqueInput[]
  }

  export type FavoriteArticleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteArticleCreateWithoutUserInput, FavoriteArticleUncheckedCreateWithoutUserInput> | FavoriteArticleCreateWithoutUserInput[] | FavoriteArticleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteArticleCreateOrConnectWithoutUserInput | FavoriteArticleCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteArticleCreateManyUserInputEnvelope
    connect?: FavoriteArticleWhereUniqueInput | FavoriteArticleWhereUniqueInput[]
  }

  export type DailyRecommendationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyRecommendationCreateWithoutUserInput, DailyRecommendationUncheckedCreateWithoutUserInput> | DailyRecommendationCreateWithoutUserInput[] | DailyRecommendationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyRecommendationCreateOrConnectWithoutUserInput | DailyRecommendationCreateOrConnectWithoutUserInput[]
    createMany?: DailyRecommendationCreateManyUserInputEnvelope
    connect?: DailyRecommendationWhereUniqueInput | DailyRecommendationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookmarkUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[]
    upsert?: BookmarkUpsertWithWhereUniqueWithoutUserInput | BookmarkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookmarkCreateManyUserInputEnvelope
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    update?: BookmarkUpdateWithWhereUniqueWithoutUserInput | BookmarkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookmarkUpdateManyWithWhereWithoutUserInput | BookmarkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
  }

  export type FavoriteTrendUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteTrendCreateWithoutUserInput, FavoriteTrendUncheckedCreateWithoutUserInput> | FavoriteTrendCreateWithoutUserInput[] | FavoriteTrendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteTrendCreateOrConnectWithoutUserInput | FavoriteTrendCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteTrendUpsertWithWhereUniqueWithoutUserInput | FavoriteTrendUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteTrendCreateManyUserInputEnvelope
    set?: FavoriteTrendWhereUniqueInput | FavoriteTrendWhereUniqueInput[]
    disconnect?: FavoriteTrendWhereUniqueInput | FavoriteTrendWhereUniqueInput[]
    delete?: FavoriteTrendWhereUniqueInput | FavoriteTrendWhereUniqueInput[]
    connect?: FavoriteTrendWhereUniqueInput | FavoriteTrendWhereUniqueInput[]
    update?: FavoriteTrendUpdateWithWhereUniqueWithoutUserInput | FavoriteTrendUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteTrendUpdateManyWithWhereWithoutUserInput | FavoriteTrendUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteTrendScalarWhereInput | FavoriteTrendScalarWhereInput[]
  }

  export type FavoriteArticleUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteArticleCreateWithoutUserInput, FavoriteArticleUncheckedCreateWithoutUserInput> | FavoriteArticleCreateWithoutUserInput[] | FavoriteArticleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteArticleCreateOrConnectWithoutUserInput | FavoriteArticleCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteArticleUpsertWithWhereUniqueWithoutUserInput | FavoriteArticleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteArticleCreateManyUserInputEnvelope
    set?: FavoriteArticleWhereUniqueInput | FavoriteArticleWhereUniqueInput[]
    disconnect?: FavoriteArticleWhereUniqueInput | FavoriteArticleWhereUniqueInput[]
    delete?: FavoriteArticleWhereUniqueInput | FavoriteArticleWhereUniqueInput[]
    connect?: FavoriteArticleWhereUniqueInput | FavoriteArticleWhereUniqueInput[]
    update?: FavoriteArticleUpdateWithWhereUniqueWithoutUserInput | FavoriteArticleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteArticleUpdateManyWithWhereWithoutUserInput | FavoriteArticleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteArticleScalarWhereInput | FavoriteArticleScalarWhereInput[]
  }

  export type DailyRecommendationUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyRecommendationCreateWithoutUserInput, DailyRecommendationUncheckedCreateWithoutUserInput> | DailyRecommendationCreateWithoutUserInput[] | DailyRecommendationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyRecommendationCreateOrConnectWithoutUserInput | DailyRecommendationCreateOrConnectWithoutUserInput[]
    upsert?: DailyRecommendationUpsertWithWhereUniqueWithoutUserInput | DailyRecommendationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyRecommendationCreateManyUserInputEnvelope
    set?: DailyRecommendationWhereUniqueInput | DailyRecommendationWhereUniqueInput[]
    disconnect?: DailyRecommendationWhereUniqueInput | DailyRecommendationWhereUniqueInput[]
    delete?: DailyRecommendationWhereUniqueInput | DailyRecommendationWhereUniqueInput[]
    connect?: DailyRecommendationWhereUniqueInput | DailyRecommendationWhereUniqueInput[]
    update?: DailyRecommendationUpdateWithWhereUniqueWithoutUserInput | DailyRecommendationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyRecommendationUpdateManyWithWhereWithoutUserInput | DailyRecommendationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyRecommendationScalarWhereInput | DailyRecommendationScalarWhereInput[]
  }

  export type BookmarkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[]
    upsert?: BookmarkUpsertWithWhereUniqueWithoutUserInput | BookmarkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookmarkCreateManyUserInputEnvelope
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    update?: BookmarkUpdateWithWhereUniqueWithoutUserInput | BookmarkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookmarkUpdateManyWithWhereWithoutUserInput | BookmarkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
  }

  export type FavoriteTrendUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteTrendCreateWithoutUserInput, FavoriteTrendUncheckedCreateWithoutUserInput> | FavoriteTrendCreateWithoutUserInput[] | FavoriteTrendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteTrendCreateOrConnectWithoutUserInput | FavoriteTrendCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteTrendUpsertWithWhereUniqueWithoutUserInput | FavoriteTrendUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteTrendCreateManyUserInputEnvelope
    set?: FavoriteTrendWhereUniqueInput | FavoriteTrendWhereUniqueInput[]
    disconnect?: FavoriteTrendWhereUniqueInput | FavoriteTrendWhereUniqueInput[]
    delete?: FavoriteTrendWhereUniqueInput | FavoriteTrendWhereUniqueInput[]
    connect?: FavoriteTrendWhereUniqueInput | FavoriteTrendWhereUniqueInput[]
    update?: FavoriteTrendUpdateWithWhereUniqueWithoutUserInput | FavoriteTrendUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteTrendUpdateManyWithWhereWithoutUserInput | FavoriteTrendUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteTrendScalarWhereInput | FavoriteTrendScalarWhereInput[]
  }

  export type FavoriteArticleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteArticleCreateWithoutUserInput, FavoriteArticleUncheckedCreateWithoutUserInput> | FavoriteArticleCreateWithoutUserInput[] | FavoriteArticleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteArticleCreateOrConnectWithoutUserInput | FavoriteArticleCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteArticleUpsertWithWhereUniqueWithoutUserInput | FavoriteArticleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteArticleCreateManyUserInputEnvelope
    set?: FavoriteArticleWhereUniqueInput | FavoriteArticleWhereUniqueInput[]
    disconnect?: FavoriteArticleWhereUniqueInput | FavoriteArticleWhereUniqueInput[]
    delete?: FavoriteArticleWhereUniqueInput | FavoriteArticleWhereUniqueInput[]
    connect?: FavoriteArticleWhereUniqueInput | FavoriteArticleWhereUniqueInput[]
    update?: FavoriteArticleUpdateWithWhereUniqueWithoutUserInput | FavoriteArticleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteArticleUpdateManyWithWhereWithoutUserInput | FavoriteArticleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteArticleScalarWhereInput | FavoriteArticleScalarWhereInput[]
  }

  export type DailyRecommendationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyRecommendationCreateWithoutUserInput, DailyRecommendationUncheckedCreateWithoutUserInput> | DailyRecommendationCreateWithoutUserInput[] | DailyRecommendationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyRecommendationCreateOrConnectWithoutUserInput | DailyRecommendationCreateOrConnectWithoutUserInput[]
    upsert?: DailyRecommendationUpsertWithWhereUniqueWithoutUserInput | DailyRecommendationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyRecommendationCreateManyUserInputEnvelope
    set?: DailyRecommendationWhereUniqueInput | DailyRecommendationWhereUniqueInput[]
    disconnect?: DailyRecommendationWhereUniqueInput | DailyRecommendationWhereUniqueInput[]
    delete?: DailyRecommendationWhereUniqueInput | DailyRecommendationWhereUniqueInput[]
    connect?: DailyRecommendationWhereUniqueInput | DailyRecommendationWhereUniqueInput[]
    update?: DailyRecommendationUpdateWithWhereUniqueWithoutUserInput | DailyRecommendationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyRecommendationUpdateManyWithWhereWithoutUserInput | DailyRecommendationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyRecommendationScalarWhereInput | DailyRecommendationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBookmarksInput = {
    create?: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBookmarksNestedInput = {
    create?: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput
    upsert?: UserUpsertWithoutBookmarksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookmarksInput, UserUpdateWithoutBookmarksInput>, UserUncheckedUpdateWithoutBookmarksInput>
  }

  export type UserCreateNestedOneWithoutFavoriteTrendsInput = {
    create?: XOR<UserCreateWithoutFavoriteTrendsInput, UserUncheckedCreateWithoutFavoriteTrendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteTrendsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoriteTrendsNestedInput = {
    create?: XOR<UserCreateWithoutFavoriteTrendsInput, UserUncheckedCreateWithoutFavoriteTrendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteTrendsInput
    upsert?: UserUpsertWithoutFavoriteTrendsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoriteTrendsInput, UserUpdateWithoutFavoriteTrendsInput>, UserUncheckedUpdateWithoutFavoriteTrendsInput>
  }

  export type UserCreateNestedOneWithoutFavoriteArticlesInput = {
    create?: XOR<UserCreateWithoutFavoriteArticlesInput, UserUncheckedCreateWithoutFavoriteArticlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteArticlesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoriteArticlesNestedInput = {
    create?: XOR<UserCreateWithoutFavoriteArticlesInput, UserUncheckedCreateWithoutFavoriteArticlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteArticlesInput
    upsert?: UserUpsertWithoutFavoriteArticlesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoriteArticlesInput, UserUpdateWithoutFavoriteArticlesInput>, UserUncheckedUpdateWithoutFavoriteArticlesInput>
  }

  export type UserCreateNestedOneWithoutDailyRecommendationsInput = {
    create?: XOR<UserCreateWithoutDailyRecommendationsInput, UserUncheckedCreateWithoutDailyRecommendationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyRecommendationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDailyRecommendationsNestedInput = {
    create?: XOR<UserCreateWithoutDailyRecommendationsInput, UserUncheckedCreateWithoutDailyRecommendationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyRecommendationsInput
    upsert?: UserUpsertWithoutDailyRecommendationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDailyRecommendationsInput, UserUpdateWithoutDailyRecommendationsInput>, UserUncheckedUpdateWithoutDailyRecommendationsInput>
  }

  export type WorkDetailCreateNestedOneWithoutWorkInput = {
    create?: XOR<WorkDetailCreateWithoutWorkInput, WorkDetailUncheckedCreateWithoutWorkInput>
    connectOrCreate?: WorkDetailCreateOrConnectWithoutWorkInput
    connect?: WorkDetailWhereUniqueInput
  }

  export type WorkCharacterCreateNestedManyWithoutWorkInput = {
    create?: XOR<WorkCharacterCreateWithoutWorkInput, WorkCharacterUncheckedCreateWithoutWorkInput> | WorkCharacterCreateWithoutWorkInput[] | WorkCharacterUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WorkCharacterCreateOrConnectWithoutWorkInput | WorkCharacterCreateOrConnectWithoutWorkInput[]
    createMany?: WorkCharacterCreateManyWorkInputEnvelope
    connect?: WorkCharacterWhereUniqueInput | WorkCharacterWhereUniqueInput[]
  }

  export type BgImageCreateNestedOneWithoutWorkInput = {
    create?: XOR<BgImageCreateWithoutWorkInput, BgImageUncheckedCreateWithoutWorkInput>
    connectOrCreate?: BgImageCreateOrConnectWithoutWorkInput
    connect?: BgImageWhereUniqueInput
  }

  export type AwardWinnerCreateNestedManyWithoutWorkInput = {
    create?: XOR<AwardWinnerCreateWithoutWorkInput, AwardWinnerUncheckedCreateWithoutWorkInput> | AwardWinnerCreateWithoutWorkInput[] | AwardWinnerUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: AwardWinnerCreateOrConnectWithoutWorkInput | AwardWinnerCreateOrConnectWithoutWorkInput[]
    createMany?: AwardWinnerCreateManyWorkInputEnvelope
    connect?: AwardWinnerWhereUniqueInput | AwardWinnerWhereUniqueInput[]
  }

  export type WorkDetailUncheckedCreateNestedOneWithoutWorkInput = {
    create?: XOR<WorkDetailCreateWithoutWorkInput, WorkDetailUncheckedCreateWithoutWorkInput>
    connectOrCreate?: WorkDetailCreateOrConnectWithoutWorkInput
    connect?: WorkDetailWhereUniqueInput
  }

  export type WorkCharacterUncheckedCreateNestedManyWithoutWorkInput = {
    create?: XOR<WorkCharacterCreateWithoutWorkInput, WorkCharacterUncheckedCreateWithoutWorkInput> | WorkCharacterCreateWithoutWorkInput[] | WorkCharacterUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WorkCharacterCreateOrConnectWithoutWorkInput | WorkCharacterCreateOrConnectWithoutWorkInput[]
    createMany?: WorkCharacterCreateManyWorkInputEnvelope
    connect?: WorkCharacterWhereUniqueInput | WorkCharacterWhereUniqueInput[]
  }

  export type BgImageUncheckedCreateNestedOneWithoutWorkInput = {
    create?: XOR<BgImageCreateWithoutWorkInput, BgImageUncheckedCreateWithoutWorkInput>
    connectOrCreate?: BgImageCreateOrConnectWithoutWorkInput
    connect?: BgImageWhereUniqueInput
  }

  export type AwardWinnerUncheckedCreateNestedManyWithoutWorkInput = {
    create?: XOR<AwardWinnerCreateWithoutWorkInput, AwardWinnerUncheckedCreateWithoutWorkInput> | AwardWinnerCreateWithoutWorkInput[] | AwardWinnerUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: AwardWinnerCreateOrConnectWithoutWorkInput | AwardWinnerCreateOrConnectWithoutWorkInput[]
    createMany?: AwardWinnerCreateManyWorkInputEnvelope
    connect?: AwardWinnerWhereUniqueInput | AwardWinnerWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type WorkDetailUpdateOneWithoutWorkNestedInput = {
    create?: XOR<WorkDetailCreateWithoutWorkInput, WorkDetailUncheckedCreateWithoutWorkInput>
    connectOrCreate?: WorkDetailCreateOrConnectWithoutWorkInput
    upsert?: WorkDetailUpsertWithoutWorkInput
    disconnect?: WorkDetailWhereInput | boolean
    delete?: WorkDetailWhereInput | boolean
    connect?: WorkDetailWhereUniqueInput
    update?: XOR<XOR<WorkDetailUpdateToOneWithWhereWithoutWorkInput, WorkDetailUpdateWithoutWorkInput>, WorkDetailUncheckedUpdateWithoutWorkInput>
  }

  export type WorkCharacterUpdateManyWithoutWorkNestedInput = {
    create?: XOR<WorkCharacterCreateWithoutWorkInput, WorkCharacterUncheckedCreateWithoutWorkInput> | WorkCharacterCreateWithoutWorkInput[] | WorkCharacterUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WorkCharacterCreateOrConnectWithoutWorkInput | WorkCharacterCreateOrConnectWithoutWorkInput[]
    upsert?: WorkCharacterUpsertWithWhereUniqueWithoutWorkInput | WorkCharacterUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: WorkCharacterCreateManyWorkInputEnvelope
    set?: WorkCharacterWhereUniqueInput | WorkCharacterWhereUniqueInput[]
    disconnect?: WorkCharacterWhereUniqueInput | WorkCharacterWhereUniqueInput[]
    delete?: WorkCharacterWhereUniqueInput | WorkCharacterWhereUniqueInput[]
    connect?: WorkCharacterWhereUniqueInput | WorkCharacterWhereUniqueInput[]
    update?: WorkCharacterUpdateWithWhereUniqueWithoutWorkInput | WorkCharacterUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: WorkCharacterUpdateManyWithWhereWithoutWorkInput | WorkCharacterUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: WorkCharacterScalarWhereInput | WorkCharacterScalarWhereInput[]
  }

  export type BgImageUpdateOneWithoutWorkNestedInput = {
    create?: XOR<BgImageCreateWithoutWorkInput, BgImageUncheckedCreateWithoutWorkInput>
    connectOrCreate?: BgImageCreateOrConnectWithoutWorkInput
    upsert?: BgImageUpsertWithoutWorkInput
    disconnect?: BgImageWhereInput | boolean
    delete?: BgImageWhereInput | boolean
    connect?: BgImageWhereUniqueInput
    update?: XOR<XOR<BgImageUpdateToOneWithWhereWithoutWorkInput, BgImageUpdateWithoutWorkInput>, BgImageUncheckedUpdateWithoutWorkInput>
  }

  export type AwardWinnerUpdateManyWithoutWorkNestedInput = {
    create?: XOR<AwardWinnerCreateWithoutWorkInput, AwardWinnerUncheckedCreateWithoutWorkInput> | AwardWinnerCreateWithoutWorkInput[] | AwardWinnerUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: AwardWinnerCreateOrConnectWithoutWorkInput | AwardWinnerCreateOrConnectWithoutWorkInput[]
    upsert?: AwardWinnerUpsertWithWhereUniqueWithoutWorkInput | AwardWinnerUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: AwardWinnerCreateManyWorkInputEnvelope
    set?: AwardWinnerWhereUniqueInput | AwardWinnerWhereUniqueInput[]
    disconnect?: AwardWinnerWhereUniqueInput | AwardWinnerWhereUniqueInput[]
    delete?: AwardWinnerWhereUniqueInput | AwardWinnerWhereUniqueInput[]
    connect?: AwardWinnerWhereUniqueInput | AwardWinnerWhereUniqueInput[]
    update?: AwardWinnerUpdateWithWhereUniqueWithoutWorkInput | AwardWinnerUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: AwardWinnerUpdateManyWithWhereWithoutWorkInput | AwardWinnerUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: AwardWinnerScalarWhereInput | AwardWinnerScalarWhereInput[]
  }

  export type WorkDetailUncheckedUpdateOneWithoutWorkNestedInput = {
    create?: XOR<WorkDetailCreateWithoutWorkInput, WorkDetailUncheckedCreateWithoutWorkInput>
    connectOrCreate?: WorkDetailCreateOrConnectWithoutWorkInput
    upsert?: WorkDetailUpsertWithoutWorkInput
    disconnect?: WorkDetailWhereInput | boolean
    delete?: WorkDetailWhereInput | boolean
    connect?: WorkDetailWhereUniqueInput
    update?: XOR<XOR<WorkDetailUpdateToOneWithWhereWithoutWorkInput, WorkDetailUpdateWithoutWorkInput>, WorkDetailUncheckedUpdateWithoutWorkInput>
  }

  export type WorkCharacterUncheckedUpdateManyWithoutWorkNestedInput = {
    create?: XOR<WorkCharacterCreateWithoutWorkInput, WorkCharacterUncheckedCreateWithoutWorkInput> | WorkCharacterCreateWithoutWorkInput[] | WorkCharacterUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WorkCharacterCreateOrConnectWithoutWorkInput | WorkCharacterCreateOrConnectWithoutWorkInput[]
    upsert?: WorkCharacterUpsertWithWhereUniqueWithoutWorkInput | WorkCharacterUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: WorkCharacterCreateManyWorkInputEnvelope
    set?: WorkCharacterWhereUniqueInput | WorkCharacterWhereUniqueInput[]
    disconnect?: WorkCharacterWhereUniqueInput | WorkCharacterWhereUniqueInput[]
    delete?: WorkCharacterWhereUniqueInput | WorkCharacterWhereUniqueInput[]
    connect?: WorkCharacterWhereUniqueInput | WorkCharacterWhereUniqueInput[]
    update?: WorkCharacterUpdateWithWhereUniqueWithoutWorkInput | WorkCharacterUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: WorkCharacterUpdateManyWithWhereWithoutWorkInput | WorkCharacterUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: WorkCharacterScalarWhereInput | WorkCharacterScalarWhereInput[]
  }

  export type BgImageUncheckedUpdateOneWithoutWorkNestedInput = {
    create?: XOR<BgImageCreateWithoutWorkInput, BgImageUncheckedCreateWithoutWorkInput>
    connectOrCreate?: BgImageCreateOrConnectWithoutWorkInput
    upsert?: BgImageUpsertWithoutWorkInput
    disconnect?: BgImageWhereInput | boolean
    delete?: BgImageWhereInput | boolean
    connect?: BgImageWhereUniqueInput
    update?: XOR<XOR<BgImageUpdateToOneWithWhereWithoutWorkInput, BgImageUpdateWithoutWorkInput>, BgImageUncheckedUpdateWithoutWorkInput>
  }

  export type AwardWinnerUncheckedUpdateManyWithoutWorkNestedInput = {
    create?: XOR<AwardWinnerCreateWithoutWorkInput, AwardWinnerUncheckedCreateWithoutWorkInput> | AwardWinnerCreateWithoutWorkInput[] | AwardWinnerUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: AwardWinnerCreateOrConnectWithoutWorkInput | AwardWinnerCreateOrConnectWithoutWorkInput[]
    upsert?: AwardWinnerUpsertWithWhereUniqueWithoutWorkInput | AwardWinnerUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: AwardWinnerCreateManyWorkInputEnvelope
    set?: AwardWinnerWhereUniqueInput | AwardWinnerWhereUniqueInput[]
    disconnect?: AwardWinnerWhereUniqueInput | AwardWinnerWhereUniqueInput[]
    delete?: AwardWinnerWhereUniqueInput | AwardWinnerWhereUniqueInput[]
    connect?: AwardWinnerWhereUniqueInput | AwardWinnerWhereUniqueInput[]
    update?: AwardWinnerUpdateWithWhereUniqueWithoutWorkInput | AwardWinnerUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: AwardWinnerUpdateManyWithWhereWithoutWorkInput | AwardWinnerUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: AwardWinnerScalarWhereInput | AwardWinnerScalarWhereInput[]
  }

  export type WorkCreateNestedOneWithoutDetailInput = {
    create?: XOR<WorkCreateWithoutDetailInput, WorkUncheckedCreateWithoutDetailInput>
    connectOrCreate?: WorkCreateOrConnectWithoutDetailInput
    connect?: WorkWhereUniqueInput
  }

  export type WorkUpdateOneRequiredWithoutDetailNestedInput = {
    create?: XOR<WorkCreateWithoutDetailInput, WorkUncheckedCreateWithoutDetailInput>
    connectOrCreate?: WorkCreateOrConnectWithoutDetailInput
    upsert?: WorkUpsertWithoutDetailInput
    connect?: WorkWhereUniqueInput
    update?: XOR<XOR<WorkUpdateToOneWithWhereWithoutDetailInput, WorkUpdateWithoutDetailInput>, WorkUncheckedUpdateWithoutDetailInput>
  }

  export type WorkCreateNestedOneWithoutCharactersInput = {
    create?: XOR<WorkCreateWithoutCharactersInput, WorkUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: WorkCreateOrConnectWithoutCharactersInput
    connect?: WorkWhereUniqueInput
  }

  export type WorkUpdateOneRequiredWithoutCharactersNestedInput = {
    create?: XOR<WorkCreateWithoutCharactersInput, WorkUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: WorkCreateOrConnectWithoutCharactersInput
    upsert?: WorkUpsertWithoutCharactersInput
    connect?: WorkWhereUniqueInput
    update?: XOR<XOR<WorkUpdateToOneWithWhereWithoutCharactersInput, WorkUpdateWithoutCharactersInput>, WorkUncheckedUpdateWithoutCharactersInput>
  }

  export type WorkCreateNestedOneWithoutBgImageInput = {
    create?: XOR<WorkCreateWithoutBgImageInput, WorkUncheckedCreateWithoutBgImageInput>
    connectOrCreate?: WorkCreateOrConnectWithoutBgImageInput
    connect?: WorkWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type WorkUpdateOneRequiredWithoutBgImageNestedInput = {
    create?: XOR<WorkCreateWithoutBgImageInput, WorkUncheckedCreateWithoutBgImageInput>
    connectOrCreate?: WorkCreateOrConnectWithoutBgImageInput
    upsert?: WorkUpsertWithoutBgImageInput
    connect?: WorkWhereUniqueInput
    update?: XOR<XOR<WorkUpdateToOneWithWhereWithoutBgImageInput, WorkUpdateWithoutBgImageInput>, WorkUncheckedUpdateWithoutBgImageInput>
  }

  export type AwardWinnerCreateNestedManyWithoutAwardInput = {
    create?: XOR<AwardWinnerCreateWithoutAwardInput, AwardWinnerUncheckedCreateWithoutAwardInput> | AwardWinnerCreateWithoutAwardInput[] | AwardWinnerUncheckedCreateWithoutAwardInput[]
    connectOrCreate?: AwardWinnerCreateOrConnectWithoutAwardInput | AwardWinnerCreateOrConnectWithoutAwardInput[]
    createMany?: AwardWinnerCreateManyAwardInputEnvelope
    connect?: AwardWinnerWhereUniqueInput | AwardWinnerWhereUniqueInput[]
  }

  export type AwardWinnerUncheckedCreateNestedManyWithoutAwardInput = {
    create?: XOR<AwardWinnerCreateWithoutAwardInput, AwardWinnerUncheckedCreateWithoutAwardInput> | AwardWinnerCreateWithoutAwardInput[] | AwardWinnerUncheckedCreateWithoutAwardInput[]
    connectOrCreate?: AwardWinnerCreateOrConnectWithoutAwardInput | AwardWinnerCreateOrConnectWithoutAwardInput[]
    createMany?: AwardWinnerCreateManyAwardInputEnvelope
    connect?: AwardWinnerWhereUniqueInput | AwardWinnerWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AwardWinnerUpdateManyWithoutAwardNestedInput = {
    create?: XOR<AwardWinnerCreateWithoutAwardInput, AwardWinnerUncheckedCreateWithoutAwardInput> | AwardWinnerCreateWithoutAwardInput[] | AwardWinnerUncheckedCreateWithoutAwardInput[]
    connectOrCreate?: AwardWinnerCreateOrConnectWithoutAwardInput | AwardWinnerCreateOrConnectWithoutAwardInput[]
    upsert?: AwardWinnerUpsertWithWhereUniqueWithoutAwardInput | AwardWinnerUpsertWithWhereUniqueWithoutAwardInput[]
    createMany?: AwardWinnerCreateManyAwardInputEnvelope
    set?: AwardWinnerWhereUniqueInput | AwardWinnerWhereUniqueInput[]
    disconnect?: AwardWinnerWhereUniqueInput | AwardWinnerWhereUniqueInput[]
    delete?: AwardWinnerWhereUniqueInput | AwardWinnerWhereUniqueInput[]
    connect?: AwardWinnerWhereUniqueInput | AwardWinnerWhereUniqueInput[]
    update?: AwardWinnerUpdateWithWhereUniqueWithoutAwardInput | AwardWinnerUpdateWithWhereUniqueWithoutAwardInput[]
    updateMany?: AwardWinnerUpdateManyWithWhereWithoutAwardInput | AwardWinnerUpdateManyWithWhereWithoutAwardInput[]
    deleteMany?: AwardWinnerScalarWhereInput | AwardWinnerScalarWhereInput[]
  }

  export type AwardWinnerUncheckedUpdateManyWithoutAwardNestedInput = {
    create?: XOR<AwardWinnerCreateWithoutAwardInput, AwardWinnerUncheckedCreateWithoutAwardInput> | AwardWinnerCreateWithoutAwardInput[] | AwardWinnerUncheckedCreateWithoutAwardInput[]
    connectOrCreate?: AwardWinnerCreateOrConnectWithoutAwardInput | AwardWinnerCreateOrConnectWithoutAwardInput[]
    upsert?: AwardWinnerUpsertWithWhereUniqueWithoutAwardInput | AwardWinnerUpsertWithWhereUniqueWithoutAwardInput[]
    createMany?: AwardWinnerCreateManyAwardInputEnvelope
    set?: AwardWinnerWhereUniqueInput | AwardWinnerWhereUniqueInput[]
    disconnect?: AwardWinnerWhereUniqueInput | AwardWinnerWhereUniqueInput[]
    delete?: AwardWinnerWhereUniqueInput | AwardWinnerWhereUniqueInput[]
    connect?: AwardWinnerWhereUniqueInput | AwardWinnerWhereUniqueInput[]
    update?: AwardWinnerUpdateWithWhereUniqueWithoutAwardInput | AwardWinnerUpdateWithWhereUniqueWithoutAwardInput[]
    updateMany?: AwardWinnerUpdateManyWithWhereWithoutAwardInput | AwardWinnerUpdateManyWithWhereWithoutAwardInput[]
    deleteMany?: AwardWinnerScalarWhereInput | AwardWinnerScalarWhereInput[]
  }

  export type WorkCreateNestedOneWithoutAwardWinnersInput = {
    create?: XOR<WorkCreateWithoutAwardWinnersInput, WorkUncheckedCreateWithoutAwardWinnersInput>
    connectOrCreate?: WorkCreateOrConnectWithoutAwardWinnersInput
    connect?: WorkWhereUniqueInput
  }

  export type AwardCreateNestedOneWithoutWinnersInput = {
    create?: XOR<AwardCreateWithoutWinnersInput, AwardUncheckedCreateWithoutWinnersInput>
    connectOrCreate?: AwardCreateOrConnectWithoutWinnersInput
    connect?: AwardWhereUniqueInput
  }

  export type WorkUpdateOneRequiredWithoutAwardWinnersNestedInput = {
    create?: XOR<WorkCreateWithoutAwardWinnersInput, WorkUncheckedCreateWithoutAwardWinnersInput>
    connectOrCreate?: WorkCreateOrConnectWithoutAwardWinnersInput
    upsert?: WorkUpsertWithoutAwardWinnersInput
    connect?: WorkWhereUniqueInput
    update?: XOR<XOR<WorkUpdateToOneWithWhereWithoutAwardWinnersInput, WorkUpdateWithoutAwardWinnersInput>, WorkUncheckedUpdateWithoutAwardWinnersInput>
  }

  export type AwardUpdateOneRequiredWithoutWinnersNestedInput = {
    create?: XOR<AwardCreateWithoutWinnersInput, AwardUncheckedCreateWithoutWinnersInput>
    connectOrCreate?: AwardCreateOrConnectWithoutWinnersInput
    upsert?: AwardUpsertWithoutWinnersInput
    connect?: AwardWhereUniqueInput
    update?: XOR<XOR<AwardUpdateToOneWithWhereWithoutWinnersInput, AwardUpdateWithoutWinnersInput>, AwardUncheckedUpdateWithoutWinnersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BookmarkCreateWithoutUserInput = {
    id?: string
    workId: string
    createdAt?: Date | string
  }

  export type BookmarkUncheckedCreateWithoutUserInput = {
    id?: string
    workId: string
    createdAt?: Date | string
  }

  export type BookmarkCreateOrConnectWithoutUserInput = {
    where: BookmarkWhereUniqueInput
    create: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput>
  }

  export type BookmarkCreateManyUserInputEnvelope = {
    data: BookmarkCreateManyUserInput | BookmarkCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteTrendCreateWithoutUserInput = {
    id?: string
    trendId: string
    trendDate: string
    trendTitle: string
    savedAt?: Date | string
  }

  export type FavoriteTrendUncheckedCreateWithoutUserInput = {
    id?: string
    trendId: string
    trendDate: string
    trendTitle: string
    savedAt?: Date | string
  }

  export type FavoriteTrendCreateOrConnectWithoutUserInput = {
    where: FavoriteTrendWhereUniqueInput
    create: XOR<FavoriteTrendCreateWithoutUserInput, FavoriteTrendUncheckedCreateWithoutUserInput>
  }

  export type FavoriteTrendCreateManyUserInputEnvelope = {
    data: FavoriteTrendCreateManyUserInput | FavoriteTrendCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteArticleCreateWithoutUserInput = {
    id?: string
    articleId: string
    articleTitle: string
    articleSource: string
    articleDate: string
    excerpt?: string | null
    savedAt?: Date | string
  }

  export type FavoriteArticleUncheckedCreateWithoutUserInput = {
    id?: string
    articleId: string
    articleTitle: string
    articleSource: string
    articleDate: string
    excerpt?: string | null
    savedAt?: Date | string
  }

  export type FavoriteArticleCreateOrConnectWithoutUserInput = {
    where: FavoriteArticleWhereUniqueInput
    create: XOR<FavoriteArticleCreateWithoutUserInput, FavoriteArticleUncheckedCreateWithoutUserInput>
  }

  export type FavoriteArticleCreateManyUserInputEnvelope = {
    data: FavoriteArticleCreateManyUserInput | FavoriteArticleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DailyRecommendationCreateWithoutUserInput = {
    id?: string
    bookId: string
    date: string
    reason: string
    createdAt?: Date | string
  }

  export type DailyRecommendationUncheckedCreateWithoutUserInput = {
    id?: string
    bookId: string
    date: string
    reason: string
    createdAt?: Date | string
  }

  export type DailyRecommendationCreateOrConnectWithoutUserInput = {
    where: DailyRecommendationWhereUniqueInput
    create: XOR<DailyRecommendationCreateWithoutUserInput, DailyRecommendationUncheckedCreateWithoutUserInput>
  }

  export type DailyRecommendationCreateManyUserInputEnvelope = {
    data: DailyRecommendationCreateManyUserInput | DailyRecommendationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookmarkUpsertWithWhereUniqueWithoutUserInput = {
    where: BookmarkWhereUniqueInput
    update: XOR<BookmarkUpdateWithoutUserInput, BookmarkUncheckedUpdateWithoutUserInput>
    create: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput>
  }

  export type BookmarkUpdateWithWhereUniqueWithoutUserInput = {
    where: BookmarkWhereUniqueInput
    data: XOR<BookmarkUpdateWithoutUserInput, BookmarkUncheckedUpdateWithoutUserInput>
  }

  export type BookmarkUpdateManyWithWhereWithoutUserInput = {
    where: BookmarkScalarWhereInput
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyWithoutUserInput>
  }

  export type BookmarkScalarWhereInput = {
    AND?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
    OR?: BookmarkScalarWhereInput[]
    NOT?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
    id?: StringFilter<"Bookmark"> | string
    userId?: StringFilter<"Bookmark"> | string
    workId?: StringFilter<"Bookmark"> | string
    createdAt?: DateTimeFilter<"Bookmark"> | Date | string
  }

  export type FavoriteTrendUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteTrendWhereUniqueInput
    update: XOR<FavoriteTrendUpdateWithoutUserInput, FavoriteTrendUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteTrendCreateWithoutUserInput, FavoriteTrendUncheckedCreateWithoutUserInput>
  }

  export type FavoriteTrendUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteTrendWhereUniqueInput
    data: XOR<FavoriteTrendUpdateWithoutUserInput, FavoriteTrendUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteTrendUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteTrendScalarWhereInput
    data: XOR<FavoriteTrendUpdateManyMutationInput, FavoriteTrendUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoriteTrendScalarWhereInput = {
    AND?: FavoriteTrendScalarWhereInput | FavoriteTrendScalarWhereInput[]
    OR?: FavoriteTrendScalarWhereInput[]
    NOT?: FavoriteTrendScalarWhereInput | FavoriteTrendScalarWhereInput[]
    id?: StringFilter<"FavoriteTrend"> | string
    userId?: StringFilter<"FavoriteTrend"> | string
    trendId?: StringFilter<"FavoriteTrend"> | string
    trendDate?: StringFilter<"FavoriteTrend"> | string
    trendTitle?: StringFilter<"FavoriteTrend"> | string
    savedAt?: DateTimeFilter<"FavoriteTrend"> | Date | string
  }

  export type FavoriteArticleUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteArticleWhereUniqueInput
    update: XOR<FavoriteArticleUpdateWithoutUserInput, FavoriteArticleUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteArticleCreateWithoutUserInput, FavoriteArticleUncheckedCreateWithoutUserInput>
  }

  export type FavoriteArticleUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteArticleWhereUniqueInput
    data: XOR<FavoriteArticleUpdateWithoutUserInput, FavoriteArticleUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteArticleUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteArticleScalarWhereInput
    data: XOR<FavoriteArticleUpdateManyMutationInput, FavoriteArticleUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoriteArticleScalarWhereInput = {
    AND?: FavoriteArticleScalarWhereInput | FavoriteArticleScalarWhereInput[]
    OR?: FavoriteArticleScalarWhereInput[]
    NOT?: FavoriteArticleScalarWhereInput | FavoriteArticleScalarWhereInput[]
    id?: StringFilter<"FavoriteArticle"> | string
    userId?: StringFilter<"FavoriteArticle"> | string
    articleId?: StringFilter<"FavoriteArticle"> | string
    articleTitle?: StringFilter<"FavoriteArticle"> | string
    articleSource?: StringFilter<"FavoriteArticle"> | string
    articleDate?: StringFilter<"FavoriteArticle"> | string
    excerpt?: StringNullableFilter<"FavoriteArticle"> | string | null
    savedAt?: DateTimeFilter<"FavoriteArticle"> | Date | string
  }

  export type DailyRecommendationUpsertWithWhereUniqueWithoutUserInput = {
    where: DailyRecommendationWhereUniqueInput
    update: XOR<DailyRecommendationUpdateWithoutUserInput, DailyRecommendationUncheckedUpdateWithoutUserInput>
    create: XOR<DailyRecommendationCreateWithoutUserInput, DailyRecommendationUncheckedCreateWithoutUserInput>
  }

  export type DailyRecommendationUpdateWithWhereUniqueWithoutUserInput = {
    where: DailyRecommendationWhereUniqueInput
    data: XOR<DailyRecommendationUpdateWithoutUserInput, DailyRecommendationUncheckedUpdateWithoutUserInput>
  }

  export type DailyRecommendationUpdateManyWithWhereWithoutUserInput = {
    where: DailyRecommendationScalarWhereInput
    data: XOR<DailyRecommendationUpdateManyMutationInput, DailyRecommendationUncheckedUpdateManyWithoutUserInput>
  }

  export type DailyRecommendationScalarWhereInput = {
    AND?: DailyRecommendationScalarWhereInput | DailyRecommendationScalarWhereInput[]
    OR?: DailyRecommendationScalarWhereInput[]
    NOT?: DailyRecommendationScalarWhereInput | DailyRecommendationScalarWhereInput[]
    id?: StringFilter<"DailyRecommendation"> | string
    userId?: StringFilter<"DailyRecommendation"> | string
    bookId?: StringFilter<"DailyRecommendation"> | string
    date?: StringFilter<"DailyRecommendation"> | string
    reason?: StringFilter<"DailyRecommendation"> | string
    createdAt?: DateTimeFilter<"DailyRecommendation"> | Date | string
  }

  export type UserCreateWithoutBookmarksInput = {
    id?: string
    email: string
    name: string
    passwordHash?: string
    avatar?: string | null
    provider?: string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteTrends?: FavoriteTrendCreateNestedManyWithoutUserInput
    favoriteArticles?: FavoriteArticleCreateNestedManyWithoutUserInput
    dailyRecommendations?: DailyRecommendationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookmarksInput = {
    id?: string
    email: string
    name: string
    passwordHash?: string
    avatar?: string | null
    provider?: string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteTrends?: FavoriteTrendUncheckedCreateNestedManyWithoutUserInput
    favoriteArticles?: FavoriteArticleUncheckedCreateNestedManyWithoutUserInput
    dailyRecommendations?: DailyRecommendationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookmarksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
  }

  export type UserUpsertWithoutBookmarksInput = {
    update: XOR<UserUpdateWithoutBookmarksInput, UserUncheckedUpdateWithoutBookmarksInput>
    create: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookmarksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookmarksInput, UserUncheckedUpdateWithoutBookmarksInput>
  }

  export type UserUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteTrends?: FavoriteTrendUpdateManyWithoutUserNestedInput
    favoriteArticles?: FavoriteArticleUpdateManyWithoutUserNestedInput
    dailyRecommendations?: DailyRecommendationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteTrends?: FavoriteTrendUncheckedUpdateManyWithoutUserNestedInput
    favoriteArticles?: FavoriteArticleUncheckedUpdateManyWithoutUserNestedInput
    dailyRecommendations?: DailyRecommendationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFavoriteTrendsInput = {
    id?: string
    email: string
    name: string
    passwordHash?: string
    avatar?: string | null
    provider?: string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput
    favoriteArticles?: FavoriteArticleCreateNestedManyWithoutUserInput
    dailyRecommendations?: DailyRecommendationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoriteTrendsInput = {
    id?: string
    email: string
    name: string
    passwordHash?: string
    avatar?: string | null
    provider?: string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    favoriteArticles?: FavoriteArticleUncheckedCreateNestedManyWithoutUserInput
    dailyRecommendations?: DailyRecommendationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoriteTrendsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoriteTrendsInput, UserUncheckedCreateWithoutFavoriteTrendsInput>
  }

  export type UserUpsertWithoutFavoriteTrendsInput = {
    update: XOR<UserUpdateWithoutFavoriteTrendsInput, UserUncheckedUpdateWithoutFavoriteTrendsInput>
    create: XOR<UserCreateWithoutFavoriteTrendsInput, UserUncheckedCreateWithoutFavoriteTrendsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoriteTrendsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoriteTrendsInput, UserUncheckedUpdateWithoutFavoriteTrendsInput>
  }

  export type UserUpdateWithoutFavoriteTrendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput
    favoriteArticles?: FavoriteArticleUpdateManyWithoutUserNestedInput
    dailyRecommendations?: DailyRecommendationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoriteTrendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    favoriteArticles?: FavoriteArticleUncheckedUpdateManyWithoutUserNestedInput
    dailyRecommendations?: DailyRecommendationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFavoriteArticlesInput = {
    id?: string
    email: string
    name: string
    passwordHash?: string
    avatar?: string | null
    provider?: string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput
    favoriteTrends?: FavoriteTrendCreateNestedManyWithoutUserInput
    dailyRecommendations?: DailyRecommendationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoriteArticlesInput = {
    id?: string
    email: string
    name: string
    passwordHash?: string
    avatar?: string | null
    provider?: string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    favoriteTrends?: FavoriteTrendUncheckedCreateNestedManyWithoutUserInput
    dailyRecommendations?: DailyRecommendationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoriteArticlesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoriteArticlesInput, UserUncheckedCreateWithoutFavoriteArticlesInput>
  }

  export type UserUpsertWithoutFavoriteArticlesInput = {
    update: XOR<UserUpdateWithoutFavoriteArticlesInput, UserUncheckedUpdateWithoutFavoriteArticlesInput>
    create: XOR<UserCreateWithoutFavoriteArticlesInput, UserUncheckedCreateWithoutFavoriteArticlesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoriteArticlesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoriteArticlesInput, UserUncheckedUpdateWithoutFavoriteArticlesInput>
  }

  export type UserUpdateWithoutFavoriteArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput
    favoriteTrends?: FavoriteTrendUpdateManyWithoutUserNestedInput
    dailyRecommendations?: DailyRecommendationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoriteArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    favoriteTrends?: FavoriteTrendUncheckedUpdateManyWithoutUserNestedInput
    dailyRecommendations?: DailyRecommendationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDailyRecommendationsInput = {
    id?: string
    email: string
    name: string
    passwordHash?: string
    avatar?: string | null
    provider?: string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput
    favoriteTrends?: FavoriteTrendCreateNestedManyWithoutUserInput
    favoriteArticles?: FavoriteArticleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDailyRecommendationsInput = {
    id?: string
    email: string
    name: string
    passwordHash?: string
    avatar?: string | null
    provider?: string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    favoriteTrends?: FavoriteTrendUncheckedCreateNestedManyWithoutUserInput
    favoriteArticles?: FavoriteArticleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDailyRecommendationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDailyRecommendationsInput, UserUncheckedCreateWithoutDailyRecommendationsInput>
  }

  export type UserUpsertWithoutDailyRecommendationsInput = {
    update: XOR<UserUpdateWithoutDailyRecommendationsInput, UserUncheckedUpdateWithoutDailyRecommendationsInput>
    create: XOR<UserCreateWithoutDailyRecommendationsInput, UserUncheckedCreateWithoutDailyRecommendationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDailyRecommendationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDailyRecommendationsInput, UserUncheckedUpdateWithoutDailyRecommendationsInput>
  }

  export type UserUpdateWithoutDailyRecommendationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput
    favoriteTrends?: FavoriteTrendUpdateManyWithoutUserNestedInput
    favoriteArticles?: FavoriteArticleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDailyRecommendationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    favoriteTrends?: FavoriteTrendUncheckedUpdateManyWithoutUserNestedInput
    favoriteArticles?: FavoriteArticleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkDetailCreateWithoutWorkInput = {
    id: string
    characters?: JsonNullValueInput | InputJsonValue
    plotSummary?: string
    plotNodes?: JsonNullValueInput | InputJsonValue
    themeAnalysis?: string
    techniques?: string
    excerpts?: JsonNullValueInput | InputJsonValue
    insights?: string
    sourceAttribution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkDetailUncheckedCreateWithoutWorkInput = {
    id: string
    characters?: JsonNullValueInput | InputJsonValue
    plotSummary?: string
    plotNodes?: JsonNullValueInput | InputJsonValue
    themeAnalysis?: string
    techniques?: string
    excerpts?: JsonNullValueInput | InputJsonValue
    insights?: string
    sourceAttribution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkDetailCreateOrConnectWithoutWorkInput = {
    where: WorkDetailWhereUniqueInput
    create: XOR<WorkDetailCreateWithoutWorkInput, WorkDetailUncheckedCreateWithoutWorkInput>
  }

  export type WorkCharacterCreateWithoutWorkInput = {
    id?: string
    name: string
    role: string
    description: string
  }

  export type WorkCharacterUncheckedCreateWithoutWorkInput = {
    id?: string
    name: string
    role: string
    description: string
  }

  export type WorkCharacterCreateOrConnectWithoutWorkInput = {
    where: WorkCharacterWhereUniqueInput
    create: XOR<WorkCharacterCreateWithoutWorkInput, WorkCharacterUncheckedCreateWithoutWorkInput>
  }

  export type WorkCharacterCreateManyWorkInputEnvelope = {
    data: WorkCharacterCreateManyWorkInput | WorkCharacterCreateManyWorkInput[]
    skipDuplicates?: boolean
  }

  export type BgImageCreateWithoutWorkInput = {
    id?: string
    url?: string
    status?: string
    source?: string
    photographer?: string
    photographerUrl?: string
    searchQuery?: string
    fetchedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BgImageUncheckedCreateWithoutWorkInput = {
    id?: string
    url?: string
    status?: string
    source?: string
    photographer?: string
    photographerUrl?: string
    searchQuery?: string
    fetchedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BgImageCreateOrConnectWithoutWorkInput = {
    where: BgImageWhereUniqueInput
    create: XOR<BgImageCreateWithoutWorkInput, BgImageUncheckedCreateWithoutWorkInput>
  }

  export type AwardWinnerCreateWithoutWorkInput = {
    id?: string
    year: number
    category?: string | null
    award: AwardCreateNestedOneWithoutWinnersInput
  }

  export type AwardWinnerUncheckedCreateWithoutWorkInput = {
    id?: string
    awardSlug: string
    year: number
    category?: string | null
  }

  export type AwardWinnerCreateOrConnectWithoutWorkInput = {
    where: AwardWinnerWhereUniqueInput
    create: XOR<AwardWinnerCreateWithoutWorkInput, AwardWinnerUncheckedCreateWithoutWorkInput>
  }

  export type AwardWinnerCreateManyWorkInputEnvelope = {
    data: AwardWinnerCreateManyWorkInput | AwardWinnerCreateManyWorkInput[]
    skipDuplicates?: boolean
  }

  export type WorkDetailUpsertWithoutWorkInput = {
    update: XOR<WorkDetailUpdateWithoutWorkInput, WorkDetailUncheckedUpdateWithoutWorkInput>
    create: XOR<WorkDetailCreateWithoutWorkInput, WorkDetailUncheckedCreateWithoutWorkInput>
    where?: WorkDetailWhereInput
  }

  export type WorkDetailUpdateToOneWithWhereWithoutWorkInput = {
    where?: WorkDetailWhereInput
    data: XOR<WorkDetailUpdateWithoutWorkInput, WorkDetailUncheckedUpdateWithoutWorkInput>
  }

  export type WorkDetailUpdateWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    characters?: JsonNullValueInput | InputJsonValue
    plotSummary?: StringFieldUpdateOperationsInput | string
    plotNodes?: JsonNullValueInput | InputJsonValue
    themeAnalysis?: StringFieldUpdateOperationsInput | string
    techniques?: StringFieldUpdateOperationsInput | string
    excerpts?: JsonNullValueInput | InputJsonValue
    insights?: StringFieldUpdateOperationsInput | string
    sourceAttribution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkDetailUncheckedUpdateWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    characters?: JsonNullValueInput | InputJsonValue
    plotSummary?: StringFieldUpdateOperationsInput | string
    plotNodes?: JsonNullValueInput | InputJsonValue
    themeAnalysis?: StringFieldUpdateOperationsInput | string
    techniques?: StringFieldUpdateOperationsInput | string
    excerpts?: JsonNullValueInput | InputJsonValue
    insights?: StringFieldUpdateOperationsInput | string
    sourceAttribution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkCharacterUpsertWithWhereUniqueWithoutWorkInput = {
    where: WorkCharacterWhereUniqueInput
    update: XOR<WorkCharacterUpdateWithoutWorkInput, WorkCharacterUncheckedUpdateWithoutWorkInput>
    create: XOR<WorkCharacterCreateWithoutWorkInput, WorkCharacterUncheckedCreateWithoutWorkInput>
  }

  export type WorkCharacterUpdateWithWhereUniqueWithoutWorkInput = {
    where: WorkCharacterWhereUniqueInput
    data: XOR<WorkCharacterUpdateWithoutWorkInput, WorkCharacterUncheckedUpdateWithoutWorkInput>
  }

  export type WorkCharacterUpdateManyWithWhereWithoutWorkInput = {
    where: WorkCharacterScalarWhereInput
    data: XOR<WorkCharacterUpdateManyMutationInput, WorkCharacterUncheckedUpdateManyWithoutWorkInput>
  }

  export type WorkCharacterScalarWhereInput = {
    AND?: WorkCharacterScalarWhereInput | WorkCharacterScalarWhereInput[]
    OR?: WorkCharacterScalarWhereInput[]
    NOT?: WorkCharacterScalarWhereInput | WorkCharacterScalarWhereInput[]
    id?: StringFilter<"WorkCharacter"> | string
    workId?: StringFilter<"WorkCharacter"> | string
    name?: StringFilter<"WorkCharacter"> | string
    role?: StringFilter<"WorkCharacter"> | string
    description?: StringFilter<"WorkCharacter"> | string
  }

  export type BgImageUpsertWithoutWorkInput = {
    update: XOR<BgImageUpdateWithoutWorkInput, BgImageUncheckedUpdateWithoutWorkInput>
    create: XOR<BgImageCreateWithoutWorkInput, BgImageUncheckedCreateWithoutWorkInput>
    where?: BgImageWhereInput
  }

  export type BgImageUpdateToOneWithWhereWithoutWorkInput = {
    where?: BgImageWhereInput
    data: XOR<BgImageUpdateWithoutWorkInput, BgImageUncheckedUpdateWithoutWorkInput>
  }

  export type BgImageUpdateWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    photographer?: StringFieldUpdateOperationsInput | string
    photographerUrl?: StringFieldUpdateOperationsInput | string
    searchQuery?: StringFieldUpdateOperationsInput | string
    fetchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BgImageUncheckedUpdateWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    photographer?: StringFieldUpdateOperationsInput | string
    photographerUrl?: StringFieldUpdateOperationsInput | string
    searchQuery?: StringFieldUpdateOperationsInput | string
    fetchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AwardWinnerUpsertWithWhereUniqueWithoutWorkInput = {
    where: AwardWinnerWhereUniqueInput
    update: XOR<AwardWinnerUpdateWithoutWorkInput, AwardWinnerUncheckedUpdateWithoutWorkInput>
    create: XOR<AwardWinnerCreateWithoutWorkInput, AwardWinnerUncheckedCreateWithoutWorkInput>
  }

  export type AwardWinnerUpdateWithWhereUniqueWithoutWorkInput = {
    where: AwardWinnerWhereUniqueInput
    data: XOR<AwardWinnerUpdateWithoutWorkInput, AwardWinnerUncheckedUpdateWithoutWorkInput>
  }

  export type AwardWinnerUpdateManyWithWhereWithoutWorkInput = {
    where: AwardWinnerScalarWhereInput
    data: XOR<AwardWinnerUpdateManyMutationInput, AwardWinnerUncheckedUpdateManyWithoutWorkInput>
  }

  export type AwardWinnerScalarWhereInput = {
    AND?: AwardWinnerScalarWhereInput | AwardWinnerScalarWhereInput[]
    OR?: AwardWinnerScalarWhereInput[]
    NOT?: AwardWinnerScalarWhereInput | AwardWinnerScalarWhereInput[]
    id?: StringFilter<"AwardWinner"> | string
    workId?: StringFilter<"AwardWinner"> | string
    awardSlug?: StringFilter<"AwardWinner"> | string
    year?: IntFilter<"AwardWinner"> | number
    category?: StringNullableFilter<"AwardWinner"> | string | null
  }

  export type WorkCreateWithoutDetailInput = {
    id: string
    title: string
    titleEn: string
    author: string
    country: string
    flag?: string
    continent: string
    era: string
    genres?: JsonNullValueInput | InputJsonValue
    themes?: JsonNullValueInput | InputJsonValue
    excerpt?: string
    gradient?: string
    year?: number | null
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    characters?: WorkCharacterCreateNestedManyWithoutWorkInput
    bgImage?: BgImageCreateNestedOneWithoutWorkInput
    awardWinners?: AwardWinnerCreateNestedManyWithoutWorkInput
  }

  export type WorkUncheckedCreateWithoutDetailInput = {
    id: string
    title: string
    titleEn: string
    author: string
    country: string
    flag?: string
    continent: string
    era: string
    genres?: JsonNullValueInput | InputJsonValue
    themes?: JsonNullValueInput | InputJsonValue
    excerpt?: string
    gradient?: string
    year?: number | null
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    characters?: WorkCharacterUncheckedCreateNestedManyWithoutWorkInput
    bgImage?: BgImageUncheckedCreateNestedOneWithoutWorkInput
    awardWinners?: AwardWinnerUncheckedCreateNestedManyWithoutWorkInput
  }

  export type WorkCreateOrConnectWithoutDetailInput = {
    where: WorkWhereUniqueInput
    create: XOR<WorkCreateWithoutDetailInput, WorkUncheckedCreateWithoutDetailInput>
  }

  export type WorkUpsertWithoutDetailInput = {
    update: XOR<WorkUpdateWithoutDetailInput, WorkUncheckedUpdateWithoutDetailInput>
    create: XOR<WorkCreateWithoutDetailInput, WorkUncheckedCreateWithoutDetailInput>
    where?: WorkWhereInput
  }

  export type WorkUpdateToOneWithWhereWithoutDetailInput = {
    where?: WorkWhereInput
    data: XOR<WorkUpdateWithoutDetailInput, WorkUncheckedUpdateWithoutDetailInput>
  }

  export type WorkUpdateWithoutDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    continent?: StringFieldUpdateOperationsInput | string
    era?: StringFieldUpdateOperationsInput | string
    genres?: JsonNullValueInput | InputJsonValue
    themes?: JsonNullValueInput | InputJsonValue
    excerpt?: StringFieldUpdateOperationsInput | string
    gradient?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characters?: WorkCharacterUpdateManyWithoutWorkNestedInput
    bgImage?: BgImageUpdateOneWithoutWorkNestedInput
    awardWinners?: AwardWinnerUpdateManyWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateWithoutDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    continent?: StringFieldUpdateOperationsInput | string
    era?: StringFieldUpdateOperationsInput | string
    genres?: JsonNullValueInput | InputJsonValue
    themes?: JsonNullValueInput | InputJsonValue
    excerpt?: StringFieldUpdateOperationsInput | string
    gradient?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characters?: WorkCharacterUncheckedUpdateManyWithoutWorkNestedInput
    bgImage?: BgImageUncheckedUpdateOneWithoutWorkNestedInput
    awardWinners?: AwardWinnerUncheckedUpdateManyWithoutWorkNestedInput
  }

  export type WorkCreateWithoutCharactersInput = {
    id: string
    title: string
    titleEn: string
    author: string
    country: string
    flag?: string
    continent: string
    era: string
    genres?: JsonNullValueInput | InputJsonValue
    themes?: JsonNullValueInput | InputJsonValue
    excerpt?: string
    gradient?: string
    year?: number | null
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    detail?: WorkDetailCreateNestedOneWithoutWorkInput
    bgImage?: BgImageCreateNestedOneWithoutWorkInput
    awardWinners?: AwardWinnerCreateNestedManyWithoutWorkInput
  }

  export type WorkUncheckedCreateWithoutCharactersInput = {
    id: string
    title: string
    titleEn: string
    author: string
    country: string
    flag?: string
    continent: string
    era: string
    genres?: JsonNullValueInput | InputJsonValue
    themes?: JsonNullValueInput | InputJsonValue
    excerpt?: string
    gradient?: string
    year?: number | null
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    detail?: WorkDetailUncheckedCreateNestedOneWithoutWorkInput
    bgImage?: BgImageUncheckedCreateNestedOneWithoutWorkInput
    awardWinners?: AwardWinnerUncheckedCreateNestedManyWithoutWorkInput
  }

  export type WorkCreateOrConnectWithoutCharactersInput = {
    where: WorkWhereUniqueInput
    create: XOR<WorkCreateWithoutCharactersInput, WorkUncheckedCreateWithoutCharactersInput>
  }

  export type WorkUpsertWithoutCharactersInput = {
    update: XOR<WorkUpdateWithoutCharactersInput, WorkUncheckedUpdateWithoutCharactersInput>
    create: XOR<WorkCreateWithoutCharactersInput, WorkUncheckedCreateWithoutCharactersInput>
    where?: WorkWhereInput
  }

  export type WorkUpdateToOneWithWhereWithoutCharactersInput = {
    where?: WorkWhereInput
    data: XOR<WorkUpdateWithoutCharactersInput, WorkUncheckedUpdateWithoutCharactersInput>
  }

  export type WorkUpdateWithoutCharactersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    continent?: StringFieldUpdateOperationsInput | string
    era?: StringFieldUpdateOperationsInput | string
    genres?: JsonNullValueInput | InputJsonValue
    themes?: JsonNullValueInput | InputJsonValue
    excerpt?: StringFieldUpdateOperationsInput | string
    gradient?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detail?: WorkDetailUpdateOneWithoutWorkNestedInput
    bgImage?: BgImageUpdateOneWithoutWorkNestedInput
    awardWinners?: AwardWinnerUpdateManyWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateWithoutCharactersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    continent?: StringFieldUpdateOperationsInput | string
    era?: StringFieldUpdateOperationsInput | string
    genres?: JsonNullValueInput | InputJsonValue
    themes?: JsonNullValueInput | InputJsonValue
    excerpt?: StringFieldUpdateOperationsInput | string
    gradient?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detail?: WorkDetailUncheckedUpdateOneWithoutWorkNestedInput
    bgImage?: BgImageUncheckedUpdateOneWithoutWorkNestedInput
    awardWinners?: AwardWinnerUncheckedUpdateManyWithoutWorkNestedInput
  }

  export type WorkCreateWithoutBgImageInput = {
    id: string
    title: string
    titleEn: string
    author: string
    country: string
    flag?: string
    continent: string
    era: string
    genres?: JsonNullValueInput | InputJsonValue
    themes?: JsonNullValueInput | InputJsonValue
    excerpt?: string
    gradient?: string
    year?: number | null
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    detail?: WorkDetailCreateNestedOneWithoutWorkInput
    characters?: WorkCharacterCreateNestedManyWithoutWorkInput
    awardWinners?: AwardWinnerCreateNestedManyWithoutWorkInput
  }

  export type WorkUncheckedCreateWithoutBgImageInput = {
    id: string
    title: string
    titleEn: string
    author: string
    country: string
    flag?: string
    continent: string
    era: string
    genres?: JsonNullValueInput | InputJsonValue
    themes?: JsonNullValueInput | InputJsonValue
    excerpt?: string
    gradient?: string
    year?: number | null
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    detail?: WorkDetailUncheckedCreateNestedOneWithoutWorkInput
    characters?: WorkCharacterUncheckedCreateNestedManyWithoutWorkInput
    awardWinners?: AwardWinnerUncheckedCreateNestedManyWithoutWorkInput
  }

  export type WorkCreateOrConnectWithoutBgImageInput = {
    where: WorkWhereUniqueInput
    create: XOR<WorkCreateWithoutBgImageInput, WorkUncheckedCreateWithoutBgImageInput>
  }

  export type WorkUpsertWithoutBgImageInput = {
    update: XOR<WorkUpdateWithoutBgImageInput, WorkUncheckedUpdateWithoutBgImageInput>
    create: XOR<WorkCreateWithoutBgImageInput, WorkUncheckedCreateWithoutBgImageInput>
    where?: WorkWhereInput
  }

  export type WorkUpdateToOneWithWhereWithoutBgImageInput = {
    where?: WorkWhereInput
    data: XOR<WorkUpdateWithoutBgImageInput, WorkUncheckedUpdateWithoutBgImageInput>
  }

  export type WorkUpdateWithoutBgImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    continent?: StringFieldUpdateOperationsInput | string
    era?: StringFieldUpdateOperationsInput | string
    genres?: JsonNullValueInput | InputJsonValue
    themes?: JsonNullValueInput | InputJsonValue
    excerpt?: StringFieldUpdateOperationsInput | string
    gradient?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detail?: WorkDetailUpdateOneWithoutWorkNestedInput
    characters?: WorkCharacterUpdateManyWithoutWorkNestedInput
    awardWinners?: AwardWinnerUpdateManyWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateWithoutBgImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    continent?: StringFieldUpdateOperationsInput | string
    era?: StringFieldUpdateOperationsInput | string
    genres?: JsonNullValueInput | InputJsonValue
    themes?: JsonNullValueInput | InputJsonValue
    excerpt?: StringFieldUpdateOperationsInput | string
    gradient?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detail?: WorkDetailUncheckedUpdateOneWithoutWorkNestedInput
    characters?: WorkCharacterUncheckedUpdateManyWithoutWorkNestedInput
    awardWinners?: AwardWinnerUncheckedUpdateManyWithoutWorkNestedInput
  }

  export type AwardWinnerCreateWithoutAwardInput = {
    id?: string
    year: number
    category?: string | null
    work: WorkCreateNestedOneWithoutAwardWinnersInput
  }

  export type AwardWinnerUncheckedCreateWithoutAwardInput = {
    id?: string
    workId: string
    year: number
    category?: string | null
  }

  export type AwardWinnerCreateOrConnectWithoutAwardInput = {
    where: AwardWinnerWhereUniqueInput
    create: XOR<AwardWinnerCreateWithoutAwardInput, AwardWinnerUncheckedCreateWithoutAwardInput>
  }

  export type AwardWinnerCreateManyAwardInputEnvelope = {
    data: AwardWinnerCreateManyAwardInput | AwardWinnerCreateManyAwardInput[]
    skipDuplicates?: boolean
  }

  export type AwardWinnerUpsertWithWhereUniqueWithoutAwardInput = {
    where: AwardWinnerWhereUniqueInput
    update: XOR<AwardWinnerUpdateWithoutAwardInput, AwardWinnerUncheckedUpdateWithoutAwardInput>
    create: XOR<AwardWinnerCreateWithoutAwardInput, AwardWinnerUncheckedCreateWithoutAwardInput>
  }

  export type AwardWinnerUpdateWithWhereUniqueWithoutAwardInput = {
    where: AwardWinnerWhereUniqueInput
    data: XOR<AwardWinnerUpdateWithoutAwardInput, AwardWinnerUncheckedUpdateWithoutAwardInput>
  }

  export type AwardWinnerUpdateManyWithWhereWithoutAwardInput = {
    where: AwardWinnerScalarWhereInput
    data: XOR<AwardWinnerUpdateManyMutationInput, AwardWinnerUncheckedUpdateManyWithoutAwardInput>
  }

  export type WorkCreateWithoutAwardWinnersInput = {
    id: string
    title: string
    titleEn: string
    author: string
    country: string
    flag?: string
    continent: string
    era: string
    genres?: JsonNullValueInput | InputJsonValue
    themes?: JsonNullValueInput | InputJsonValue
    excerpt?: string
    gradient?: string
    year?: number | null
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    detail?: WorkDetailCreateNestedOneWithoutWorkInput
    characters?: WorkCharacterCreateNestedManyWithoutWorkInput
    bgImage?: BgImageCreateNestedOneWithoutWorkInput
  }

  export type WorkUncheckedCreateWithoutAwardWinnersInput = {
    id: string
    title: string
    titleEn: string
    author: string
    country: string
    flag?: string
    continent: string
    era: string
    genres?: JsonNullValueInput | InputJsonValue
    themes?: JsonNullValueInput | InputJsonValue
    excerpt?: string
    gradient?: string
    year?: number | null
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    detail?: WorkDetailUncheckedCreateNestedOneWithoutWorkInput
    characters?: WorkCharacterUncheckedCreateNestedManyWithoutWorkInput
    bgImage?: BgImageUncheckedCreateNestedOneWithoutWorkInput
  }

  export type WorkCreateOrConnectWithoutAwardWinnersInput = {
    where: WorkWhereUniqueInput
    create: XOR<WorkCreateWithoutAwardWinnersInput, WorkUncheckedCreateWithoutAwardWinnersInput>
  }

  export type AwardCreateWithoutWinnersInput = {
    slug: string
    name: string
    nameEn: string
    description: string
    established: number
    country: string
    flag: string
    frequency: string
    category: string
    gradient: string
    icon: string
    website?: string | null
    introduction: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AwardUncheckedCreateWithoutWinnersInput = {
    slug: string
    name: string
    nameEn: string
    description: string
    established: number
    country: string
    flag: string
    frequency: string
    category: string
    gradient: string
    icon: string
    website?: string | null
    introduction: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AwardCreateOrConnectWithoutWinnersInput = {
    where: AwardWhereUniqueInput
    create: XOR<AwardCreateWithoutWinnersInput, AwardUncheckedCreateWithoutWinnersInput>
  }

  export type WorkUpsertWithoutAwardWinnersInput = {
    update: XOR<WorkUpdateWithoutAwardWinnersInput, WorkUncheckedUpdateWithoutAwardWinnersInput>
    create: XOR<WorkCreateWithoutAwardWinnersInput, WorkUncheckedCreateWithoutAwardWinnersInput>
    where?: WorkWhereInput
  }

  export type WorkUpdateToOneWithWhereWithoutAwardWinnersInput = {
    where?: WorkWhereInput
    data: XOR<WorkUpdateWithoutAwardWinnersInput, WorkUncheckedUpdateWithoutAwardWinnersInput>
  }

  export type WorkUpdateWithoutAwardWinnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    continent?: StringFieldUpdateOperationsInput | string
    era?: StringFieldUpdateOperationsInput | string
    genres?: JsonNullValueInput | InputJsonValue
    themes?: JsonNullValueInput | InputJsonValue
    excerpt?: StringFieldUpdateOperationsInput | string
    gradient?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detail?: WorkDetailUpdateOneWithoutWorkNestedInput
    characters?: WorkCharacterUpdateManyWithoutWorkNestedInput
    bgImage?: BgImageUpdateOneWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateWithoutAwardWinnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    continent?: StringFieldUpdateOperationsInput | string
    era?: StringFieldUpdateOperationsInput | string
    genres?: JsonNullValueInput | InputJsonValue
    themes?: JsonNullValueInput | InputJsonValue
    excerpt?: StringFieldUpdateOperationsInput | string
    gradient?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detail?: WorkDetailUncheckedUpdateOneWithoutWorkNestedInput
    characters?: WorkCharacterUncheckedUpdateManyWithoutWorkNestedInput
    bgImage?: BgImageUncheckedUpdateOneWithoutWorkNestedInput
  }

  export type AwardUpsertWithoutWinnersInput = {
    update: XOR<AwardUpdateWithoutWinnersInput, AwardUncheckedUpdateWithoutWinnersInput>
    create: XOR<AwardCreateWithoutWinnersInput, AwardUncheckedCreateWithoutWinnersInput>
    where?: AwardWhereInput
  }

  export type AwardUpdateToOneWithWhereWithoutWinnersInput = {
    where?: AwardWhereInput
    data: XOR<AwardUpdateWithoutWinnersInput, AwardUncheckedUpdateWithoutWinnersInput>
  }

  export type AwardUpdateWithoutWinnersInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    established?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    gradient?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AwardUncheckedUpdateWithoutWinnersInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    established?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    gradient?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkCreateManyUserInput = {
    id?: string
    workId: string
    createdAt?: Date | string
  }

  export type FavoriteTrendCreateManyUserInput = {
    id?: string
    trendId: string
    trendDate: string
    trendTitle: string
    savedAt?: Date | string
  }

  export type FavoriteArticleCreateManyUserInput = {
    id?: string
    articleId: string
    articleTitle: string
    articleSource: string
    articleDate: string
    excerpt?: string | null
    savedAt?: Date | string
  }

  export type DailyRecommendationCreateManyUserInput = {
    id?: string
    bookId: string
    date: string
    reason: string
    createdAt?: Date | string
  }

  export type BookmarkUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    workId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    workId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    workId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteTrendUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    trendId?: StringFieldUpdateOperationsInput | string
    trendDate?: StringFieldUpdateOperationsInput | string
    trendTitle?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteTrendUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    trendId?: StringFieldUpdateOperationsInput | string
    trendDate?: StringFieldUpdateOperationsInput | string
    trendTitle?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteTrendUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    trendId?: StringFieldUpdateOperationsInput | string
    trendDate?: StringFieldUpdateOperationsInput | string
    trendTitle?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteArticleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    articleTitle?: StringFieldUpdateOperationsInput | string
    articleSource?: StringFieldUpdateOperationsInput | string
    articleDate?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteArticleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    articleTitle?: StringFieldUpdateOperationsInput | string
    articleSource?: StringFieldUpdateOperationsInput | string
    articleDate?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteArticleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    articleTitle?: StringFieldUpdateOperationsInput | string
    articleSource?: StringFieldUpdateOperationsInput | string
    articleDate?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyRecommendationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyRecommendationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyRecommendationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkCharacterCreateManyWorkInput = {
    id?: string
    name: string
    role: string
    description: string
  }

  export type AwardWinnerCreateManyWorkInput = {
    id?: string
    awardSlug: string
    year: number
    category?: string | null
  }

  export type WorkCharacterUpdateWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type WorkCharacterUncheckedUpdateWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type WorkCharacterUncheckedUpdateManyWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type AwardWinnerUpdateWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    award?: AwardUpdateOneRequiredWithoutWinnersNestedInput
  }

  export type AwardWinnerUncheckedUpdateWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    awardSlug?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AwardWinnerUncheckedUpdateManyWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    awardSlug?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AwardWinnerCreateManyAwardInput = {
    id?: string
    workId: string
    year: number
    category?: string | null
  }

  export type AwardWinnerUpdateWithoutAwardInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    work?: WorkUpdateOneRequiredWithoutAwardWinnersNestedInput
  }

  export type AwardWinnerUncheckedUpdateWithoutAwardInput = {
    id?: StringFieldUpdateOperationsInput | string
    workId?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AwardWinnerUncheckedUpdateManyWithoutAwardInput = {
    id?: StringFieldUpdateOperationsInput | string
    workId?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
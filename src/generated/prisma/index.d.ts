
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Familia
 * 
 */
export type Familia = $Result.DefaultSelection<Prisma.$FamiliaPayload>
/**
 * Model familia_usuarios
 * 
 */
export type familia_usuarios = $Result.DefaultSelection<Prisma.$familia_usuariosPayload>
/**
 * Model ListaDeCompra
 * 
 */
export type ListaDeCompra = $Result.DefaultSelection<Prisma.$ListaDeCompraPayload>
/**
 * Model ItemListaDeCompra
 * 
 */
export type ItemListaDeCompra = $Result.DefaultSelection<Prisma.$ItemListaDeCompraPayload>
/**
 * Model Veiculo
 * 
 */
export type Veiculo = $Result.DefaultSelection<Prisma.$VeiculoPayload>
/**
 * Model RegistroDeManutencao
 * 
 */
export type RegistroDeManutencao = $Result.DefaultSelection<Prisma.$RegistroDeManutencaoPayload>
/**
 * Model Lembrete
 * 
 */
export type Lembrete = $Result.DefaultSelection<Prisma.$LembretePayload>
/**
 * Model Tarefa
 * 
 */
export type Tarefa = $Result.DefaultSelection<Prisma.$TarefaPayload>
/**
 * Model Atividade
 * 
 */
export type Atividade = $Result.DefaultSelection<Prisma.$AtividadePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoAtividade: {
  LEMBRETE: 'LEMBRETE',
  TAREFA: 'TAREFA',
  LISTA: 'LISTA',
  VEICULO: 'VEICULO'
};

export type TipoAtividade = (typeof TipoAtividade)[keyof typeof TipoAtividade]


export const AcaoAtividade: {
  CRIADA: 'CRIADA',
  ATUALIZADA: 'ATUALIZADA',
  EXCLUIDA: 'EXCLUIDA'
};

export type AcaoAtividade = (typeof AcaoAtividade)[keyof typeof AcaoAtividade]


export const Rotulo: {
  PAIS: 'PAIS',
  FILHO: 'FILHO'
};

export type Rotulo = (typeof Rotulo)[keyof typeof Rotulo]

}

export type TipoAtividade = $Enums.TipoAtividade

export const TipoAtividade: typeof $Enums.TipoAtividade

export type AcaoAtividade = $Enums.AcaoAtividade

export const AcaoAtividade: typeof $Enums.AcaoAtividade

export type Rotulo = $Enums.Rotulo

export const Rotulo: typeof $Enums.Rotulo

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.familia`: Exposes CRUD operations for the **Familia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Familias
    * const familias = await prisma.familia.findMany()
    * ```
    */
  get familia(): Prisma.FamiliaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.familia_usuarios`: Exposes CRUD operations for the **familia_usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Familia_usuarios
    * const familia_usuarios = await prisma.familia_usuarios.findMany()
    * ```
    */
  get familia_usuarios(): Prisma.familia_usuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listaDeCompra`: Exposes CRUD operations for the **ListaDeCompra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListaDeCompras
    * const listaDeCompras = await prisma.listaDeCompra.findMany()
    * ```
    */
  get listaDeCompra(): Prisma.ListaDeCompraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemListaDeCompra`: Exposes CRUD operations for the **ItemListaDeCompra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemListaDeCompras
    * const itemListaDeCompras = await prisma.itemListaDeCompra.findMany()
    * ```
    */
  get itemListaDeCompra(): Prisma.ItemListaDeCompraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.veiculo`: Exposes CRUD operations for the **Veiculo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Veiculos
    * const veiculos = await prisma.veiculo.findMany()
    * ```
    */
  get veiculo(): Prisma.VeiculoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registroDeManutencao`: Exposes CRUD operations for the **RegistroDeManutencao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegistroDeManutencaos
    * const registroDeManutencaos = await prisma.registroDeManutencao.findMany()
    * ```
    */
  get registroDeManutencao(): Prisma.RegistroDeManutencaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lembrete`: Exposes CRUD operations for the **Lembrete** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lembretes
    * const lembretes = await prisma.lembrete.findMany()
    * ```
    */
  get lembrete(): Prisma.LembreteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tarefa`: Exposes CRUD operations for the **Tarefa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tarefas
    * const tarefas = await prisma.tarefa.findMany()
    * ```
    */
  get tarefa(): Prisma.TarefaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.atividade`: Exposes CRUD operations for the **Atividade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Atividades
    * const atividades = await prisma.atividade.findMany()
    * ```
    */
  get atividade(): Prisma.AtividadeDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Usuario: 'Usuario',
    Familia: 'Familia',
    familia_usuarios: 'familia_usuarios',
    ListaDeCompra: 'ListaDeCompra',
    ItemListaDeCompra: 'ItemListaDeCompra',
    Veiculo: 'Veiculo',
    RegistroDeManutencao: 'RegistroDeManutencao',
    Lembrete: 'Lembrete',
    Tarefa: 'Tarefa',
    Atividade: 'Atividade'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "familia" | "familia_usuarios" | "listaDeCompra" | "itemListaDeCompra" | "veiculo" | "registroDeManutencao" | "lembrete" | "tarefa" | "atividade"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Familia: {
        payload: Prisma.$FamiliaPayload<ExtArgs>
        fields: Prisma.FamiliaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FamiliaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamiliaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FamiliaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamiliaPayload>
          }
          findFirst: {
            args: Prisma.FamiliaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamiliaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FamiliaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamiliaPayload>
          }
          findMany: {
            args: Prisma.FamiliaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamiliaPayload>[]
          }
          create: {
            args: Prisma.FamiliaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamiliaPayload>
          }
          createMany: {
            args: Prisma.FamiliaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FamiliaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamiliaPayload>[]
          }
          delete: {
            args: Prisma.FamiliaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamiliaPayload>
          }
          update: {
            args: Prisma.FamiliaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamiliaPayload>
          }
          deleteMany: {
            args: Prisma.FamiliaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FamiliaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FamiliaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamiliaPayload>[]
          }
          upsert: {
            args: Prisma.FamiliaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamiliaPayload>
          }
          aggregate: {
            args: Prisma.FamiliaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFamilia>
          }
          groupBy: {
            args: Prisma.FamiliaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FamiliaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FamiliaCountArgs<ExtArgs>
            result: $Utils.Optional<FamiliaCountAggregateOutputType> | number
          }
        }
      }
      familia_usuarios: {
        payload: Prisma.$familia_usuariosPayload<ExtArgs>
        fields: Prisma.familia_usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.familia_usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familia_usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.familia_usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familia_usuariosPayload>
          }
          findFirst: {
            args: Prisma.familia_usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familia_usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.familia_usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familia_usuariosPayload>
          }
          findMany: {
            args: Prisma.familia_usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familia_usuariosPayload>[]
          }
          create: {
            args: Prisma.familia_usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familia_usuariosPayload>
          }
          createMany: {
            args: Prisma.familia_usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.familia_usuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familia_usuariosPayload>[]
          }
          delete: {
            args: Prisma.familia_usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familia_usuariosPayload>
          }
          update: {
            args: Prisma.familia_usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familia_usuariosPayload>
          }
          deleteMany: {
            args: Prisma.familia_usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.familia_usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.familia_usuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familia_usuariosPayload>[]
          }
          upsert: {
            args: Prisma.familia_usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familia_usuariosPayload>
          }
          aggregate: {
            args: Prisma.Familia_usuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFamilia_usuarios>
          }
          groupBy: {
            args: Prisma.familia_usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Familia_usuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.familia_usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<Familia_usuariosCountAggregateOutputType> | number
          }
        }
      }
      ListaDeCompra: {
        payload: Prisma.$ListaDeCompraPayload<ExtArgs>
        fields: Prisma.ListaDeCompraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListaDeCompraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeCompraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListaDeCompraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeCompraPayload>
          }
          findFirst: {
            args: Prisma.ListaDeCompraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeCompraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListaDeCompraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeCompraPayload>
          }
          findMany: {
            args: Prisma.ListaDeCompraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeCompraPayload>[]
          }
          create: {
            args: Prisma.ListaDeCompraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeCompraPayload>
          }
          createMany: {
            args: Prisma.ListaDeCompraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListaDeCompraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeCompraPayload>[]
          }
          delete: {
            args: Prisma.ListaDeCompraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeCompraPayload>
          }
          update: {
            args: Prisma.ListaDeCompraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeCompraPayload>
          }
          deleteMany: {
            args: Prisma.ListaDeCompraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListaDeCompraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListaDeCompraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeCompraPayload>[]
          }
          upsert: {
            args: Prisma.ListaDeCompraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeCompraPayload>
          }
          aggregate: {
            args: Prisma.ListaDeCompraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListaDeCompra>
          }
          groupBy: {
            args: Prisma.ListaDeCompraGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListaDeCompraGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListaDeCompraCountArgs<ExtArgs>
            result: $Utils.Optional<ListaDeCompraCountAggregateOutputType> | number
          }
        }
      }
      ItemListaDeCompra: {
        payload: Prisma.$ItemListaDeCompraPayload<ExtArgs>
        fields: Prisma.ItemListaDeCompraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemListaDeCompraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaDeCompraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemListaDeCompraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaDeCompraPayload>
          }
          findFirst: {
            args: Prisma.ItemListaDeCompraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaDeCompraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemListaDeCompraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaDeCompraPayload>
          }
          findMany: {
            args: Prisma.ItemListaDeCompraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaDeCompraPayload>[]
          }
          create: {
            args: Prisma.ItemListaDeCompraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaDeCompraPayload>
          }
          createMany: {
            args: Prisma.ItemListaDeCompraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemListaDeCompraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaDeCompraPayload>[]
          }
          delete: {
            args: Prisma.ItemListaDeCompraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaDeCompraPayload>
          }
          update: {
            args: Prisma.ItemListaDeCompraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaDeCompraPayload>
          }
          deleteMany: {
            args: Prisma.ItemListaDeCompraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemListaDeCompraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemListaDeCompraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaDeCompraPayload>[]
          }
          upsert: {
            args: Prisma.ItemListaDeCompraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaDeCompraPayload>
          }
          aggregate: {
            args: Prisma.ItemListaDeCompraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemListaDeCompra>
          }
          groupBy: {
            args: Prisma.ItemListaDeCompraGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemListaDeCompraGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemListaDeCompraCountArgs<ExtArgs>
            result: $Utils.Optional<ItemListaDeCompraCountAggregateOutputType> | number
          }
        }
      }
      Veiculo: {
        payload: Prisma.$VeiculoPayload<ExtArgs>
        fields: Prisma.VeiculoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VeiculoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VeiculoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          findFirst: {
            args: Prisma.VeiculoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VeiculoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          findMany: {
            args: Prisma.VeiculoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>[]
          }
          create: {
            args: Prisma.VeiculoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          createMany: {
            args: Prisma.VeiculoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VeiculoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>[]
          }
          delete: {
            args: Prisma.VeiculoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          update: {
            args: Prisma.VeiculoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          deleteMany: {
            args: Prisma.VeiculoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VeiculoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VeiculoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>[]
          }
          upsert: {
            args: Prisma.VeiculoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          aggregate: {
            args: Prisma.VeiculoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVeiculo>
          }
          groupBy: {
            args: Prisma.VeiculoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VeiculoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VeiculoCountArgs<ExtArgs>
            result: $Utils.Optional<VeiculoCountAggregateOutputType> | number
          }
        }
      }
      RegistroDeManutencao: {
        payload: Prisma.$RegistroDeManutencaoPayload<ExtArgs>
        fields: Prisma.RegistroDeManutencaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistroDeManutencaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroDeManutencaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistroDeManutencaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroDeManutencaoPayload>
          }
          findFirst: {
            args: Prisma.RegistroDeManutencaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroDeManutencaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistroDeManutencaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroDeManutencaoPayload>
          }
          findMany: {
            args: Prisma.RegistroDeManutencaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroDeManutencaoPayload>[]
          }
          create: {
            args: Prisma.RegistroDeManutencaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroDeManutencaoPayload>
          }
          createMany: {
            args: Prisma.RegistroDeManutencaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegistroDeManutencaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroDeManutencaoPayload>[]
          }
          delete: {
            args: Prisma.RegistroDeManutencaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroDeManutencaoPayload>
          }
          update: {
            args: Prisma.RegistroDeManutencaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroDeManutencaoPayload>
          }
          deleteMany: {
            args: Prisma.RegistroDeManutencaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistroDeManutencaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegistroDeManutencaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroDeManutencaoPayload>[]
          }
          upsert: {
            args: Prisma.RegistroDeManutencaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroDeManutencaoPayload>
          }
          aggregate: {
            args: Prisma.RegistroDeManutencaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistroDeManutencao>
          }
          groupBy: {
            args: Prisma.RegistroDeManutencaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistroDeManutencaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistroDeManutencaoCountArgs<ExtArgs>
            result: $Utils.Optional<RegistroDeManutencaoCountAggregateOutputType> | number
          }
        }
      }
      Lembrete: {
        payload: Prisma.$LembretePayload<ExtArgs>
        fields: Prisma.LembreteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LembreteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LembretePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LembreteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LembretePayload>
          }
          findFirst: {
            args: Prisma.LembreteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LembretePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LembreteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LembretePayload>
          }
          findMany: {
            args: Prisma.LembreteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LembretePayload>[]
          }
          create: {
            args: Prisma.LembreteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LembretePayload>
          }
          createMany: {
            args: Prisma.LembreteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LembreteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LembretePayload>[]
          }
          delete: {
            args: Prisma.LembreteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LembretePayload>
          }
          update: {
            args: Prisma.LembreteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LembretePayload>
          }
          deleteMany: {
            args: Prisma.LembreteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LembreteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LembreteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LembretePayload>[]
          }
          upsert: {
            args: Prisma.LembreteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LembretePayload>
          }
          aggregate: {
            args: Prisma.LembreteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLembrete>
          }
          groupBy: {
            args: Prisma.LembreteGroupByArgs<ExtArgs>
            result: $Utils.Optional<LembreteGroupByOutputType>[]
          }
          count: {
            args: Prisma.LembreteCountArgs<ExtArgs>
            result: $Utils.Optional<LembreteCountAggregateOutputType> | number
          }
        }
      }
      Tarefa: {
        payload: Prisma.$TarefaPayload<ExtArgs>
        fields: Prisma.TarefaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TarefaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TarefaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>
          }
          findFirst: {
            args: Prisma.TarefaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TarefaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>
          }
          findMany: {
            args: Prisma.TarefaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>[]
          }
          create: {
            args: Prisma.TarefaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>
          }
          createMany: {
            args: Prisma.TarefaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TarefaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>[]
          }
          delete: {
            args: Prisma.TarefaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>
          }
          update: {
            args: Prisma.TarefaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>
          }
          deleteMany: {
            args: Prisma.TarefaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TarefaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TarefaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>[]
          }
          upsert: {
            args: Prisma.TarefaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>
          }
          aggregate: {
            args: Prisma.TarefaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTarefa>
          }
          groupBy: {
            args: Prisma.TarefaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TarefaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TarefaCountArgs<ExtArgs>
            result: $Utils.Optional<TarefaCountAggregateOutputType> | number
          }
        }
      }
      Atividade: {
        payload: Prisma.$AtividadePayload<ExtArgs>
        fields: Prisma.AtividadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtividadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtividadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>
          }
          findFirst: {
            args: Prisma.AtividadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtividadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>
          }
          findMany: {
            args: Prisma.AtividadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>[]
          }
          create: {
            args: Prisma.AtividadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>
          }
          createMany: {
            args: Prisma.AtividadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AtividadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>[]
          }
          delete: {
            args: Prisma.AtividadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>
          }
          update: {
            args: Prisma.AtividadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>
          }
          deleteMany: {
            args: Prisma.AtividadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtividadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AtividadeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>[]
          }
          upsert: {
            args: Prisma.AtividadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>
          }
          aggregate: {
            args: Prisma.AtividadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtividade>
          }
          groupBy: {
            args: Prisma.AtividadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtividadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtividadeCountArgs<ExtArgs>
            result: $Utils.Optional<AtividadeCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    familia?: FamiliaOmit
    familia_usuarios?: familia_usuariosOmit
    listaDeCompra?: ListaDeCompraOmit
    itemListaDeCompra?: ItemListaDeCompraOmit
    veiculo?: VeiculoOmit
    registroDeManutencao?: RegistroDeManutencaoOmit
    lembrete?: LembreteOmit
    tarefa?: TarefaOmit
    atividade?: AtividadeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    familias: number
    lembretesEnviados: number
    listasEnviadas: number
    veiculos: number
    tarefas: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familias?: boolean | UsuarioCountOutputTypeCountFamiliasArgs
    lembretesEnviados?: boolean | UsuarioCountOutputTypeCountLembretesEnviadosArgs
    listasEnviadas?: boolean | UsuarioCountOutputTypeCountListasEnviadasArgs
    veiculos?: boolean | UsuarioCountOutputTypeCountVeiculosArgs
    tarefas?: boolean | UsuarioCountOutputTypeCountTarefasArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountFamiliasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: familia_usuariosWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountLembretesEnviadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LembreteWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountListasEnviadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListaDeCompraWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountVeiculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeiculoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountTarefasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TarefaWhereInput
  }


  /**
   * Count Type FamiliaCountOutputType
   */

  export type FamiliaCountOutputType = {
    usuarios: number
  }

  export type FamiliaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | FamiliaCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * FamiliaCountOutputType without action
   */
  export type FamiliaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamiliaCountOutputType
     */
    select?: FamiliaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FamiliaCountOutputType without action
   */
  export type FamiliaCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: familia_usuariosWhereInput
  }


  /**
   * Count Type ListaDeCompraCountOutputType
   */

  export type ListaDeCompraCountOutputType = {
    itens: number
    lembretes: number
    atividades: number
  }

  export type ListaDeCompraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | ListaDeCompraCountOutputTypeCountItensArgs
    lembretes?: boolean | ListaDeCompraCountOutputTypeCountLembretesArgs
    atividades?: boolean | ListaDeCompraCountOutputTypeCountAtividadesArgs
  }

  // Custom InputTypes
  /**
   * ListaDeCompraCountOutputType without action
   */
  export type ListaDeCompraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeCompraCountOutputType
     */
    select?: ListaDeCompraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ListaDeCompraCountOutputType without action
   */
  export type ListaDeCompraCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemListaDeCompraWhereInput
  }

  /**
   * ListaDeCompraCountOutputType without action
   */
  export type ListaDeCompraCountOutputTypeCountLembretesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LembreteWhereInput
  }

  /**
   * ListaDeCompraCountOutputType without action
   */
  export type ListaDeCompraCountOutputTypeCountAtividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtividadeWhereInput
  }


  /**
   * Count Type VeiculoCountOutputType
   */

  export type VeiculoCountOutputType = {
    Lembrete: number
    manutencoes: number
    atividades: number
  }

  export type VeiculoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Lembrete?: boolean | VeiculoCountOutputTypeCountLembreteArgs
    manutencoes?: boolean | VeiculoCountOutputTypeCountManutencoesArgs
    atividades?: boolean | VeiculoCountOutputTypeCountAtividadesArgs
  }

  // Custom InputTypes
  /**
   * VeiculoCountOutputType without action
   */
  export type VeiculoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoCountOutputType
     */
    select?: VeiculoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VeiculoCountOutputType without action
   */
  export type VeiculoCountOutputTypeCountLembreteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LembreteWhereInput
  }

  /**
   * VeiculoCountOutputType without action
   */
  export type VeiculoCountOutputTypeCountManutencoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroDeManutencaoWhereInput
  }

  /**
   * VeiculoCountOutputType without action
   */
  export type VeiculoCountOutputTypeCountAtividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtividadeWhereInput
  }


  /**
   * Count Type LembreteCountOutputType
   */

  export type LembreteCountOutputType = {
    atividades: number
  }

  export type LembreteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atividades?: boolean | LembreteCountOutputTypeCountAtividadesArgs
  }

  // Custom InputTypes
  /**
   * LembreteCountOutputType without action
   */
  export type LembreteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LembreteCountOutputType
     */
    select?: LembreteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LembreteCountOutputType without action
   */
  export type LembreteCountOutputTypeCountAtividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtividadeWhereInput
  }


  /**
   * Count Type TarefaCountOutputType
   */

  export type TarefaCountOutputType = {
    atividades: number
  }

  export type TarefaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atividades?: boolean | TarefaCountOutputTypeCountAtividadesArgs
  }

  // Custom InputTypes
  /**
   * TarefaCountOutputType without action
   */
  export type TarefaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarefaCountOutputType
     */
    select?: TarefaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TarefaCountOutputType without action
   */
  export type TarefaCountOutputTypeCountAtividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtividadeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    familias?: boolean | Usuario$familiasArgs<ExtArgs>
    lembretesEnviados?: boolean | Usuario$lembretesEnviadosArgs<ExtArgs>
    listasEnviadas?: boolean | Usuario$listasEnviadasArgs<ExtArgs>
    veiculos?: boolean | Usuario$veiculosArgs<ExtArgs>
    tarefas?: boolean | Usuario$tarefasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familias?: boolean | Usuario$familiasArgs<ExtArgs>
    lembretesEnviados?: boolean | Usuario$lembretesEnviadosArgs<ExtArgs>
    listasEnviadas?: boolean | Usuario$listasEnviadasArgs<ExtArgs>
    veiculos?: boolean | Usuario$veiculosArgs<ExtArgs>
    tarefas?: boolean | Usuario$tarefasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      familias: Prisma.$familia_usuariosPayload<ExtArgs>[]
      lembretesEnviados: Prisma.$LembretePayload<ExtArgs>[]
      listasEnviadas: Prisma.$ListaDeCompraPayload<ExtArgs>[]
      veiculos: Prisma.$VeiculoPayload<ExtArgs>[]
      tarefas: Prisma.$TarefaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    familias<T extends Usuario$familiasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$familiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$familia_usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lembretesEnviados<T extends Usuario$lembretesEnviadosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$lembretesEnviadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LembretePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    listasEnviadas<T extends Usuario$listasEnviadasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$listasEnviadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaDeCompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    veiculos<T extends Usuario$veiculosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$veiculosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tarefas<T extends Usuario$tarefasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$tarefasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly name: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.familias
   */
  export type Usuario$familiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familia_usuarios
     */
    select?: familia_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familia_usuarios
     */
    omit?: familia_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familia_usuariosInclude<ExtArgs> | null
    where?: familia_usuariosWhereInput
    orderBy?: familia_usuariosOrderByWithRelationInput | familia_usuariosOrderByWithRelationInput[]
    cursor?: familia_usuariosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Familia_usuariosScalarFieldEnum | Familia_usuariosScalarFieldEnum[]
  }

  /**
   * Usuario.lembretesEnviados
   */
  export type Usuario$lembretesEnviadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lembrete
     */
    select?: LembreteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lembrete
     */
    omit?: LembreteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LembreteInclude<ExtArgs> | null
    where?: LembreteWhereInput
    orderBy?: LembreteOrderByWithRelationInput | LembreteOrderByWithRelationInput[]
    cursor?: LembreteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LembreteScalarFieldEnum | LembreteScalarFieldEnum[]
  }

  /**
   * Usuario.listasEnviadas
   */
  export type Usuario$listasEnviadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeCompra
     */
    select?: ListaDeCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeCompra
     */
    omit?: ListaDeCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeCompraInclude<ExtArgs> | null
    where?: ListaDeCompraWhereInput
    orderBy?: ListaDeCompraOrderByWithRelationInput | ListaDeCompraOrderByWithRelationInput[]
    cursor?: ListaDeCompraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListaDeCompraScalarFieldEnum | ListaDeCompraScalarFieldEnum[]
  }

  /**
   * Usuario.veiculos
   */
  export type Usuario$veiculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    where?: VeiculoWhereInput
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    cursor?: VeiculoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * Usuario.tarefas
   */
  export type Usuario$tarefasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    where?: TarefaWhereInput
    orderBy?: TarefaOrderByWithRelationInput | TarefaOrderByWithRelationInput[]
    cursor?: TarefaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TarefaScalarFieldEnum | TarefaScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Familia
   */

  export type AggregateFamilia = {
    _count: FamiliaCountAggregateOutputType | null
    _min: FamiliaMinAggregateOutputType | null
    _max: FamiliaMaxAggregateOutputType | null
  }

  export type FamiliaMinAggregateOutputType = {
    id: string | null
    nome: string | null
    usuarioId: string | null
  }

  export type FamiliaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    usuarioId: string | null
  }

  export type FamiliaCountAggregateOutputType = {
    id: number
    nome: number
    usuarioId: number
    _all: number
  }


  export type FamiliaMinAggregateInputType = {
    id?: true
    nome?: true
    usuarioId?: true
  }

  export type FamiliaMaxAggregateInputType = {
    id?: true
    nome?: true
    usuarioId?: true
  }

  export type FamiliaCountAggregateInputType = {
    id?: true
    nome?: true
    usuarioId?: true
    _all?: true
  }

  export type FamiliaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Familia to aggregate.
     */
    where?: FamiliaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Familias to fetch.
     */
    orderBy?: FamiliaOrderByWithRelationInput | FamiliaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FamiliaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Familias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Familias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Familias
    **/
    _count?: true | FamiliaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FamiliaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FamiliaMaxAggregateInputType
  }

  export type GetFamiliaAggregateType<T extends FamiliaAggregateArgs> = {
        [P in keyof T & keyof AggregateFamilia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFamilia[P]>
      : GetScalarType<T[P], AggregateFamilia[P]>
  }




  export type FamiliaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FamiliaWhereInput
    orderBy?: FamiliaOrderByWithAggregationInput | FamiliaOrderByWithAggregationInput[]
    by: FamiliaScalarFieldEnum[] | FamiliaScalarFieldEnum
    having?: FamiliaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FamiliaCountAggregateInputType | true
    _min?: FamiliaMinAggregateInputType
    _max?: FamiliaMaxAggregateInputType
  }

  export type FamiliaGroupByOutputType = {
    id: string
    nome: string
    usuarioId: string
    _count: FamiliaCountAggregateOutputType | null
    _min: FamiliaMinAggregateOutputType | null
    _max: FamiliaMaxAggregateOutputType | null
  }

  type GetFamiliaGroupByPayload<T extends FamiliaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FamiliaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FamiliaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FamiliaGroupByOutputType[P]>
            : GetScalarType<T[P], FamiliaGroupByOutputType[P]>
        }
      >
    >


  export type FamiliaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    usuarioId?: boolean
    usuarios?: boolean | Familia$usuariosArgs<ExtArgs>
    _count?: boolean | FamiliaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["familia"]>

  export type FamiliaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    usuarioId?: boolean
  }, ExtArgs["result"]["familia"]>

  export type FamiliaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    usuarioId?: boolean
  }, ExtArgs["result"]["familia"]>

  export type FamiliaSelectScalar = {
    id?: boolean
    nome?: boolean
    usuarioId?: boolean
  }

  export type FamiliaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "usuarioId", ExtArgs["result"]["familia"]>
  export type FamiliaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Familia$usuariosArgs<ExtArgs>
    _count?: boolean | FamiliaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FamiliaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FamiliaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FamiliaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Familia"
    objects: {
      usuarios: Prisma.$familia_usuariosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      usuarioId: string
    }, ExtArgs["result"]["familia"]>
    composites: {}
  }

  type FamiliaGetPayload<S extends boolean | null | undefined | FamiliaDefaultArgs> = $Result.GetResult<Prisma.$FamiliaPayload, S>

  type FamiliaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FamiliaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FamiliaCountAggregateInputType | true
    }

  export interface FamiliaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Familia'], meta: { name: 'Familia' } }
    /**
     * Find zero or one Familia that matches the filter.
     * @param {FamiliaFindUniqueArgs} args - Arguments to find a Familia
     * @example
     * // Get one Familia
     * const familia = await prisma.familia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FamiliaFindUniqueArgs>(args: SelectSubset<T, FamiliaFindUniqueArgs<ExtArgs>>): Prisma__FamiliaClient<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Familia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FamiliaFindUniqueOrThrowArgs} args - Arguments to find a Familia
     * @example
     * // Get one Familia
     * const familia = await prisma.familia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FamiliaFindUniqueOrThrowArgs>(args: SelectSubset<T, FamiliaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FamiliaClient<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Familia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamiliaFindFirstArgs} args - Arguments to find a Familia
     * @example
     * // Get one Familia
     * const familia = await prisma.familia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FamiliaFindFirstArgs>(args?: SelectSubset<T, FamiliaFindFirstArgs<ExtArgs>>): Prisma__FamiliaClient<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Familia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamiliaFindFirstOrThrowArgs} args - Arguments to find a Familia
     * @example
     * // Get one Familia
     * const familia = await prisma.familia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FamiliaFindFirstOrThrowArgs>(args?: SelectSubset<T, FamiliaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FamiliaClient<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Familias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamiliaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Familias
     * const familias = await prisma.familia.findMany()
     * 
     * // Get first 10 Familias
     * const familias = await prisma.familia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const familiaWithIdOnly = await prisma.familia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FamiliaFindManyArgs>(args?: SelectSubset<T, FamiliaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Familia.
     * @param {FamiliaCreateArgs} args - Arguments to create a Familia.
     * @example
     * // Create one Familia
     * const Familia = await prisma.familia.create({
     *   data: {
     *     // ... data to create a Familia
     *   }
     * })
     * 
     */
    create<T extends FamiliaCreateArgs>(args: SelectSubset<T, FamiliaCreateArgs<ExtArgs>>): Prisma__FamiliaClient<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Familias.
     * @param {FamiliaCreateManyArgs} args - Arguments to create many Familias.
     * @example
     * // Create many Familias
     * const familia = await prisma.familia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FamiliaCreateManyArgs>(args?: SelectSubset<T, FamiliaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Familias and returns the data saved in the database.
     * @param {FamiliaCreateManyAndReturnArgs} args - Arguments to create many Familias.
     * @example
     * // Create many Familias
     * const familia = await prisma.familia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Familias and only return the `id`
     * const familiaWithIdOnly = await prisma.familia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FamiliaCreateManyAndReturnArgs>(args?: SelectSubset<T, FamiliaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Familia.
     * @param {FamiliaDeleteArgs} args - Arguments to delete one Familia.
     * @example
     * // Delete one Familia
     * const Familia = await prisma.familia.delete({
     *   where: {
     *     // ... filter to delete one Familia
     *   }
     * })
     * 
     */
    delete<T extends FamiliaDeleteArgs>(args: SelectSubset<T, FamiliaDeleteArgs<ExtArgs>>): Prisma__FamiliaClient<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Familia.
     * @param {FamiliaUpdateArgs} args - Arguments to update one Familia.
     * @example
     * // Update one Familia
     * const familia = await prisma.familia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FamiliaUpdateArgs>(args: SelectSubset<T, FamiliaUpdateArgs<ExtArgs>>): Prisma__FamiliaClient<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Familias.
     * @param {FamiliaDeleteManyArgs} args - Arguments to filter Familias to delete.
     * @example
     * // Delete a few Familias
     * const { count } = await prisma.familia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FamiliaDeleteManyArgs>(args?: SelectSubset<T, FamiliaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Familias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamiliaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Familias
     * const familia = await prisma.familia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FamiliaUpdateManyArgs>(args: SelectSubset<T, FamiliaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Familias and returns the data updated in the database.
     * @param {FamiliaUpdateManyAndReturnArgs} args - Arguments to update many Familias.
     * @example
     * // Update many Familias
     * const familia = await prisma.familia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Familias and only return the `id`
     * const familiaWithIdOnly = await prisma.familia.updateManyAndReturn({
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
    updateManyAndReturn<T extends FamiliaUpdateManyAndReturnArgs>(args: SelectSubset<T, FamiliaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Familia.
     * @param {FamiliaUpsertArgs} args - Arguments to update or create a Familia.
     * @example
     * // Update or create a Familia
     * const familia = await prisma.familia.upsert({
     *   create: {
     *     // ... data to create a Familia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Familia we want to update
     *   }
     * })
     */
    upsert<T extends FamiliaUpsertArgs>(args: SelectSubset<T, FamiliaUpsertArgs<ExtArgs>>): Prisma__FamiliaClient<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Familias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamiliaCountArgs} args - Arguments to filter Familias to count.
     * @example
     * // Count the number of Familias
     * const count = await prisma.familia.count({
     *   where: {
     *     // ... the filter for the Familias we want to count
     *   }
     * })
    **/
    count<T extends FamiliaCountArgs>(
      args?: Subset<T, FamiliaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FamiliaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Familia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamiliaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FamiliaAggregateArgs>(args: Subset<T, FamiliaAggregateArgs>): Prisma.PrismaPromise<GetFamiliaAggregateType<T>>

    /**
     * Group by Familia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamiliaGroupByArgs} args - Group by arguments.
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
      T extends FamiliaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FamiliaGroupByArgs['orderBy'] }
        : { orderBy?: FamiliaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FamiliaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFamiliaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Familia model
   */
  readonly fields: FamiliaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Familia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FamiliaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Familia$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Familia$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$familia_usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Familia model
   */
  interface FamiliaFieldRefs {
    readonly id: FieldRef<"Familia", 'String'>
    readonly nome: FieldRef<"Familia", 'String'>
    readonly usuarioId: FieldRef<"Familia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Familia findUnique
   */
  export type FamiliaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Familia
     */
    omit?: FamiliaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamiliaInclude<ExtArgs> | null
    /**
     * Filter, which Familia to fetch.
     */
    where: FamiliaWhereUniqueInput
  }

  /**
   * Familia findUniqueOrThrow
   */
  export type FamiliaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Familia
     */
    omit?: FamiliaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamiliaInclude<ExtArgs> | null
    /**
     * Filter, which Familia to fetch.
     */
    where: FamiliaWhereUniqueInput
  }

  /**
   * Familia findFirst
   */
  export type FamiliaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Familia
     */
    omit?: FamiliaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamiliaInclude<ExtArgs> | null
    /**
     * Filter, which Familia to fetch.
     */
    where?: FamiliaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Familias to fetch.
     */
    orderBy?: FamiliaOrderByWithRelationInput | FamiliaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Familias.
     */
    cursor?: FamiliaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Familias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Familias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Familias.
     */
    distinct?: FamiliaScalarFieldEnum | FamiliaScalarFieldEnum[]
  }

  /**
   * Familia findFirstOrThrow
   */
  export type FamiliaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Familia
     */
    omit?: FamiliaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamiliaInclude<ExtArgs> | null
    /**
     * Filter, which Familia to fetch.
     */
    where?: FamiliaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Familias to fetch.
     */
    orderBy?: FamiliaOrderByWithRelationInput | FamiliaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Familias.
     */
    cursor?: FamiliaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Familias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Familias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Familias.
     */
    distinct?: FamiliaScalarFieldEnum | FamiliaScalarFieldEnum[]
  }

  /**
   * Familia findMany
   */
  export type FamiliaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Familia
     */
    omit?: FamiliaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamiliaInclude<ExtArgs> | null
    /**
     * Filter, which Familias to fetch.
     */
    where?: FamiliaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Familias to fetch.
     */
    orderBy?: FamiliaOrderByWithRelationInput | FamiliaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Familias.
     */
    cursor?: FamiliaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Familias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Familias.
     */
    skip?: number
    distinct?: FamiliaScalarFieldEnum | FamiliaScalarFieldEnum[]
  }

  /**
   * Familia create
   */
  export type FamiliaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Familia
     */
    omit?: FamiliaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamiliaInclude<ExtArgs> | null
    /**
     * The data needed to create a Familia.
     */
    data: XOR<FamiliaCreateInput, FamiliaUncheckedCreateInput>
  }

  /**
   * Familia createMany
   */
  export type FamiliaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Familias.
     */
    data: FamiliaCreateManyInput | FamiliaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Familia createManyAndReturn
   */
  export type FamiliaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Familia
     */
    omit?: FamiliaOmit<ExtArgs> | null
    /**
     * The data used to create many Familias.
     */
    data: FamiliaCreateManyInput | FamiliaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Familia update
   */
  export type FamiliaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Familia
     */
    omit?: FamiliaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamiliaInclude<ExtArgs> | null
    /**
     * The data needed to update a Familia.
     */
    data: XOR<FamiliaUpdateInput, FamiliaUncheckedUpdateInput>
    /**
     * Choose, which Familia to update.
     */
    where: FamiliaWhereUniqueInput
  }

  /**
   * Familia updateMany
   */
  export type FamiliaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Familias.
     */
    data: XOR<FamiliaUpdateManyMutationInput, FamiliaUncheckedUpdateManyInput>
    /**
     * Filter which Familias to update
     */
    where?: FamiliaWhereInput
    /**
     * Limit how many Familias to update.
     */
    limit?: number
  }

  /**
   * Familia updateManyAndReturn
   */
  export type FamiliaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Familia
     */
    omit?: FamiliaOmit<ExtArgs> | null
    /**
     * The data used to update Familias.
     */
    data: XOR<FamiliaUpdateManyMutationInput, FamiliaUncheckedUpdateManyInput>
    /**
     * Filter which Familias to update
     */
    where?: FamiliaWhereInput
    /**
     * Limit how many Familias to update.
     */
    limit?: number
  }

  /**
   * Familia upsert
   */
  export type FamiliaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Familia
     */
    omit?: FamiliaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamiliaInclude<ExtArgs> | null
    /**
     * The filter to search for the Familia to update in case it exists.
     */
    where: FamiliaWhereUniqueInput
    /**
     * In case the Familia found by the `where` argument doesn't exist, create a new Familia with this data.
     */
    create: XOR<FamiliaCreateInput, FamiliaUncheckedCreateInput>
    /**
     * In case the Familia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FamiliaUpdateInput, FamiliaUncheckedUpdateInput>
  }

  /**
   * Familia delete
   */
  export type FamiliaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Familia
     */
    omit?: FamiliaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamiliaInclude<ExtArgs> | null
    /**
     * Filter which Familia to delete.
     */
    where: FamiliaWhereUniqueInput
  }

  /**
   * Familia deleteMany
   */
  export type FamiliaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Familias to delete
     */
    where?: FamiliaWhereInput
    /**
     * Limit how many Familias to delete.
     */
    limit?: number
  }

  /**
   * Familia.usuarios
   */
  export type Familia$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familia_usuarios
     */
    select?: familia_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familia_usuarios
     */
    omit?: familia_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familia_usuariosInclude<ExtArgs> | null
    where?: familia_usuariosWhereInput
    orderBy?: familia_usuariosOrderByWithRelationInput | familia_usuariosOrderByWithRelationInput[]
    cursor?: familia_usuariosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Familia_usuariosScalarFieldEnum | Familia_usuariosScalarFieldEnum[]
  }

  /**
   * Familia without action
   */
  export type FamiliaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Familia
     */
    omit?: FamiliaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamiliaInclude<ExtArgs> | null
  }


  /**
   * Model familia_usuarios
   */

  export type AggregateFamilia_usuarios = {
    _count: Familia_usuariosCountAggregateOutputType | null
    _min: Familia_usuariosMinAggregateOutputType | null
    _max: Familia_usuariosMaxAggregateOutputType | null
  }

  export type Familia_usuariosMinAggregateOutputType = {
    id_usuario: string | null
    id_familia: string | null
    rotulo: $Enums.Rotulo | null
  }

  export type Familia_usuariosMaxAggregateOutputType = {
    id_usuario: string | null
    id_familia: string | null
    rotulo: $Enums.Rotulo | null
  }

  export type Familia_usuariosCountAggregateOutputType = {
    id_usuario: number
    id_familia: number
    rotulo: number
    _all: number
  }


  export type Familia_usuariosMinAggregateInputType = {
    id_usuario?: true
    id_familia?: true
    rotulo?: true
  }

  export type Familia_usuariosMaxAggregateInputType = {
    id_usuario?: true
    id_familia?: true
    rotulo?: true
  }

  export type Familia_usuariosCountAggregateInputType = {
    id_usuario?: true
    id_familia?: true
    rotulo?: true
    _all?: true
  }

  export type Familia_usuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which familia_usuarios to aggregate.
     */
    where?: familia_usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of familia_usuarios to fetch.
     */
    orderBy?: familia_usuariosOrderByWithRelationInput | familia_usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: familia_usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` familia_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` familia_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned familia_usuarios
    **/
    _count?: true | Familia_usuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Familia_usuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Familia_usuariosMaxAggregateInputType
  }

  export type GetFamilia_usuariosAggregateType<T extends Familia_usuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateFamilia_usuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFamilia_usuarios[P]>
      : GetScalarType<T[P], AggregateFamilia_usuarios[P]>
  }




  export type familia_usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: familia_usuariosWhereInput
    orderBy?: familia_usuariosOrderByWithAggregationInput | familia_usuariosOrderByWithAggregationInput[]
    by: Familia_usuariosScalarFieldEnum[] | Familia_usuariosScalarFieldEnum
    having?: familia_usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Familia_usuariosCountAggregateInputType | true
    _min?: Familia_usuariosMinAggregateInputType
    _max?: Familia_usuariosMaxAggregateInputType
  }

  export type Familia_usuariosGroupByOutputType = {
    id_usuario: string
    id_familia: string
    rotulo: $Enums.Rotulo
    _count: Familia_usuariosCountAggregateOutputType | null
    _min: Familia_usuariosMinAggregateOutputType | null
    _max: Familia_usuariosMaxAggregateOutputType | null
  }

  type GetFamilia_usuariosGroupByPayload<T extends familia_usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Familia_usuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Familia_usuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Familia_usuariosGroupByOutputType[P]>
            : GetScalarType<T[P], Familia_usuariosGroupByOutputType[P]>
        }
      >
    >


  export type familia_usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    id_familia?: boolean
    rotulo?: boolean
    familia?: boolean | FamiliaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["familia_usuarios"]>

  export type familia_usuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    id_familia?: boolean
    rotulo?: boolean
    familia?: boolean | FamiliaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["familia_usuarios"]>

  export type familia_usuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    id_familia?: boolean
    rotulo?: boolean
    familia?: boolean | FamiliaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["familia_usuarios"]>

  export type familia_usuariosSelectScalar = {
    id_usuario?: boolean
    id_familia?: boolean
    rotulo?: boolean
  }

  export type familia_usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "id_familia" | "rotulo", ExtArgs["result"]["familia_usuarios"]>
  export type familia_usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familia?: boolean | FamiliaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type familia_usuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familia?: boolean | FamiliaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type familia_usuariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familia?: boolean | FamiliaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $familia_usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "familia_usuarios"
    objects: {
      familia: Prisma.$FamiliaPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: string
      id_familia: string
      rotulo: $Enums.Rotulo
    }, ExtArgs["result"]["familia_usuarios"]>
    composites: {}
  }

  type familia_usuariosGetPayload<S extends boolean | null | undefined | familia_usuariosDefaultArgs> = $Result.GetResult<Prisma.$familia_usuariosPayload, S>

  type familia_usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<familia_usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Familia_usuariosCountAggregateInputType | true
    }

  export interface familia_usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['familia_usuarios'], meta: { name: 'familia_usuarios' } }
    /**
     * Find zero or one Familia_usuarios that matches the filter.
     * @param {familia_usuariosFindUniqueArgs} args - Arguments to find a Familia_usuarios
     * @example
     * // Get one Familia_usuarios
     * const familia_usuarios = await prisma.familia_usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends familia_usuariosFindUniqueArgs>(args: SelectSubset<T, familia_usuariosFindUniqueArgs<ExtArgs>>): Prisma__familia_usuariosClient<$Result.GetResult<Prisma.$familia_usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Familia_usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {familia_usuariosFindUniqueOrThrowArgs} args - Arguments to find a Familia_usuarios
     * @example
     * // Get one Familia_usuarios
     * const familia_usuarios = await prisma.familia_usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends familia_usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, familia_usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__familia_usuariosClient<$Result.GetResult<Prisma.$familia_usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Familia_usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familia_usuariosFindFirstArgs} args - Arguments to find a Familia_usuarios
     * @example
     * // Get one Familia_usuarios
     * const familia_usuarios = await prisma.familia_usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends familia_usuariosFindFirstArgs>(args?: SelectSubset<T, familia_usuariosFindFirstArgs<ExtArgs>>): Prisma__familia_usuariosClient<$Result.GetResult<Prisma.$familia_usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Familia_usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familia_usuariosFindFirstOrThrowArgs} args - Arguments to find a Familia_usuarios
     * @example
     * // Get one Familia_usuarios
     * const familia_usuarios = await prisma.familia_usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends familia_usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, familia_usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__familia_usuariosClient<$Result.GetResult<Prisma.$familia_usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Familia_usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familia_usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Familia_usuarios
     * const familia_usuarios = await prisma.familia_usuarios.findMany()
     * 
     * // Get first 10 Familia_usuarios
     * const familia_usuarios = await prisma.familia_usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const familia_usuariosWithId_usuarioOnly = await prisma.familia_usuarios.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends familia_usuariosFindManyArgs>(args?: SelectSubset<T, familia_usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$familia_usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Familia_usuarios.
     * @param {familia_usuariosCreateArgs} args - Arguments to create a Familia_usuarios.
     * @example
     * // Create one Familia_usuarios
     * const Familia_usuarios = await prisma.familia_usuarios.create({
     *   data: {
     *     // ... data to create a Familia_usuarios
     *   }
     * })
     * 
     */
    create<T extends familia_usuariosCreateArgs>(args: SelectSubset<T, familia_usuariosCreateArgs<ExtArgs>>): Prisma__familia_usuariosClient<$Result.GetResult<Prisma.$familia_usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Familia_usuarios.
     * @param {familia_usuariosCreateManyArgs} args - Arguments to create many Familia_usuarios.
     * @example
     * // Create many Familia_usuarios
     * const familia_usuarios = await prisma.familia_usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends familia_usuariosCreateManyArgs>(args?: SelectSubset<T, familia_usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Familia_usuarios and returns the data saved in the database.
     * @param {familia_usuariosCreateManyAndReturnArgs} args - Arguments to create many Familia_usuarios.
     * @example
     * // Create many Familia_usuarios
     * const familia_usuarios = await prisma.familia_usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Familia_usuarios and only return the `id_usuario`
     * const familia_usuariosWithId_usuarioOnly = await prisma.familia_usuarios.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends familia_usuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, familia_usuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$familia_usuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Familia_usuarios.
     * @param {familia_usuariosDeleteArgs} args - Arguments to delete one Familia_usuarios.
     * @example
     * // Delete one Familia_usuarios
     * const Familia_usuarios = await prisma.familia_usuarios.delete({
     *   where: {
     *     // ... filter to delete one Familia_usuarios
     *   }
     * })
     * 
     */
    delete<T extends familia_usuariosDeleteArgs>(args: SelectSubset<T, familia_usuariosDeleteArgs<ExtArgs>>): Prisma__familia_usuariosClient<$Result.GetResult<Prisma.$familia_usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Familia_usuarios.
     * @param {familia_usuariosUpdateArgs} args - Arguments to update one Familia_usuarios.
     * @example
     * // Update one Familia_usuarios
     * const familia_usuarios = await prisma.familia_usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends familia_usuariosUpdateArgs>(args: SelectSubset<T, familia_usuariosUpdateArgs<ExtArgs>>): Prisma__familia_usuariosClient<$Result.GetResult<Prisma.$familia_usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Familia_usuarios.
     * @param {familia_usuariosDeleteManyArgs} args - Arguments to filter Familia_usuarios to delete.
     * @example
     * // Delete a few Familia_usuarios
     * const { count } = await prisma.familia_usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends familia_usuariosDeleteManyArgs>(args?: SelectSubset<T, familia_usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Familia_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familia_usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Familia_usuarios
     * const familia_usuarios = await prisma.familia_usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends familia_usuariosUpdateManyArgs>(args: SelectSubset<T, familia_usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Familia_usuarios and returns the data updated in the database.
     * @param {familia_usuariosUpdateManyAndReturnArgs} args - Arguments to update many Familia_usuarios.
     * @example
     * // Update many Familia_usuarios
     * const familia_usuarios = await prisma.familia_usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Familia_usuarios and only return the `id_usuario`
     * const familia_usuariosWithId_usuarioOnly = await prisma.familia_usuarios.updateManyAndReturn({
     *   select: { id_usuario: true },
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
    updateManyAndReturn<T extends familia_usuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, familia_usuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$familia_usuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Familia_usuarios.
     * @param {familia_usuariosUpsertArgs} args - Arguments to update or create a Familia_usuarios.
     * @example
     * // Update or create a Familia_usuarios
     * const familia_usuarios = await prisma.familia_usuarios.upsert({
     *   create: {
     *     // ... data to create a Familia_usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Familia_usuarios we want to update
     *   }
     * })
     */
    upsert<T extends familia_usuariosUpsertArgs>(args: SelectSubset<T, familia_usuariosUpsertArgs<ExtArgs>>): Prisma__familia_usuariosClient<$Result.GetResult<Prisma.$familia_usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Familia_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familia_usuariosCountArgs} args - Arguments to filter Familia_usuarios to count.
     * @example
     * // Count the number of Familia_usuarios
     * const count = await prisma.familia_usuarios.count({
     *   where: {
     *     // ... the filter for the Familia_usuarios we want to count
     *   }
     * })
    **/
    count<T extends familia_usuariosCountArgs>(
      args?: Subset<T, familia_usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Familia_usuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Familia_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Familia_usuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Familia_usuariosAggregateArgs>(args: Subset<T, Familia_usuariosAggregateArgs>): Prisma.PrismaPromise<GetFamilia_usuariosAggregateType<T>>

    /**
     * Group by Familia_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familia_usuariosGroupByArgs} args - Group by arguments.
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
      T extends familia_usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: familia_usuariosGroupByArgs['orderBy'] }
        : { orderBy?: familia_usuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, familia_usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFamilia_usuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the familia_usuarios model
   */
  readonly fields: familia_usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for familia_usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__familia_usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    familia<T extends FamiliaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FamiliaDefaultArgs<ExtArgs>>): Prisma__FamiliaClient<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the familia_usuarios model
   */
  interface familia_usuariosFieldRefs {
    readonly id_usuario: FieldRef<"familia_usuarios", 'String'>
    readonly id_familia: FieldRef<"familia_usuarios", 'String'>
    readonly rotulo: FieldRef<"familia_usuarios", 'Rotulo'>
  }
    

  // Custom InputTypes
  /**
   * familia_usuarios findUnique
   */
  export type familia_usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familia_usuarios
     */
    select?: familia_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familia_usuarios
     */
    omit?: familia_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familia_usuariosInclude<ExtArgs> | null
    /**
     * Filter, which familia_usuarios to fetch.
     */
    where: familia_usuariosWhereUniqueInput
  }

  /**
   * familia_usuarios findUniqueOrThrow
   */
  export type familia_usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familia_usuarios
     */
    select?: familia_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familia_usuarios
     */
    omit?: familia_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familia_usuariosInclude<ExtArgs> | null
    /**
     * Filter, which familia_usuarios to fetch.
     */
    where: familia_usuariosWhereUniqueInput
  }

  /**
   * familia_usuarios findFirst
   */
  export type familia_usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familia_usuarios
     */
    select?: familia_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familia_usuarios
     */
    omit?: familia_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familia_usuariosInclude<ExtArgs> | null
    /**
     * Filter, which familia_usuarios to fetch.
     */
    where?: familia_usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of familia_usuarios to fetch.
     */
    orderBy?: familia_usuariosOrderByWithRelationInput | familia_usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for familia_usuarios.
     */
    cursor?: familia_usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` familia_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` familia_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of familia_usuarios.
     */
    distinct?: Familia_usuariosScalarFieldEnum | Familia_usuariosScalarFieldEnum[]
  }

  /**
   * familia_usuarios findFirstOrThrow
   */
  export type familia_usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familia_usuarios
     */
    select?: familia_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familia_usuarios
     */
    omit?: familia_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familia_usuariosInclude<ExtArgs> | null
    /**
     * Filter, which familia_usuarios to fetch.
     */
    where?: familia_usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of familia_usuarios to fetch.
     */
    orderBy?: familia_usuariosOrderByWithRelationInput | familia_usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for familia_usuarios.
     */
    cursor?: familia_usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` familia_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` familia_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of familia_usuarios.
     */
    distinct?: Familia_usuariosScalarFieldEnum | Familia_usuariosScalarFieldEnum[]
  }

  /**
   * familia_usuarios findMany
   */
  export type familia_usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familia_usuarios
     */
    select?: familia_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familia_usuarios
     */
    omit?: familia_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familia_usuariosInclude<ExtArgs> | null
    /**
     * Filter, which familia_usuarios to fetch.
     */
    where?: familia_usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of familia_usuarios to fetch.
     */
    orderBy?: familia_usuariosOrderByWithRelationInput | familia_usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing familia_usuarios.
     */
    cursor?: familia_usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` familia_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` familia_usuarios.
     */
    skip?: number
    distinct?: Familia_usuariosScalarFieldEnum | Familia_usuariosScalarFieldEnum[]
  }

  /**
   * familia_usuarios create
   */
  export type familia_usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familia_usuarios
     */
    select?: familia_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familia_usuarios
     */
    omit?: familia_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familia_usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a familia_usuarios.
     */
    data: XOR<familia_usuariosCreateInput, familia_usuariosUncheckedCreateInput>
  }

  /**
   * familia_usuarios createMany
   */
  export type familia_usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many familia_usuarios.
     */
    data: familia_usuariosCreateManyInput | familia_usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * familia_usuarios createManyAndReturn
   */
  export type familia_usuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familia_usuarios
     */
    select?: familia_usuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the familia_usuarios
     */
    omit?: familia_usuariosOmit<ExtArgs> | null
    /**
     * The data used to create many familia_usuarios.
     */
    data: familia_usuariosCreateManyInput | familia_usuariosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familia_usuariosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * familia_usuarios update
   */
  export type familia_usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familia_usuarios
     */
    select?: familia_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familia_usuarios
     */
    omit?: familia_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familia_usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a familia_usuarios.
     */
    data: XOR<familia_usuariosUpdateInput, familia_usuariosUncheckedUpdateInput>
    /**
     * Choose, which familia_usuarios to update.
     */
    where: familia_usuariosWhereUniqueInput
  }

  /**
   * familia_usuarios updateMany
   */
  export type familia_usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update familia_usuarios.
     */
    data: XOR<familia_usuariosUpdateManyMutationInput, familia_usuariosUncheckedUpdateManyInput>
    /**
     * Filter which familia_usuarios to update
     */
    where?: familia_usuariosWhereInput
    /**
     * Limit how many familia_usuarios to update.
     */
    limit?: number
  }

  /**
   * familia_usuarios updateManyAndReturn
   */
  export type familia_usuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familia_usuarios
     */
    select?: familia_usuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the familia_usuarios
     */
    omit?: familia_usuariosOmit<ExtArgs> | null
    /**
     * The data used to update familia_usuarios.
     */
    data: XOR<familia_usuariosUpdateManyMutationInput, familia_usuariosUncheckedUpdateManyInput>
    /**
     * Filter which familia_usuarios to update
     */
    where?: familia_usuariosWhereInput
    /**
     * Limit how many familia_usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familia_usuariosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * familia_usuarios upsert
   */
  export type familia_usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familia_usuarios
     */
    select?: familia_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familia_usuarios
     */
    omit?: familia_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familia_usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the familia_usuarios to update in case it exists.
     */
    where: familia_usuariosWhereUniqueInput
    /**
     * In case the familia_usuarios found by the `where` argument doesn't exist, create a new familia_usuarios with this data.
     */
    create: XOR<familia_usuariosCreateInput, familia_usuariosUncheckedCreateInput>
    /**
     * In case the familia_usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<familia_usuariosUpdateInput, familia_usuariosUncheckedUpdateInput>
  }

  /**
   * familia_usuarios delete
   */
  export type familia_usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familia_usuarios
     */
    select?: familia_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familia_usuarios
     */
    omit?: familia_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familia_usuariosInclude<ExtArgs> | null
    /**
     * Filter which familia_usuarios to delete.
     */
    where: familia_usuariosWhereUniqueInput
  }

  /**
   * familia_usuarios deleteMany
   */
  export type familia_usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which familia_usuarios to delete
     */
    where?: familia_usuariosWhereInput
    /**
     * Limit how many familia_usuarios to delete.
     */
    limit?: number
  }

  /**
   * familia_usuarios without action
   */
  export type familia_usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familia_usuarios
     */
    select?: familia_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familia_usuarios
     */
    omit?: familia_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familia_usuariosInclude<ExtArgs> | null
  }


  /**
   * Model ListaDeCompra
   */

  export type AggregateListaDeCompra = {
    _count: ListaDeCompraCountAggregateOutputType | null
    _min: ListaDeCompraMinAggregateOutputType | null
    _max: ListaDeCompraMaxAggregateOutputType | null
  }

  export type ListaDeCompraMinAggregateOutputType = {
    id: string | null
    tipo: string | null
    usuarioIdEnviou: string | null
    status: boolean | null
  }

  export type ListaDeCompraMaxAggregateOutputType = {
    id: string | null
    tipo: string | null
    usuarioIdEnviou: string | null
    status: boolean | null
  }

  export type ListaDeCompraCountAggregateOutputType = {
    id: number
    tipo: number
    usuarioIdEnviou: number
    status: number
    _all: number
  }


  export type ListaDeCompraMinAggregateInputType = {
    id?: true
    tipo?: true
    usuarioIdEnviou?: true
    status?: true
  }

  export type ListaDeCompraMaxAggregateInputType = {
    id?: true
    tipo?: true
    usuarioIdEnviou?: true
    status?: true
  }

  export type ListaDeCompraCountAggregateInputType = {
    id?: true
    tipo?: true
    usuarioIdEnviou?: true
    status?: true
    _all?: true
  }

  export type ListaDeCompraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListaDeCompra to aggregate.
     */
    where?: ListaDeCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaDeCompras to fetch.
     */
    orderBy?: ListaDeCompraOrderByWithRelationInput | ListaDeCompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListaDeCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaDeCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaDeCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListaDeCompras
    **/
    _count?: true | ListaDeCompraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListaDeCompraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListaDeCompraMaxAggregateInputType
  }

  export type GetListaDeCompraAggregateType<T extends ListaDeCompraAggregateArgs> = {
        [P in keyof T & keyof AggregateListaDeCompra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListaDeCompra[P]>
      : GetScalarType<T[P], AggregateListaDeCompra[P]>
  }




  export type ListaDeCompraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListaDeCompraWhereInput
    orderBy?: ListaDeCompraOrderByWithAggregationInput | ListaDeCompraOrderByWithAggregationInput[]
    by: ListaDeCompraScalarFieldEnum[] | ListaDeCompraScalarFieldEnum
    having?: ListaDeCompraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListaDeCompraCountAggregateInputType | true
    _min?: ListaDeCompraMinAggregateInputType
    _max?: ListaDeCompraMaxAggregateInputType
  }

  export type ListaDeCompraGroupByOutputType = {
    id: string
    tipo: string
    usuarioIdEnviou: string
    status: boolean
    _count: ListaDeCompraCountAggregateOutputType | null
    _min: ListaDeCompraMinAggregateOutputType | null
    _max: ListaDeCompraMaxAggregateOutputType | null
  }

  type GetListaDeCompraGroupByPayload<T extends ListaDeCompraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListaDeCompraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListaDeCompraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListaDeCompraGroupByOutputType[P]>
            : GetScalarType<T[P], ListaDeCompraGroupByOutputType[P]>
        }
      >
    >


  export type ListaDeCompraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    usuarioIdEnviou?: boolean
    status?: boolean
    usuarioEnviou?: boolean | UsuarioDefaultArgs<ExtArgs>
    itens?: boolean | ListaDeCompra$itensArgs<ExtArgs>
    lembretes?: boolean | ListaDeCompra$lembretesArgs<ExtArgs>
    atividades?: boolean | ListaDeCompra$atividadesArgs<ExtArgs>
    _count?: boolean | ListaDeCompraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listaDeCompra"]>

  export type ListaDeCompraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    usuarioIdEnviou?: boolean
    status?: boolean
    usuarioEnviou?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listaDeCompra"]>

  export type ListaDeCompraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    usuarioIdEnviou?: boolean
    status?: boolean
    usuarioEnviou?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listaDeCompra"]>

  export type ListaDeCompraSelectScalar = {
    id?: boolean
    tipo?: boolean
    usuarioIdEnviou?: boolean
    status?: boolean
  }

  export type ListaDeCompraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "usuarioIdEnviou" | "status", ExtArgs["result"]["listaDeCompra"]>
  export type ListaDeCompraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarioEnviou?: boolean | UsuarioDefaultArgs<ExtArgs>
    itens?: boolean | ListaDeCompra$itensArgs<ExtArgs>
    lembretes?: boolean | ListaDeCompra$lembretesArgs<ExtArgs>
    atividades?: boolean | ListaDeCompra$atividadesArgs<ExtArgs>
    _count?: boolean | ListaDeCompraCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ListaDeCompraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarioEnviou?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ListaDeCompraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarioEnviou?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ListaDeCompraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ListaDeCompra"
    objects: {
      usuarioEnviou: Prisma.$UsuarioPayload<ExtArgs>
      itens: Prisma.$ItemListaDeCompraPayload<ExtArgs>[]
      lembretes: Prisma.$LembretePayload<ExtArgs>[]
      atividades: Prisma.$AtividadePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tipo: string
      usuarioIdEnviou: string
      status: boolean
    }, ExtArgs["result"]["listaDeCompra"]>
    composites: {}
  }

  type ListaDeCompraGetPayload<S extends boolean | null | undefined | ListaDeCompraDefaultArgs> = $Result.GetResult<Prisma.$ListaDeCompraPayload, S>

  type ListaDeCompraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListaDeCompraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListaDeCompraCountAggregateInputType | true
    }

  export interface ListaDeCompraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ListaDeCompra'], meta: { name: 'ListaDeCompra' } }
    /**
     * Find zero or one ListaDeCompra that matches the filter.
     * @param {ListaDeCompraFindUniqueArgs} args - Arguments to find a ListaDeCompra
     * @example
     * // Get one ListaDeCompra
     * const listaDeCompra = await prisma.listaDeCompra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListaDeCompraFindUniqueArgs>(args: SelectSubset<T, ListaDeCompraFindUniqueArgs<ExtArgs>>): Prisma__ListaDeCompraClient<$Result.GetResult<Prisma.$ListaDeCompraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ListaDeCompra that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListaDeCompraFindUniqueOrThrowArgs} args - Arguments to find a ListaDeCompra
     * @example
     * // Get one ListaDeCompra
     * const listaDeCompra = await prisma.listaDeCompra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListaDeCompraFindUniqueOrThrowArgs>(args: SelectSubset<T, ListaDeCompraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListaDeCompraClient<$Result.GetResult<Prisma.$ListaDeCompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListaDeCompra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaDeCompraFindFirstArgs} args - Arguments to find a ListaDeCompra
     * @example
     * // Get one ListaDeCompra
     * const listaDeCompra = await prisma.listaDeCompra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListaDeCompraFindFirstArgs>(args?: SelectSubset<T, ListaDeCompraFindFirstArgs<ExtArgs>>): Prisma__ListaDeCompraClient<$Result.GetResult<Prisma.$ListaDeCompraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListaDeCompra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaDeCompraFindFirstOrThrowArgs} args - Arguments to find a ListaDeCompra
     * @example
     * // Get one ListaDeCompra
     * const listaDeCompra = await prisma.listaDeCompra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListaDeCompraFindFirstOrThrowArgs>(args?: SelectSubset<T, ListaDeCompraFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListaDeCompraClient<$Result.GetResult<Prisma.$ListaDeCompraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ListaDeCompras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaDeCompraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListaDeCompras
     * const listaDeCompras = await prisma.listaDeCompra.findMany()
     * 
     * // Get first 10 ListaDeCompras
     * const listaDeCompras = await prisma.listaDeCompra.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listaDeCompraWithIdOnly = await prisma.listaDeCompra.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListaDeCompraFindManyArgs>(args?: SelectSubset<T, ListaDeCompraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaDeCompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ListaDeCompra.
     * @param {ListaDeCompraCreateArgs} args - Arguments to create a ListaDeCompra.
     * @example
     * // Create one ListaDeCompra
     * const ListaDeCompra = await prisma.listaDeCompra.create({
     *   data: {
     *     // ... data to create a ListaDeCompra
     *   }
     * })
     * 
     */
    create<T extends ListaDeCompraCreateArgs>(args: SelectSubset<T, ListaDeCompraCreateArgs<ExtArgs>>): Prisma__ListaDeCompraClient<$Result.GetResult<Prisma.$ListaDeCompraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ListaDeCompras.
     * @param {ListaDeCompraCreateManyArgs} args - Arguments to create many ListaDeCompras.
     * @example
     * // Create many ListaDeCompras
     * const listaDeCompra = await prisma.listaDeCompra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListaDeCompraCreateManyArgs>(args?: SelectSubset<T, ListaDeCompraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ListaDeCompras and returns the data saved in the database.
     * @param {ListaDeCompraCreateManyAndReturnArgs} args - Arguments to create many ListaDeCompras.
     * @example
     * // Create many ListaDeCompras
     * const listaDeCompra = await prisma.listaDeCompra.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ListaDeCompras and only return the `id`
     * const listaDeCompraWithIdOnly = await prisma.listaDeCompra.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListaDeCompraCreateManyAndReturnArgs>(args?: SelectSubset<T, ListaDeCompraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaDeCompraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ListaDeCompra.
     * @param {ListaDeCompraDeleteArgs} args - Arguments to delete one ListaDeCompra.
     * @example
     * // Delete one ListaDeCompra
     * const ListaDeCompra = await prisma.listaDeCompra.delete({
     *   where: {
     *     // ... filter to delete one ListaDeCompra
     *   }
     * })
     * 
     */
    delete<T extends ListaDeCompraDeleteArgs>(args: SelectSubset<T, ListaDeCompraDeleteArgs<ExtArgs>>): Prisma__ListaDeCompraClient<$Result.GetResult<Prisma.$ListaDeCompraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ListaDeCompra.
     * @param {ListaDeCompraUpdateArgs} args - Arguments to update one ListaDeCompra.
     * @example
     * // Update one ListaDeCompra
     * const listaDeCompra = await prisma.listaDeCompra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListaDeCompraUpdateArgs>(args: SelectSubset<T, ListaDeCompraUpdateArgs<ExtArgs>>): Prisma__ListaDeCompraClient<$Result.GetResult<Prisma.$ListaDeCompraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ListaDeCompras.
     * @param {ListaDeCompraDeleteManyArgs} args - Arguments to filter ListaDeCompras to delete.
     * @example
     * // Delete a few ListaDeCompras
     * const { count } = await prisma.listaDeCompra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListaDeCompraDeleteManyArgs>(args?: SelectSubset<T, ListaDeCompraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListaDeCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaDeCompraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListaDeCompras
     * const listaDeCompra = await prisma.listaDeCompra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListaDeCompraUpdateManyArgs>(args: SelectSubset<T, ListaDeCompraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListaDeCompras and returns the data updated in the database.
     * @param {ListaDeCompraUpdateManyAndReturnArgs} args - Arguments to update many ListaDeCompras.
     * @example
     * // Update many ListaDeCompras
     * const listaDeCompra = await prisma.listaDeCompra.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ListaDeCompras and only return the `id`
     * const listaDeCompraWithIdOnly = await prisma.listaDeCompra.updateManyAndReturn({
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
    updateManyAndReturn<T extends ListaDeCompraUpdateManyAndReturnArgs>(args: SelectSubset<T, ListaDeCompraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaDeCompraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ListaDeCompra.
     * @param {ListaDeCompraUpsertArgs} args - Arguments to update or create a ListaDeCompra.
     * @example
     * // Update or create a ListaDeCompra
     * const listaDeCompra = await prisma.listaDeCompra.upsert({
     *   create: {
     *     // ... data to create a ListaDeCompra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListaDeCompra we want to update
     *   }
     * })
     */
    upsert<T extends ListaDeCompraUpsertArgs>(args: SelectSubset<T, ListaDeCompraUpsertArgs<ExtArgs>>): Prisma__ListaDeCompraClient<$Result.GetResult<Prisma.$ListaDeCompraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ListaDeCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaDeCompraCountArgs} args - Arguments to filter ListaDeCompras to count.
     * @example
     * // Count the number of ListaDeCompras
     * const count = await prisma.listaDeCompra.count({
     *   where: {
     *     // ... the filter for the ListaDeCompras we want to count
     *   }
     * })
    **/
    count<T extends ListaDeCompraCountArgs>(
      args?: Subset<T, ListaDeCompraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListaDeCompraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListaDeCompra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaDeCompraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListaDeCompraAggregateArgs>(args: Subset<T, ListaDeCompraAggregateArgs>): Prisma.PrismaPromise<GetListaDeCompraAggregateType<T>>

    /**
     * Group by ListaDeCompra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaDeCompraGroupByArgs} args - Group by arguments.
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
      T extends ListaDeCompraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListaDeCompraGroupByArgs['orderBy'] }
        : { orderBy?: ListaDeCompraGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ListaDeCompraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListaDeCompraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ListaDeCompra model
   */
  readonly fields: ListaDeCompraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListaDeCompra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListaDeCompraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarioEnviou<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itens<T extends ListaDeCompra$itensArgs<ExtArgs> = {}>(args?: Subset<T, ListaDeCompra$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemListaDeCompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lembretes<T extends ListaDeCompra$lembretesArgs<ExtArgs> = {}>(args?: Subset<T, ListaDeCompra$lembretesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LembretePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    atividades<T extends ListaDeCompra$atividadesArgs<ExtArgs> = {}>(args?: Subset<T, ListaDeCompra$atividadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ListaDeCompra model
   */
  interface ListaDeCompraFieldRefs {
    readonly id: FieldRef<"ListaDeCompra", 'String'>
    readonly tipo: FieldRef<"ListaDeCompra", 'String'>
    readonly usuarioIdEnviou: FieldRef<"ListaDeCompra", 'String'>
    readonly status: FieldRef<"ListaDeCompra", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ListaDeCompra findUnique
   */
  export type ListaDeCompraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeCompra
     */
    select?: ListaDeCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeCompra
     */
    omit?: ListaDeCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeCompraInclude<ExtArgs> | null
    /**
     * Filter, which ListaDeCompra to fetch.
     */
    where: ListaDeCompraWhereUniqueInput
  }

  /**
   * ListaDeCompra findUniqueOrThrow
   */
  export type ListaDeCompraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeCompra
     */
    select?: ListaDeCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeCompra
     */
    omit?: ListaDeCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeCompraInclude<ExtArgs> | null
    /**
     * Filter, which ListaDeCompra to fetch.
     */
    where: ListaDeCompraWhereUniqueInput
  }

  /**
   * ListaDeCompra findFirst
   */
  export type ListaDeCompraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeCompra
     */
    select?: ListaDeCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeCompra
     */
    omit?: ListaDeCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeCompraInclude<ExtArgs> | null
    /**
     * Filter, which ListaDeCompra to fetch.
     */
    where?: ListaDeCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaDeCompras to fetch.
     */
    orderBy?: ListaDeCompraOrderByWithRelationInput | ListaDeCompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListaDeCompras.
     */
    cursor?: ListaDeCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaDeCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaDeCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListaDeCompras.
     */
    distinct?: ListaDeCompraScalarFieldEnum | ListaDeCompraScalarFieldEnum[]
  }

  /**
   * ListaDeCompra findFirstOrThrow
   */
  export type ListaDeCompraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeCompra
     */
    select?: ListaDeCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeCompra
     */
    omit?: ListaDeCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeCompraInclude<ExtArgs> | null
    /**
     * Filter, which ListaDeCompra to fetch.
     */
    where?: ListaDeCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaDeCompras to fetch.
     */
    orderBy?: ListaDeCompraOrderByWithRelationInput | ListaDeCompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListaDeCompras.
     */
    cursor?: ListaDeCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaDeCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaDeCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListaDeCompras.
     */
    distinct?: ListaDeCompraScalarFieldEnum | ListaDeCompraScalarFieldEnum[]
  }

  /**
   * ListaDeCompra findMany
   */
  export type ListaDeCompraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeCompra
     */
    select?: ListaDeCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeCompra
     */
    omit?: ListaDeCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeCompraInclude<ExtArgs> | null
    /**
     * Filter, which ListaDeCompras to fetch.
     */
    where?: ListaDeCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaDeCompras to fetch.
     */
    orderBy?: ListaDeCompraOrderByWithRelationInput | ListaDeCompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListaDeCompras.
     */
    cursor?: ListaDeCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaDeCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaDeCompras.
     */
    skip?: number
    distinct?: ListaDeCompraScalarFieldEnum | ListaDeCompraScalarFieldEnum[]
  }

  /**
   * ListaDeCompra create
   */
  export type ListaDeCompraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeCompra
     */
    select?: ListaDeCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeCompra
     */
    omit?: ListaDeCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeCompraInclude<ExtArgs> | null
    /**
     * The data needed to create a ListaDeCompra.
     */
    data: XOR<ListaDeCompraCreateInput, ListaDeCompraUncheckedCreateInput>
  }

  /**
   * ListaDeCompra createMany
   */
  export type ListaDeCompraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListaDeCompras.
     */
    data: ListaDeCompraCreateManyInput | ListaDeCompraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ListaDeCompra createManyAndReturn
   */
  export type ListaDeCompraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeCompra
     */
    select?: ListaDeCompraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeCompra
     */
    omit?: ListaDeCompraOmit<ExtArgs> | null
    /**
     * The data used to create many ListaDeCompras.
     */
    data: ListaDeCompraCreateManyInput | ListaDeCompraCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeCompraIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListaDeCompra update
   */
  export type ListaDeCompraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeCompra
     */
    select?: ListaDeCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeCompra
     */
    omit?: ListaDeCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeCompraInclude<ExtArgs> | null
    /**
     * The data needed to update a ListaDeCompra.
     */
    data: XOR<ListaDeCompraUpdateInput, ListaDeCompraUncheckedUpdateInput>
    /**
     * Choose, which ListaDeCompra to update.
     */
    where: ListaDeCompraWhereUniqueInput
  }

  /**
   * ListaDeCompra updateMany
   */
  export type ListaDeCompraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ListaDeCompras.
     */
    data: XOR<ListaDeCompraUpdateManyMutationInput, ListaDeCompraUncheckedUpdateManyInput>
    /**
     * Filter which ListaDeCompras to update
     */
    where?: ListaDeCompraWhereInput
    /**
     * Limit how many ListaDeCompras to update.
     */
    limit?: number
  }

  /**
   * ListaDeCompra updateManyAndReturn
   */
  export type ListaDeCompraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeCompra
     */
    select?: ListaDeCompraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeCompra
     */
    omit?: ListaDeCompraOmit<ExtArgs> | null
    /**
     * The data used to update ListaDeCompras.
     */
    data: XOR<ListaDeCompraUpdateManyMutationInput, ListaDeCompraUncheckedUpdateManyInput>
    /**
     * Filter which ListaDeCompras to update
     */
    where?: ListaDeCompraWhereInput
    /**
     * Limit how many ListaDeCompras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeCompraIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListaDeCompra upsert
   */
  export type ListaDeCompraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeCompra
     */
    select?: ListaDeCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeCompra
     */
    omit?: ListaDeCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeCompraInclude<ExtArgs> | null
    /**
     * The filter to search for the ListaDeCompra to update in case it exists.
     */
    where: ListaDeCompraWhereUniqueInput
    /**
     * In case the ListaDeCompra found by the `where` argument doesn't exist, create a new ListaDeCompra with this data.
     */
    create: XOR<ListaDeCompraCreateInput, ListaDeCompraUncheckedCreateInput>
    /**
     * In case the ListaDeCompra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListaDeCompraUpdateInput, ListaDeCompraUncheckedUpdateInput>
  }

  /**
   * ListaDeCompra delete
   */
  export type ListaDeCompraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeCompra
     */
    select?: ListaDeCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeCompra
     */
    omit?: ListaDeCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeCompraInclude<ExtArgs> | null
    /**
     * Filter which ListaDeCompra to delete.
     */
    where: ListaDeCompraWhereUniqueInput
  }

  /**
   * ListaDeCompra deleteMany
   */
  export type ListaDeCompraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListaDeCompras to delete
     */
    where?: ListaDeCompraWhereInput
    /**
     * Limit how many ListaDeCompras to delete.
     */
    limit?: number
  }

  /**
   * ListaDeCompra.itens
   */
  export type ListaDeCompra$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaDeCompra
     */
    select?: ItemListaDeCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaDeCompra
     */
    omit?: ItemListaDeCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaDeCompraInclude<ExtArgs> | null
    where?: ItemListaDeCompraWhereInput
    orderBy?: ItemListaDeCompraOrderByWithRelationInput | ItemListaDeCompraOrderByWithRelationInput[]
    cursor?: ItemListaDeCompraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemListaDeCompraScalarFieldEnum | ItemListaDeCompraScalarFieldEnum[]
  }

  /**
   * ListaDeCompra.lembretes
   */
  export type ListaDeCompra$lembretesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lembrete
     */
    select?: LembreteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lembrete
     */
    omit?: LembreteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LembreteInclude<ExtArgs> | null
    where?: LembreteWhereInput
    orderBy?: LembreteOrderByWithRelationInput | LembreteOrderByWithRelationInput[]
    cursor?: LembreteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LembreteScalarFieldEnum | LembreteScalarFieldEnum[]
  }

  /**
   * ListaDeCompra.atividades
   */
  export type ListaDeCompra$atividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    where?: AtividadeWhereInput
    orderBy?: AtividadeOrderByWithRelationInput | AtividadeOrderByWithRelationInput[]
    cursor?: AtividadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtividadeScalarFieldEnum | AtividadeScalarFieldEnum[]
  }

  /**
   * ListaDeCompra without action
   */
  export type ListaDeCompraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeCompra
     */
    select?: ListaDeCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeCompra
     */
    omit?: ListaDeCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeCompraInclude<ExtArgs> | null
  }


  /**
   * Model ItemListaDeCompra
   */

  export type AggregateItemListaDeCompra = {
    _count: ItemListaDeCompraCountAggregateOutputType | null
    _avg: ItemListaDeCompraAvgAggregateOutputType | null
    _sum: ItemListaDeCompraSumAggregateOutputType | null
    _min: ItemListaDeCompraMinAggregateOutputType | null
    _max: ItemListaDeCompraMaxAggregateOutputType | null
  }

  export type ItemListaDeCompraAvgAggregateOutputType = {
    quantidade: number | null
  }

  export type ItemListaDeCompraSumAggregateOutputType = {
    quantidade: number | null
  }

  export type ItemListaDeCompraMinAggregateOutputType = {
    id: string | null
    descricao: string | null
    quantidade: number | null
    comprado: boolean | null
    listaId: string | null
  }

  export type ItemListaDeCompraMaxAggregateOutputType = {
    id: string | null
    descricao: string | null
    quantidade: number | null
    comprado: boolean | null
    listaId: string | null
  }

  export type ItemListaDeCompraCountAggregateOutputType = {
    id: number
    descricao: number
    quantidade: number
    comprado: number
    listaId: number
    _all: number
  }


  export type ItemListaDeCompraAvgAggregateInputType = {
    quantidade?: true
  }

  export type ItemListaDeCompraSumAggregateInputType = {
    quantidade?: true
  }

  export type ItemListaDeCompraMinAggregateInputType = {
    id?: true
    descricao?: true
    quantidade?: true
    comprado?: true
    listaId?: true
  }

  export type ItemListaDeCompraMaxAggregateInputType = {
    id?: true
    descricao?: true
    quantidade?: true
    comprado?: true
    listaId?: true
  }

  export type ItemListaDeCompraCountAggregateInputType = {
    id?: true
    descricao?: true
    quantidade?: true
    comprado?: true
    listaId?: true
    _all?: true
  }

  export type ItemListaDeCompraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemListaDeCompra to aggregate.
     */
    where?: ItemListaDeCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemListaDeCompras to fetch.
     */
    orderBy?: ItemListaDeCompraOrderByWithRelationInput | ItemListaDeCompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemListaDeCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemListaDeCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemListaDeCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemListaDeCompras
    **/
    _count?: true | ItemListaDeCompraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemListaDeCompraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemListaDeCompraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemListaDeCompraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemListaDeCompraMaxAggregateInputType
  }

  export type GetItemListaDeCompraAggregateType<T extends ItemListaDeCompraAggregateArgs> = {
        [P in keyof T & keyof AggregateItemListaDeCompra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemListaDeCompra[P]>
      : GetScalarType<T[P], AggregateItemListaDeCompra[P]>
  }




  export type ItemListaDeCompraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemListaDeCompraWhereInput
    orderBy?: ItemListaDeCompraOrderByWithAggregationInput | ItemListaDeCompraOrderByWithAggregationInput[]
    by: ItemListaDeCompraScalarFieldEnum[] | ItemListaDeCompraScalarFieldEnum
    having?: ItemListaDeCompraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemListaDeCompraCountAggregateInputType | true
    _avg?: ItemListaDeCompraAvgAggregateInputType
    _sum?: ItemListaDeCompraSumAggregateInputType
    _min?: ItemListaDeCompraMinAggregateInputType
    _max?: ItemListaDeCompraMaxAggregateInputType
  }

  export type ItemListaDeCompraGroupByOutputType = {
    id: string
    descricao: string
    quantidade: number
    comprado: boolean
    listaId: string
    _count: ItemListaDeCompraCountAggregateOutputType | null
    _avg: ItemListaDeCompraAvgAggregateOutputType | null
    _sum: ItemListaDeCompraSumAggregateOutputType | null
    _min: ItemListaDeCompraMinAggregateOutputType | null
    _max: ItemListaDeCompraMaxAggregateOutputType | null
  }

  type GetItemListaDeCompraGroupByPayload<T extends ItemListaDeCompraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemListaDeCompraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemListaDeCompraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemListaDeCompraGroupByOutputType[P]>
            : GetScalarType<T[P], ItemListaDeCompraGroupByOutputType[P]>
        }
      >
    >


  export type ItemListaDeCompraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    quantidade?: boolean
    comprado?: boolean
    listaId?: boolean
    lista?: boolean | ListaDeCompraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemListaDeCompra"]>

  export type ItemListaDeCompraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    quantidade?: boolean
    comprado?: boolean
    listaId?: boolean
    lista?: boolean | ListaDeCompraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemListaDeCompra"]>

  export type ItemListaDeCompraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    quantidade?: boolean
    comprado?: boolean
    listaId?: boolean
    lista?: boolean | ListaDeCompraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemListaDeCompra"]>

  export type ItemListaDeCompraSelectScalar = {
    id?: boolean
    descricao?: boolean
    quantidade?: boolean
    comprado?: boolean
    listaId?: boolean
  }

  export type ItemListaDeCompraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao" | "quantidade" | "comprado" | "listaId", ExtArgs["result"]["itemListaDeCompra"]>
  export type ItemListaDeCompraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lista?: boolean | ListaDeCompraDefaultArgs<ExtArgs>
  }
  export type ItemListaDeCompraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lista?: boolean | ListaDeCompraDefaultArgs<ExtArgs>
  }
  export type ItemListaDeCompraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lista?: boolean | ListaDeCompraDefaultArgs<ExtArgs>
  }

  export type $ItemListaDeCompraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemListaDeCompra"
    objects: {
      lista: Prisma.$ListaDeCompraPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      descricao: string
      quantidade: number
      comprado: boolean
      listaId: string
    }, ExtArgs["result"]["itemListaDeCompra"]>
    composites: {}
  }

  type ItemListaDeCompraGetPayload<S extends boolean | null | undefined | ItemListaDeCompraDefaultArgs> = $Result.GetResult<Prisma.$ItemListaDeCompraPayload, S>

  type ItemListaDeCompraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemListaDeCompraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemListaDeCompraCountAggregateInputType | true
    }

  export interface ItemListaDeCompraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemListaDeCompra'], meta: { name: 'ItemListaDeCompra' } }
    /**
     * Find zero or one ItemListaDeCompra that matches the filter.
     * @param {ItemListaDeCompraFindUniqueArgs} args - Arguments to find a ItemListaDeCompra
     * @example
     * // Get one ItemListaDeCompra
     * const itemListaDeCompra = await prisma.itemListaDeCompra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemListaDeCompraFindUniqueArgs>(args: SelectSubset<T, ItemListaDeCompraFindUniqueArgs<ExtArgs>>): Prisma__ItemListaDeCompraClient<$Result.GetResult<Prisma.$ItemListaDeCompraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemListaDeCompra that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemListaDeCompraFindUniqueOrThrowArgs} args - Arguments to find a ItemListaDeCompra
     * @example
     * // Get one ItemListaDeCompra
     * const itemListaDeCompra = await prisma.itemListaDeCompra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemListaDeCompraFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemListaDeCompraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemListaDeCompraClient<$Result.GetResult<Prisma.$ItemListaDeCompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemListaDeCompra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListaDeCompraFindFirstArgs} args - Arguments to find a ItemListaDeCompra
     * @example
     * // Get one ItemListaDeCompra
     * const itemListaDeCompra = await prisma.itemListaDeCompra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemListaDeCompraFindFirstArgs>(args?: SelectSubset<T, ItemListaDeCompraFindFirstArgs<ExtArgs>>): Prisma__ItemListaDeCompraClient<$Result.GetResult<Prisma.$ItemListaDeCompraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemListaDeCompra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListaDeCompraFindFirstOrThrowArgs} args - Arguments to find a ItemListaDeCompra
     * @example
     * // Get one ItemListaDeCompra
     * const itemListaDeCompra = await prisma.itemListaDeCompra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemListaDeCompraFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemListaDeCompraFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemListaDeCompraClient<$Result.GetResult<Prisma.$ItemListaDeCompraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemListaDeCompras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListaDeCompraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemListaDeCompras
     * const itemListaDeCompras = await prisma.itemListaDeCompra.findMany()
     * 
     * // Get first 10 ItemListaDeCompras
     * const itemListaDeCompras = await prisma.itemListaDeCompra.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemListaDeCompraWithIdOnly = await prisma.itemListaDeCompra.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemListaDeCompraFindManyArgs>(args?: SelectSubset<T, ItemListaDeCompraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemListaDeCompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemListaDeCompra.
     * @param {ItemListaDeCompraCreateArgs} args - Arguments to create a ItemListaDeCompra.
     * @example
     * // Create one ItemListaDeCompra
     * const ItemListaDeCompra = await prisma.itemListaDeCompra.create({
     *   data: {
     *     // ... data to create a ItemListaDeCompra
     *   }
     * })
     * 
     */
    create<T extends ItemListaDeCompraCreateArgs>(args: SelectSubset<T, ItemListaDeCompraCreateArgs<ExtArgs>>): Prisma__ItemListaDeCompraClient<$Result.GetResult<Prisma.$ItemListaDeCompraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemListaDeCompras.
     * @param {ItemListaDeCompraCreateManyArgs} args - Arguments to create many ItemListaDeCompras.
     * @example
     * // Create many ItemListaDeCompras
     * const itemListaDeCompra = await prisma.itemListaDeCompra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemListaDeCompraCreateManyArgs>(args?: SelectSubset<T, ItemListaDeCompraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemListaDeCompras and returns the data saved in the database.
     * @param {ItemListaDeCompraCreateManyAndReturnArgs} args - Arguments to create many ItemListaDeCompras.
     * @example
     * // Create many ItemListaDeCompras
     * const itemListaDeCompra = await prisma.itemListaDeCompra.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemListaDeCompras and only return the `id`
     * const itemListaDeCompraWithIdOnly = await prisma.itemListaDeCompra.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemListaDeCompraCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemListaDeCompraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemListaDeCompraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemListaDeCompra.
     * @param {ItemListaDeCompraDeleteArgs} args - Arguments to delete one ItemListaDeCompra.
     * @example
     * // Delete one ItemListaDeCompra
     * const ItemListaDeCompra = await prisma.itemListaDeCompra.delete({
     *   where: {
     *     // ... filter to delete one ItemListaDeCompra
     *   }
     * })
     * 
     */
    delete<T extends ItemListaDeCompraDeleteArgs>(args: SelectSubset<T, ItemListaDeCompraDeleteArgs<ExtArgs>>): Prisma__ItemListaDeCompraClient<$Result.GetResult<Prisma.$ItemListaDeCompraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemListaDeCompra.
     * @param {ItemListaDeCompraUpdateArgs} args - Arguments to update one ItemListaDeCompra.
     * @example
     * // Update one ItemListaDeCompra
     * const itemListaDeCompra = await prisma.itemListaDeCompra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemListaDeCompraUpdateArgs>(args: SelectSubset<T, ItemListaDeCompraUpdateArgs<ExtArgs>>): Prisma__ItemListaDeCompraClient<$Result.GetResult<Prisma.$ItemListaDeCompraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemListaDeCompras.
     * @param {ItemListaDeCompraDeleteManyArgs} args - Arguments to filter ItemListaDeCompras to delete.
     * @example
     * // Delete a few ItemListaDeCompras
     * const { count } = await prisma.itemListaDeCompra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemListaDeCompraDeleteManyArgs>(args?: SelectSubset<T, ItemListaDeCompraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemListaDeCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListaDeCompraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemListaDeCompras
     * const itemListaDeCompra = await prisma.itemListaDeCompra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemListaDeCompraUpdateManyArgs>(args: SelectSubset<T, ItemListaDeCompraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemListaDeCompras and returns the data updated in the database.
     * @param {ItemListaDeCompraUpdateManyAndReturnArgs} args - Arguments to update many ItemListaDeCompras.
     * @example
     * // Update many ItemListaDeCompras
     * const itemListaDeCompra = await prisma.itemListaDeCompra.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemListaDeCompras and only return the `id`
     * const itemListaDeCompraWithIdOnly = await prisma.itemListaDeCompra.updateManyAndReturn({
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
    updateManyAndReturn<T extends ItemListaDeCompraUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemListaDeCompraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemListaDeCompraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemListaDeCompra.
     * @param {ItemListaDeCompraUpsertArgs} args - Arguments to update or create a ItemListaDeCompra.
     * @example
     * // Update or create a ItemListaDeCompra
     * const itemListaDeCompra = await prisma.itemListaDeCompra.upsert({
     *   create: {
     *     // ... data to create a ItemListaDeCompra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemListaDeCompra we want to update
     *   }
     * })
     */
    upsert<T extends ItemListaDeCompraUpsertArgs>(args: SelectSubset<T, ItemListaDeCompraUpsertArgs<ExtArgs>>): Prisma__ItemListaDeCompraClient<$Result.GetResult<Prisma.$ItemListaDeCompraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemListaDeCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListaDeCompraCountArgs} args - Arguments to filter ItemListaDeCompras to count.
     * @example
     * // Count the number of ItemListaDeCompras
     * const count = await prisma.itemListaDeCompra.count({
     *   where: {
     *     // ... the filter for the ItemListaDeCompras we want to count
     *   }
     * })
    **/
    count<T extends ItemListaDeCompraCountArgs>(
      args?: Subset<T, ItemListaDeCompraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemListaDeCompraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemListaDeCompra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListaDeCompraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemListaDeCompraAggregateArgs>(args: Subset<T, ItemListaDeCompraAggregateArgs>): Prisma.PrismaPromise<GetItemListaDeCompraAggregateType<T>>

    /**
     * Group by ItemListaDeCompra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListaDeCompraGroupByArgs} args - Group by arguments.
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
      T extends ItemListaDeCompraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemListaDeCompraGroupByArgs['orderBy'] }
        : { orderBy?: ItemListaDeCompraGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemListaDeCompraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemListaDeCompraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemListaDeCompra model
   */
  readonly fields: ItemListaDeCompraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemListaDeCompra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemListaDeCompraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lista<T extends ListaDeCompraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListaDeCompraDefaultArgs<ExtArgs>>): Prisma__ListaDeCompraClient<$Result.GetResult<Prisma.$ListaDeCompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ItemListaDeCompra model
   */
  interface ItemListaDeCompraFieldRefs {
    readonly id: FieldRef<"ItemListaDeCompra", 'String'>
    readonly descricao: FieldRef<"ItemListaDeCompra", 'String'>
    readonly quantidade: FieldRef<"ItemListaDeCompra", 'Int'>
    readonly comprado: FieldRef<"ItemListaDeCompra", 'Boolean'>
    readonly listaId: FieldRef<"ItemListaDeCompra", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ItemListaDeCompra findUnique
   */
  export type ItemListaDeCompraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaDeCompra
     */
    select?: ItemListaDeCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaDeCompra
     */
    omit?: ItemListaDeCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaDeCompraInclude<ExtArgs> | null
    /**
     * Filter, which ItemListaDeCompra to fetch.
     */
    where: ItemListaDeCompraWhereUniqueInput
  }

  /**
   * ItemListaDeCompra findUniqueOrThrow
   */
  export type ItemListaDeCompraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaDeCompra
     */
    select?: ItemListaDeCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaDeCompra
     */
    omit?: ItemListaDeCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaDeCompraInclude<ExtArgs> | null
    /**
     * Filter, which ItemListaDeCompra to fetch.
     */
    where: ItemListaDeCompraWhereUniqueInput
  }

  /**
   * ItemListaDeCompra findFirst
   */
  export type ItemListaDeCompraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaDeCompra
     */
    select?: ItemListaDeCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaDeCompra
     */
    omit?: ItemListaDeCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaDeCompraInclude<ExtArgs> | null
    /**
     * Filter, which ItemListaDeCompra to fetch.
     */
    where?: ItemListaDeCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemListaDeCompras to fetch.
     */
    orderBy?: ItemListaDeCompraOrderByWithRelationInput | ItemListaDeCompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemListaDeCompras.
     */
    cursor?: ItemListaDeCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemListaDeCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemListaDeCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemListaDeCompras.
     */
    distinct?: ItemListaDeCompraScalarFieldEnum | ItemListaDeCompraScalarFieldEnum[]
  }

  /**
   * ItemListaDeCompra findFirstOrThrow
   */
  export type ItemListaDeCompraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaDeCompra
     */
    select?: ItemListaDeCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaDeCompra
     */
    omit?: ItemListaDeCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaDeCompraInclude<ExtArgs> | null
    /**
     * Filter, which ItemListaDeCompra to fetch.
     */
    where?: ItemListaDeCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemListaDeCompras to fetch.
     */
    orderBy?: ItemListaDeCompraOrderByWithRelationInput | ItemListaDeCompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemListaDeCompras.
     */
    cursor?: ItemListaDeCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemListaDeCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemListaDeCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemListaDeCompras.
     */
    distinct?: ItemListaDeCompraScalarFieldEnum | ItemListaDeCompraScalarFieldEnum[]
  }

  /**
   * ItemListaDeCompra findMany
   */
  export type ItemListaDeCompraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaDeCompra
     */
    select?: ItemListaDeCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaDeCompra
     */
    omit?: ItemListaDeCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaDeCompraInclude<ExtArgs> | null
    /**
     * Filter, which ItemListaDeCompras to fetch.
     */
    where?: ItemListaDeCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemListaDeCompras to fetch.
     */
    orderBy?: ItemListaDeCompraOrderByWithRelationInput | ItemListaDeCompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemListaDeCompras.
     */
    cursor?: ItemListaDeCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemListaDeCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemListaDeCompras.
     */
    skip?: number
    distinct?: ItemListaDeCompraScalarFieldEnum | ItemListaDeCompraScalarFieldEnum[]
  }

  /**
   * ItemListaDeCompra create
   */
  export type ItemListaDeCompraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaDeCompra
     */
    select?: ItemListaDeCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaDeCompra
     */
    omit?: ItemListaDeCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaDeCompraInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemListaDeCompra.
     */
    data: XOR<ItemListaDeCompraCreateInput, ItemListaDeCompraUncheckedCreateInput>
  }

  /**
   * ItemListaDeCompra createMany
   */
  export type ItemListaDeCompraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemListaDeCompras.
     */
    data: ItemListaDeCompraCreateManyInput | ItemListaDeCompraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemListaDeCompra createManyAndReturn
   */
  export type ItemListaDeCompraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaDeCompra
     */
    select?: ItemListaDeCompraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaDeCompra
     */
    omit?: ItemListaDeCompraOmit<ExtArgs> | null
    /**
     * The data used to create many ItemListaDeCompras.
     */
    data: ItemListaDeCompraCreateManyInput | ItemListaDeCompraCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaDeCompraIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemListaDeCompra update
   */
  export type ItemListaDeCompraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaDeCompra
     */
    select?: ItemListaDeCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaDeCompra
     */
    omit?: ItemListaDeCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaDeCompraInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemListaDeCompra.
     */
    data: XOR<ItemListaDeCompraUpdateInput, ItemListaDeCompraUncheckedUpdateInput>
    /**
     * Choose, which ItemListaDeCompra to update.
     */
    where: ItemListaDeCompraWhereUniqueInput
  }

  /**
   * ItemListaDeCompra updateMany
   */
  export type ItemListaDeCompraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemListaDeCompras.
     */
    data: XOR<ItemListaDeCompraUpdateManyMutationInput, ItemListaDeCompraUncheckedUpdateManyInput>
    /**
     * Filter which ItemListaDeCompras to update
     */
    where?: ItemListaDeCompraWhereInput
    /**
     * Limit how many ItemListaDeCompras to update.
     */
    limit?: number
  }

  /**
   * ItemListaDeCompra updateManyAndReturn
   */
  export type ItemListaDeCompraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaDeCompra
     */
    select?: ItemListaDeCompraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaDeCompra
     */
    omit?: ItemListaDeCompraOmit<ExtArgs> | null
    /**
     * The data used to update ItemListaDeCompras.
     */
    data: XOR<ItemListaDeCompraUpdateManyMutationInput, ItemListaDeCompraUncheckedUpdateManyInput>
    /**
     * Filter which ItemListaDeCompras to update
     */
    where?: ItemListaDeCompraWhereInput
    /**
     * Limit how many ItemListaDeCompras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaDeCompraIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemListaDeCompra upsert
   */
  export type ItemListaDeCompraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaDeCompra
     */
    select?: ItemListaDeCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaDeCompra
     */
    omit?: ItemListaDeCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaDeCompraInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemListaDeCompra to update in case it exists.
     */
    where: ItemListaDeCompraWhereUniqueInput
    /**
     * In case the ItemListaDeCompra found by the `where` argument doesn't exist, create a new ItemListaDeCompra with this data.
     */
    create: XOR<ItemListaDeCompraCreateInput, ItemListaDeCompraUncheckedCreateInput>
    /**
     * In case the ItemListaDeCompra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemListaDeCompraUpdateInput, ItemListaDeCompraUncheckedUpdateInput>
  }

  /**
   * ItemListaDeCompra delete
   */
  export type ItemListaDeCompraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaDeCompra
     */
    select?: ItemListaDeCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaDeCompra
     */
    omit?: ItemListaDeCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaDeCompraInclude<ExtArgs> | null
    /**
     * Filter which ItemListaDeCompra to delete.
     */
    where: ItemListaDeCompraWhereUniqueInput
  }

  /**
   * ItemListaDeCompra deleteMany
   */
  export type ItemListaDeCompraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemListaDeCompras to delete
     */
    where?: ItemListaDeCompraWhereInput
    /**
     * Limit how many ItemListaDeCompras to delete.
     */
    limit?: number
  }

  /**
   * ItemListaDeCompra without action
   */
  export type ItemListaDeCompraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaDeCompra
     */
    select?: ItemListaDeCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaDeCompra
     */
    omit?: ItemListaDeCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaDeCompraInclude<ExtArgs> | null
  }


  /**
   * Model Veiculo
   */

  export type AggregateVeiculo = {
    _count: VeiculoCountAggregateOutputType | null
    _avg: VeiculoAvgAggregateOutputType | null
    _sum: VeiculoSumAggregateOutputType | null
    _min: VeiculoMinAggregateOutputType | null
    _max: VeiculoMaxAggregateOutputType | null
  }

  export type VeiculoAvgAggregateOutputType = {
    ano: number | null
  }

  export type VeiculoSumAggregateOutputType = {
    ano: number | null
  }

  export type VeiculoMinAggregateOutputType = {
    id: string | null
    marca: string | null
    modelo: string | null
    ano: number | null
    placa: string | null
    usuarioId: string | null
  }

  export type VeiculoMaxAggregateOutputType = {
    id: string | null
    marca: string | null
    modelo: string | null
    ano: number | null
    placa: string | null
    usuarioId: string | null
  }

  export type VeiculoCountAggregateOutputType = {
    id: number
    marca: number
    modelo: number
    ano: number
    placa: number
    usuarioId: number
    _all: number
  }


  export type VeiculoAvgAggregateInputType = {
    ano?: true
  }

  export type VeiculoSumAggregateInputType = {
    ano?: true
  }

  export type VeiculoMinAggregateInputType = {
    id?: true
    marca?: true
    modelo?: true
    ano?: true
    placa?: true
    usuarioId?: true
  }

  export type VeiculoMaxAggregateInputType = {
    id?: true
    marca?: true
    modelo?: true
    ano?: true
    placa?: true
    usuarioId?: true
  }

  export type VeiculoCountAggregateInputType = {
    id?: true
    marca?: true
    modelo?: true
    ano?: true
    placa?: true
    usuarioId?: true
    _all?: true
  }

  export type VeiculoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Veiculo to aggregate.
     */
    where?: VeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veiculos to fetch.
     */
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VeiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Veiculos
    **/
    _count?: true | VeiculoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VeiculoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VeiculoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VeiculoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VeiculoMaxAggregateInputType
  }

  export type GetVeiculoAggregateType<T extends VeiculoAggregateArgs> = {
        [P in keyof T & keyof AggregateVeiculo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVeiculo[P]>
      : GetScalarType<T[P], AggregateVeiculo[P]>
  }




  export type VeiculoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeiculoWhereInput
    orderBy?: VeiculoOrderByWithAggregationInput | VeiculoOrderByWithAggregationInput[]
    by: VeiculoScalarFieldEnum[] | VeiculoScalarFieldEnum
    having?: VeiculoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VeiculoCountAggregateInputType | true
    _avg?: VeiculoAvgAggregateInputType
    _sum?: VeiculoSumAggregateInputType
    _min?: VeiculoMinAggregateInputType
    _max?: VeiculoMaxAggregateInputType
  }

  export type VeiculoGroupByOutputType = {
    id: string
    marca: string
    modelo: string
    ano: number
    placa: string
    usuarioId: string
    _count: VeiculoCountAggregateOutputType | null
    _avg: VeiculoAvgAggregateOutputType | null
    _sum: VeiculoSumAggregateOutputType | null
    _min: VeiculoMinAggregateOutputType | null
    _max: VeiculoMaxAggregateOutputType | null
  }

  type GetVeiculoGroupByPayload<T extends VeiculoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VeiculoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VeiculoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VeiculoGroupByOutputType[P]>
            : GetScalarType<T[P], VeiculoGroupByOutputType[P]>
        }
      >
    >


  export type VeiculoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marca?: boolean
    modelo?: boolean
    ano?: boolean
    placa?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    Lembrete?: boolean | Veiculo$LembreteArgs<ExtArgs>
    manutencoes?: boolean | Veiculo$manutencoesArgs<ExtArgs>
    atividades?: boolean | Veiculo$atividadesArgs<ExtArgs>
    _count?: boolean | VeiculoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["veiculo"]>

  export type VeiculoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marca?: boolean
    modelo?: boolean
    ano?: boolean
    placa?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["veiculo"]>

  export type VeiculoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marca?: boolean
    modelo?: boolean
    ano?: boolean
    placa?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["veiculo"]>

  export type VeiculoSelectScalar = {
    id?: boolean
    marca?: boolean
    modelo?: boolean
    ano?: boolean
    placa?: boolean
    usuarioId?: boolean
  }

  export type VeiculoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "marca" | "modelo" | "ano" | "placa" | "usuarioId", ExtArgs["result"]["veiculo"]>
  export type VeiculoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    Lembrete?: boolean | Veiculo$LembreteArgs<ExtArgs>
    manutencoes?: boolean | Veiculo$manutencoesArgs<ExtArgs>
    atividades?: boolean | Veiculo$atividadesArgs<ExtArgs>
    _count?: boolean | VeiculoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VeiculoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type VeiculoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $VeiculoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Veiculo"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      Lembrete: Prisma.$LembretePayload<ExtArgs>[]
      manutencoes: Prisma.$RegistroDeManutencaoPayload<ExtArgs>[]
      atividades: Prisma.$AtividadePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      marca: string
      modelo: string
      ano: number
      placa: string
      usuarioId: string
    }, ExtArgs["result"]["veiculo"]>
    composites: {}
  }

  type VeiculoGetPayload<S extends boolean | null | undefined | VeiculoDefaultArgs> = $Result.GetResult<Prisma.$VeiculoPayload, S>

  type VeiculoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VeiculoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VeiculoCountAggregateInputType | true
    }

  export interface VeiculoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Veiculo'], meta: { name: 'Veiculo' } }
    /**
     * Find zero or one Veiculo that matches the filter.
     * @param {VeiculoFindUniqueArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VeiculoFindUniqueArgs>(args: SelectSubset<T, VeiculoFindUniqueArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Veiculo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VeiculoFindUniqueOrThrowArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VeiculoFindUniqueOrThrowArgs>(args: SelectSubset<T, VeiculoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Veiculo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoFindFirstArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VeiculoFindFirstArgs>(args?: SelectSubset<T, VeiculoFindFirstArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Veiculo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoFindFirstOrThrowArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VeiculoFindFirstOrThrowArgs>(args?: SelectSubset<T, VeiculoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Veiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Veiculos
     * const veiculos = await prisma.veiculo.findMany()
     * 
     * // Get first 10 Veiculos
     * const veiculos = await prisma.veiculo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const veiculoWithIdOnly = await prisma.veiculo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VeiculoFindManyArgs>(args?: SelectSubset<T, VeiculoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Veiculo.
     * @param {VeiculoCreateArgs} args - Arguments to create a Veiculo.
     * @example
     * // Create one Veiculo
     * const Veiculo = await prisma.veiculo.create({
     *   data: {
     *     // ... data to create a Veiculo
     *   }
     * })
     * 
     */
    create<T extends VeiculoCreateArgs>(args: SelectSubset<T, VeiculoCreateArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Veiculos.
     * @param {VeiculoCreateManyArgs} args - Arguments to create many Veiculos.
     * @example
     * // Create many Veiculos
     * const veiculo = await prisma.veiculo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VeiculoCreateManyArgs>(args?: SelectSubset<T, VeiculoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Veiculos and returns the data saved in the database.
     * @param {VeiculoCreateManyAndReturnArgs} args - Arguments to create many Veiculos.
     * @example
     * // Create many Veiculos
     * const veiculo = await prisma.veiculo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Veiculos and only return the `id`
     * const veiculoWithIdOnly = await prisma.veiculo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VeiculoCreateManyAndReturnArgs>(args?: SelectSubset<T, VeiculoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Veiculo.
     * @param {VeiculoDeleteArgs} args - Arguments to delete one Veiculo.
     * @example
     * // Delete one Veiculo
     * const Veiculo = await prisma.veiculo.delete({
     *   where: {
     *     // ... filter to delete one Veiculo
     *   }
     * })
     * 
     */
    delete<T extends VeiculoDeleteArgs>(args: SelectSubset<T, VeiculoDeleteArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Veiculo.
     * @param {VeiculoUpdateArgs} args - Arguments to update one Veiculo.
     * @example
     * // Update one Veiculo
     * const veiculo = await prisma.veiculo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VeiculoUpdateArgs>(args: SelectSubset<T, VeiculoUpdateArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Veiculos.
     * @param {VeiculoDeleteManyArgs} args - Arguments to filter Veiculos to delete.
     * @example
     * // Delete a few Veiculos
     * const { count } = await prisma.veiculo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VeiculoDeleteManyArgs>(args?: SelectSubset<T, VeiculoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Veiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Veiculos
     * const veiculo = await prisma.veiculo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VeiculoUpdateManyArgs>(args: SelectSubset<T, VeiculoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Veiculos and returns the data updated in the database.
     * @param {VeiculoUpdateManyAndReturnArgs} args - Arguments to update many Veiculos.
     * @example
     * // Update many Veiculos
     * const veiculo = await prisma.veiculo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Veiculos and only return the `id`
     * const veiculoWithIdOnly = await prisma.veiculo.updateManyAndReturn({
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
    updateManyAndReturn<T extends VeiculoUpdateManyAndReturnArgs>(args: SelectSubset<T, VeiculoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Veiculo.
     * @param {VeiculoUpsertArgs} args - Arguments to update or create a Veiculo.
     * @example
     * // Update or create a Veiculo
     * const veiculo = await prisma.veiculo.upsert({
     *   create: {
     *     // ... data to create a Veiculo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Veiculo we want to update
     *   }
     * })
     */
    upsert<T extends VeiculoUpsertArgs>(args: SelectSubset<T, VeiculoUpsertArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Veiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoCountArgs} args - Arguments to filter Veiculos to count.
     * @example
     * // Count the number of Veiculos
     * const count = await prisma.veiculo.count({
     *   where: {
     *     // ... the filter for the Veiculos we want to count
     *   }
     * })
    **/
    count<T extends VeiculoCountArgs>(
      args?: Subset<T, VeiculoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VeiculoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Veiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VeiculoAggregateArgs>(args: Subset<T, VeiculoAggregateArgs>): Prisma.PrismaPromise<GetVeiculoAggregateType<T>>

    /**
     * Group by Veiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoGroupByArgs} args - Group by arguments.
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
      T extends VeiculoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VeiculoGroupByArgs['orderBy'] }
        : { orderBy?: VeiculoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VeiculoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVeiculoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Veiculo model
   */
  readonly fields: VeiculoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Veiculo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VeiculoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Lembrete<T extends Veiculo$LembreteArgs<ExtArgs> = {}>(args?: Subset<T, Veiculo$LembreteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LembretePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    manutencoes<T extends Veiculo$manutencoesArgs<ExtArgs> = {}>(args?: Subset<T, Veiculo$manutencoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroDeManutencaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    atividades<T extends Veiculo$atividadesArgs<ExtArgs> = {}>(args?: Subset<T, Veiculo$atividadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Veiculo model
   */
  interface VeiculoFieldRefs {
    readonly id: FieldRef<"Veiculo", 'String'>
    readonly marca: FieldRef<"Veiculo", 'String'>
    readonly modelo: FieldRef<"Veiculo", 'String'>
    readonly ano: FieldRef<"Veiculo", 'Int'>
    readonly placa: FieldRef<"Veiculo", 'String'>
    readonly usuarioId: FieldRef<"Veiculo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Veiculo findUnique
   */
  export type VeiculoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculo to fetch.
     */
    where: VeiculoWhereUniqueInput
  }

  /**
   * Veiculo findUniqueOrThrow
   */
  export type VeiculoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculo to fetch.
     */
    where: VeiculoWhereUniqueInput
  }

  /**
   * Veiculo findFirst
   */
  export type VeiculoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculo to fetch.
     */
    where?: VeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veiculos to fetch.
     */
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Veiculos.
     */
    cursor?: VeiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Veiculos.
     */
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * Veiculo findFirstOrThrow
   */
  export type VeiculoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculo to fetch.
     */
    where?: VeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veiculos to fetch.
     */
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Veiculos.
     */
    cursor?: VeiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Veiculos.
     */
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * Veiculo findMany
   */
  export type VeiculoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculos to fetch.
     */
    where?: VeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veiculos to fetch.
     */
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Veiculos.
     */
    cursor?: VeiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veiculos.
     */
    skip?: number
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * Veiculo create
   */
  export type VeiculoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * The data needed to create a Veiculo.
     */
    data: XOR<VeiculoCreateInput, VeiculoUncheckedCreateInput>
  }

  /**
   * Veiculo createMany
   */
  export type VeiculoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Veiculos.
     */
    data: VeiculoCreateManyInput | VeiculoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Veiculo createManyAndReturn
   */
  export type VeiculoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * The data used to create many Veiculos.
     */
    data: VeiculoCreateManyInput | VeiculoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Veiculo update
   */
  export type VeiculoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * The data needed to update a Veiculo.
     */
    data: XOR<VeiculoUpdateInput, VeiculoUncheckedUpdateInput>
    /**
     * Choose, which Veiculo to update.
     */
    where: VeiculoWhereUniqueInput
  }

  /**
   * Veiculo updateMany
   */
  export type VeiculoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Veiculos.
     */
    data: XOR<VeiculoUpdateManyMutationInput, VeiculoUncheckedUpdateManyInput>
    /**
     * Filter which Veiculos to update
     */
    where?: VeiculoWhereInput
    /**
     * Limit how many Veiculos to update.
     */
    limit?: number
  }

  /**
   * Veiculo updateManyAndReturn
   */
  export type VeiculoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * The data used to update Veiculos.
     */
    data: XOR<VeiculoUpdateManyMutationInput, VeiculoUncheckedUpdateManyInput>
    /**
     * Filter which Veiculos to update
     */
    where?: VeiculoWhereInput
    /**
     * Limit how many Veiculos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Veiculo upsert
   */
  export type VeiculoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * The filter to search for the Veiculo to update in case it exists.
     */
    where: VeiculoWhereUniqueInput
    /**
     * In case the Veiculo found by the `where` argument doesn't exist, create a new Veiculo with this data.
     */
    create: XOR<VeiculoCreateInput, VeiculoUncheckedCreateInput>
    /**
     * In case the Veiculo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VeiculoUpdateInput, VeiculoUncheckedUpdateInput>
  }

  /**
   * Veiculo delete
   */
  export type VeiculoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter which Veiculo to delete.
     */
    where: VeiculoWhereUniqueInput
  }

  /**
   * Veiculo deleteMany
   */
  export type VeiculoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Veiculos to delete
     */
    where?: VeiculoWhereInput
    /**
     * Limit how many Veiculos to delete.
     */
    limit?: number
  }

  /**
   * Veiculo.Lembrete
   */
  export type Veiculo$LembreteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lembrete
     */
    select?: LembreteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lembrete
     */
    omit?: LembreteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LembreteInclude<ExtArgs> | null
    where?: LembreteWhereInput
    orderBy?: LembreteOrderByWithRelationInput | LembreteOrderByWithRelationInput[]
    cursor?: LembreteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LembreteScalarFieldEnum | LembreteScalarFieldEnum[]
  }

  /**
   * Veiculo.manutencoes
   */
  export type Veiculo$manutencoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroDeManutencao
     */
    select?: RegistroDeManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroDeManutencao
     */
    omit?: RegistroDeManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroDeManutencaoInclude<ExtArgs> | null
    where?: RegistroDeManutencaoWhereInput
    orderBy?: RegistroDeManutencaoOrderByWithRelationInput | RegistroDeManutencaoOrderByWithRelationInput[]
    cursor?: RegistroDeManutencaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistroDeManutencaoScalarFieldEnum | RegistroDeManutencaoScalarFieldEnum[]
  }

  /**
   * Veiculo.atividades
   */
  export type Veiculo$atividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    where?: AtividadeWhereInput
    orderBy?: AtividadeOrderByWithRelationInput | AtividadeOrderByWithRelationInput[]
    cursor?: AtividadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtividadeScalarFieldEnum | AtividadeScalarFieldEnum[]
  }

  /**
   * Veiculo without action
   */
  export type VeiculoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
  }


  /**
   * Model RegistroDeManutencao
   */

  export type AggregateRegistroDeManutencao = {
    _count: RegistroDeManutencaoCountAggregateOutputType | null
    _avg: RegistroDeManutencaoAvgAggregateOutputType | null
    _sum: RegistroDeManutencaoSumAggregateOutputType | null
    _min: RegistroDeManutencaoMinAggregateOutputType | null
    _max: RegistroDeManutencaoMaxAggregateOutputType | null
  }

  export type RegistroDeManutencaoAvgAggregateOutputType = {
    valor: number | null
  }

  export type RegistroDeManutencaoSumAggregateOutputType = {
    valor: number | null
  }

  export type RegistroDeManutencaoMinAggregateOutputType = {
    id: string | null
    descricao: string | null
    data: Date | null
    valor: number | null
    veiculoId: string | null
  }

  export type RegistroDeManutencaoMaxAggregateOutputType = {
    id: string | null
    descricao: string | null
    data: Date | null
    valor: number | null
    veiculoId: string | null
  }

  export type RegistroDeManutencaoCountAggregateOutputType = {
    id: number
    descricao: number
    data: number
    valor: number
    veiculoId: number
    _all: number
  }


  export type RegistroDeManutencaoAvgAggregateInputType = {
    valor?: true
  }

  export type RegistroDeManutencaoSumAggregateInputType = {
    valor?: true
  }

  export type RegistroDeManutencaoMinAggregateInputType = {
    id?: true
    descricao?: true
    data?: true
    valor?: true
    veiculoId?: true
  }

  export type RegistroDeManutencaoMaxAggregateInputType = {
    id?: true
    descricao?: true
    data?: true
    valor?: true
    veiculoId?: true
  }

  export type RegistroDeManutencaoCountAggregateInputType = {
    id?: true
    descricao?: true
    data?: true
    valor?: true
    veiculoId?: true
    _all?: true
  }

  export type RegistroDeManutencaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroDeManutencao to aggregate.
     */
    where?: RegistroDeManutencaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroDeManutencaos to fetch.
     */
    orderBy?: RegistroDeManutencaoOrderByWithRelationInput | RegistroDeManutencaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistroDeManutencaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroDeManutencaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroDeManutencaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegistroDeManutencaos
    **/
    _count?: true | RegistroDeManutencaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegistroDeManutencaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegistroDeManutencaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistroDeManutencaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistroDeManutencaoMaxAggregateInputType
  }

  export type GetRegistroDeManutencaoAggregateType<T extends RegistroDeManutencaoAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistroDeManutencao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistroDeManutencao[P]>
      : GetScalarType<T[P], AggregateRegistroDeManutencao[P]>
  }




  export type RegistroDeManutencaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroDeManutencaoWhereInput
    orderBy?: RegistroDeManutencaoOrderByWithAggregationInput | RegistroDeManutencaoOrderByWithAggregationInput[]
    by: RegistroDeManutencaoScalarFieldEnum[] | RegistroDeManutencaoScalarFieldEnum
    having?: RegistroDeManutencaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistroDeManutencaoCountAggregateInputType | true
    _avg?: RegistroDeManutencaoAvgAggregateInputType
    _sum?: RegistroDeManutencaoSumAggregateInputType
    _min?: RegistroDeManutencaoMinAggregateInputType
    _max?: RegistroDeManutencaoMaxAggregateInputType
  }

  export type RegistroDeManutencaoGroupByOutputType = {
    id: string
    descricao: string | null
    data: Date
    valor: number | null
    veiculoId: string
    _count: RegistroDeManutencaoCountAggregateOutputType | null
    _avg: RegistroDeManutencaoAvgAggregateOutputType | null
    _sum: RegistroDeManutencaoSumAggregateOutputType | null
    _min: RegistroDeManutencaoMinAggregateOutputType | null
    _max: RegistroDeManutencaoMaxAggregateOutputType | null
  }

  type GetRegistroDeManutencaoGroupByPayload<T extends RegistroDeManutencaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistroDeManutencaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistroDeManutencaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistroDeManutencaoGroupByOutputType[P]>
            : GetScalarType<T[P], RegistroDeManutencaoGroupByOutputType[P]>
        }
      >
    >


  export type RegistroDeManutencaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    data?: boolean
    valor?: boolean
    veiculoId?: boolean
    veiculo?: boolean | VeiculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registroDeManutencao"]>

  export type RegistroDeManutencaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    data?: boolean
    valor?: boolean
    veiculoId?: boolean
    veiculo?: boolean | VeiculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registroDeManutencao"]>

  export type RegistroDeManutencaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    data?: boolean
    valor?: boolean
    veiculoId?: boolean
    veiculo?: boolean | VeiculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registroDeManutencao"]>

  export type RegistroDeManutencaoSelectScalar = {
    id?: boolean
    descricao?: boolean
    data?: boolean
    valor?: boolean
    veiculoId?: boolean
  }

  export type RegistroDeManutencaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao" | "data" | "valor" | "veiculoId", ExtArgs["result"]["registroDeManutencao"]>
  export type RegistroDeManutencaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    veiculo?: boolean | VeiculoDefaultArgs<ExtArgs>
  }
  export type RegistroDeManutencaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    veiculo?: boolean | VeiculoDefaultArgs<ExtArgs>
  }
  export type RegistroDeManutencaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    veiculo?: boolean | VeiculoDefaultArgs<ExtArgs>
  }

  export type $RegistroDeManutencaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegistroDeManutencao"
    objects: {
      veiculo: Prisma.$VeiculoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      descricao: string | null
      data: Date
      valor: number | null
      veiculoId: string
    }, ExtArgs["result"]["registroDeManutencao"]>
    composites: {}
  }

  type RegistroDeManutencaoGetPayload<S extends boolean | null | undefined | RegistroDeManutencaoDefaultArgs> = $Result.GetResult<Prisma.$RegistroDeManutencaoPayload, S>

  type RegistroDeManutencaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistroDeManutencaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistroDeManutencaoCountAggregateInputType | true
    }

  export interface RegistroDeManutencaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegistroDeManutencao'], meta: { name: 'RegistroDeManutencao' } }
    /**
     * Find zero or one RegistroDeManutencao that matches the filter.
     * @param {RegistroDeManutencaoFindUniqueArgs} args - Arguments to find a RegistroDeManutencao
     * @example
     * // Get one RegistroDeManutencao
     * const registroDeManutencao = await prisma.registroDeManutencao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistroDeManutencaoFindUniqueArgs>(args: SelectSubset<T, RegistroDeManutencaoFindUniqueArgs<ExtArgs>>): Prisma__RegistroDeManutencaoClient<$Result.GetResult<Prisma.$RegistroDeManutencaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RegistroDeManutencao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistroDeManutencaoFindUniqueOrThrowArgs} args - Arguments to find a RegistroDeManutencao
     * @example
     * // Get one RegistroDeManutencao
     * const registroDeManutencao = await prisma.registroDeManutencao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistroDeManutencaoFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistroDeManutencaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistroDeManutencaoClient<$Result.GetResult<Prisma.$RegistroDeManutencaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistroDeManutencao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroDeManutencaoFindFirstArgs} args - Arguments to find a RegistroDeManutencao
     * @example
     * // Get one RegistroDeManutencao
     * const registroDeManutencao = await prisma.registroDeManutencao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistroDeManutencaoFindFirstArgs>(args?: SelectSubset<T, RegistroDeManutencaoFindFirstArgs<ExtArgs>>): Prisma__RegistroDeManutencaoClient<$Result.GetResult<Prisma.$RegistroDeManutencaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistroDeManutencao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroDeManutencaoFindFirstOrThrowArgs} args - Arguments to find a RegistroDeManutencao
     * @example
     * // Get one RegistroDeManutencao
     * const registroDeManutencao = await prisma.registroDeManutencao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistroDeManutencaoFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistroDeManutencaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistroDeManutencaoClient<$Result.GetResult<Prisma.$RegistroDeManutencaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegistroDeManutencaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroDeManutencaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegistroDeManutencaos
     * const registroDeManutencaos = await prisma.registroDeManutencao.findMany()
     * 
     * // Get first 10 RegistroDeManutencaos
     * const registroDeManutencaos = await prisma.registroDeManutencao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registroDeManutencaoWithIdOnly = await prisma.registroDeManutencao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistroDeManutencaoFindManyArgs>(args?: SelectSubset<T, RegistroDeManutencaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroDeManutencaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RegistroDeManutencao.
     * @param {RegistroDeManutencaoCreateArgs} args - Arguments to create a RegistroDeManutencao.
     * @example
     * // Create one RegistroDeManutencao
     * const RegistroDeManutencao = await prisma.registroDeManutencao.create({
     *   data: {
     *     // ... data to create a RegistroDeManutencao
     *   }
     * })
     * 
     */
    create<T extends RegistroDeManutencaoCreateArgs>(args: SelectSubset<T, RegistroDeManutencaoCreateArgs<ExtArgs>>): Prisma__RegistroDeManutencaoClient<$Result.GetResult<Prisma.$RegistroDeManutencaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RegistroDeManutencaos.
     * @param {RegistroDeManutencaoCreateManyArgs} args - Arguments to create many RegistroDeManutencaos.
     * @example
     * // Create many RegistroDeManutencaos
     * const registroDeManutencao = await prisma.registroDeManutencao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistroDeManutencaoCreateManyArgs>(args?: SelectSubset<T, RegistroDeManutencaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RegistroDeManutencaos and returns the data saved in the database.
     * @param {RegistroDeManutencaoCreateManyAndReturnArgs} args - Arguments to create many RegistroDeManutencaos.
     * @example
     * // Create many RegistroDeManutencaos
     * const registroDeManutencao = await prisma.registroDeManutencao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RegistroDeManutencaos and only return the `id`
     * const registroDeManutencaoWithIdOnly = await prisma.registroDeManutencao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegistroDeManutencaoCreateManyAndReturnArgs>(args?: SelectSubset<T, RegistroDeManutencaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroDeManutencaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RegistroDeManutencao.
     * @param {RegistroDeManutencaoDeleteArgs} args - Arguments to delete one RegistroDeManutencao.
     * @example
     * // Delete one RegistroDeManutencao
     * const RegistroDeManutencao = await prisma.registroDeManutencao.delete({
     *   where: {
     *     // ... filter to delete one RegistroDeManutencao
     *   }
     * })
     * 
     */
    delete<T extends RegistroDeManutencaoDeleteArgs>(args: SelectSubset<T, RegistroDeManutencaoDeleteArgs<ExtArgs>>): Prisma__RegistroDeManutencaoClient<$Result.GetResult<Prisma.$RegistroDeManutencaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RegistroDeManutencao.
     * @param {RegistroDeManutencaoUpdateArgs} args - Arguments to update one RegistroDeManutencao.
     * @example
     * // Update one RegistroDeManutencao
     * const registroDeManutencao = await prisma.registroDeManutencao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistroDeManutencaoUpdateArgs>(args: SelectSubset<T, RegistroDeManutencaoUpdateArgs<ExtArgs>>): Prisma__RegistroDeManutencaoClient<$Result.GetResult<Prisma.$RegistroDeManutencaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RegistroDeManutencaos.
     * @param {RegistroDeManutencaoDeleteManyArgs} args - Arguments to filter RegistroDeManutencaos to delete.
     * @example
     * // Delete a few RegistroDeManutencaos
     * const { count } = await prisma.registroDeManutencao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistroDeManutencaoDeleteManyArgs>(args?: SelectSubset<T, RegistroDeManutencaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistroDeManutencaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroDeManutencaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegistroDeManutencaos
     * const registroDeManutencao = await prisma.registroDeManutencao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistroDeManutencaoUpdateManyArgs>(args: SelectSubset<T, RegistroDeManutencaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistroDeManutencaos and returns the data updated in the database.
     * @param {RegistroDeManutencaoUpdateManyAndReturnArgs} args - Arguments to update many RegistroDeManutencaos.
     * @example
     * // Update many RegistroDeManutencaos
     * const registroDeManutencao = await prisma.registroDeManutencao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RegistroDeManutencaos and only return the `id`
     * const registroDeManutencaoWithIdOnly = await prisma.registroDeManutencao.updateManyAndReturn({
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
    updateManyAndReturn<T extends RegistroDeManutencaoUpdateManyAndReturnArgs>(args: SelectSubset<T, RegistroDeManutencaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroDeManutencaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RegistroDeManutencao.
     * @param {RegistroDeManutencaoUpsertArgs} args - Arguments to update or create a RegistroDeManutencao.
     * @example
     * // Update or create a RegistroDeManutencao
     * const registroDeManutencao = await prisma.registroDeManutencao.upsert({
     *   create: {
     *     // ... data to create a RegistroDeManutencao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegistroDeManutencao we want to update
     *   }
     * })
     */
    upsert<T extends RegistroDeManutencaoUpsertArgs>(args: SelectSubset<T, RegistroDeManutencaoUpsertArgs<ExtArgs>>): Prisma__RegistroDeManutencaoClient<$Result.GetResult<Prisma.$RegistroDeManutencaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RegistroDeManutencaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroDeManutencaoCountArgs} args - Arguments to filter RegistroDeManutencaos to count.
     * @example
     * // Count the number of RegistroDeManutencaos
     * const count = await prisma.registroDeManutencao.count({
     *   where: {
     *     // ... the filter for the RegistroDeManutencaos we want to count
     *   }
     * })
    **/
    count<T extends RegistroDeManutencaoCountArgs>(
      args?: Subset<T, RegistroDeManutencaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistroDeManutencaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegistroDeManutencao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroDeManutencaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegistroDeManutencaoAggregateArgs>(args: Subset<T, RegistroDeManutencaoAggregateArgs>): Prisma.PrismaPromise<GetRegistroDeManutencaoAggregateType<T>>

    /**
     * Group by RegistroDeManutencao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroDeManutencaoGroupByArgs} args - Group by arguments.
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
      T extends RegistroDeManutencaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistroDeManutencaoGroupByArgs['orderBy'] }
        : { orderBy?: RegistroDeManutencaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegistroDeManutencaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistroDeManutencaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegistroDeManutencao model
   */
  readonly fields: RegistroDeManutencaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegistroDeManutencao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistroDeManutencaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    veiculo<T extends VeiculoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VeiculoDefaultArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RegistroDeManutencao model
   */
  interface RegistroDeManutencaoFieldRefs {
    readonly id: FieldRef<"RegistroDeManutencao", 'String'>
    readonly descricao: FieldRef<"RegistroDeManutencao", 'String'>
    readonly data: FieldRef<"RegistroDeManutencao", 'DateTime'>
    readonly valor: FieldRef<"RegistroDeManutencao", 'Float'>
    readonly veiculoId: FieldRef<"RegistroDeManutencao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RegistroDeManutencao findUnique
   */
  export type RegistroDeManutencaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroDeManutencao
     */
    select?: RegistroDeManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroDeManutencao
     */
    omit?: RegistroDeManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroDeManutencaoInclude<ExtArgs> | null
    /**
     * Filter, which RegistroDeManutencao to fetch.
     */
    where: RegistroDeManutencaoWhereUniqueInput
  }

  /**
   * RegistroDeManutencao findUniqueOrThrow
   */
  export type RegistroDeManutencaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroDeManutencao
     */
    select?: RegistroDeManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroDeManutencao
     */
    omit?: RegistroDeManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroDeManutencaoInclude<ExtArgs> | null
    /**
     * Filter, which RegistroDeManutencao to fetch.
     */
    where: RegistroDeManutencaoWhereUniqueInput
  }

  /**
   * RegistroDeManutencao findFirst
   */
  export type RegistroDeManutencaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroDeManutencao
     */
    select?: RegistroDeManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroDeManutencao
     */
    omit?: RegistroDeManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroDeManutencaoInclude<ExtArgs> | null
    /**
     * Filter, which RegistroDeManutencao to fetch.
     */
    where?: RegistroDeManutencaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroDeManutencaos to fetch.
     */
    orderBy?: RegistroDeManutencaoOrderByWithRelationInput | RegistroDeManutencaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroDeManutencaos.
     */
    cursor?: RegistroDeManutencaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroDeManutencaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroDeManutencaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroDeManutencaos.
     */
    distinct?: RegistroDeManutencaoScalarFieldEnum | RegistroDeManutencaoScalarFieldEnum[]
  }

  /**
   * RegistroDeManutencao findFirstOrThrow
   */
  export type RegistroDeManutencaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroDeManutencao
     */
    select?: RegistroDeManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroDeManutencao
     */
    omit?: RegistroDeManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroDeManutencaoInclude<ExtArgs> | null
    /**
     * Filter, which RegistroDeManutencao to fetch.
     */
    where?: RegistroDeManutencaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroDeManutencaos to fetch.
     */
    orderBy?: RegistroDeManutencaoOrderByWithRelationInput | RegistroDeManutencaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroDeManutencaos.
     */
    cursor?: RegistroDeManutencaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroDeManutencaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroDeManutencaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroDeManutencaos.
     */
    distinct?: RegistroDeManutencaoScalarFieldEnum | RegistroDeManutencaoScalarFieldEnum[]
  }

  /**
   * RegistroDeManutencao findMany
   */
  export type RegistroDeManutencaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroDeManutencao
     */
    select?: RegistroDeManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroDeManutencao
     */
    omit?: RegistroDeManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroDeManutencaoInclude<ExtArgs> | null
    /**
     * Filter, which RegistroDeManutencaos to fetch.
     */
    where?: RegistroDeManutencaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroDeManutencaos to fetch.
     */
    orderBy?: RegistroDeManutencaoOrderByWithRelationInput | RegistroDeManutencaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegistroDeManutencaos.
     */
    cursor?: RegistroDeManutencaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroDeManutencaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroDeManutencaos.
     */
    skip?: number
    distinct?: RegistroDeManutencaoScalarFieldEnum | RegistroDeManutencaoScalarFieldEnum[]
  }

  /**
   * RegistroDeManutencao create
   */
  export type RegistroDeManutencaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroDeManutencao
     */
    select?: RegistroDeManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroDeManutencao
     */
    omit?: RegistroDeManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroDeManutencaoInclude<ExtArgs> | null
    /**
     * The data needed to create a RegistroDeManutencao.
     */
    data: XOR<RegistroDeManutencaoCreateInput, RegistroDeManutencaoUncheckedCreateInput>
  }

  /**
   * RegistroDeManutencao createMany
   */
  export type RegistroDeManutencaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegistroDeManutencaos.
     */
    data: RegistroDeManutencaoCreateManyInput | RegistroDeManutencaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegistroDeManutencao createManyAndReturn
   */
  export type RegistroDeManutencaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroDeManutencao
     */
    select?: RegistroDeManutencaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroDeManutencao
     */
    omit?: RegistroDeManutencaoOmit<ExtArgs> | null
    /**
     * The data used to create many RegistroDeManutencaos.
     */
    data: RegistroDeManutencaoCreateManyInput | RegistroDeManutencaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroDeManutencaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RegistroDeManutencao update
   */
  export type RegistroDeManutencaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroDeManutencao
     */
    select?: RegistroDeManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroDeManutencao
     */
    omit?: RegistroDeManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroDeManutencaoInclude<ExtArgs> | null
    /**
     * The data needed to update a RegistroDeManutencao.
     */
    data: XOR<RegistroDeManutencaoUpdateInput, RegistroDeManutencaoUncheckedUpdateInput>
    /**
     * Choose, which RegistroDeManutencao to update.
     */
    where: RegistroDeManutencaoWhereUniqueInput
  }

  /**
   * RegistroDeManutencao updateMany
   */
  export type RegistroDeManutencaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegistroDeManutencaos.
     */
    data: XOR<RegistroDeManutencaoUpdateManyMutationInput, RegistroDeManutencaoUncheckedUpdateManyInput>
    /**
     * Filter which RegistroDeManutencaos to update
     */
    where?: RegistroDeManutencaoWhereInput
    /**
     * Limit how many RegistroDeManutencaos to update.
     */
    limit?: number
  }

  /**
   * RegistroDeManutencao updateManyAndReturn
   */
  export type RegistroDeManutencaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroDeManutencao
     */
    select?: RegistroDeManutencaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroDeManutencao
     */
    omit?: RegistroDeManutencaoOmit<ExtArgs> | null
    /**
     * The data used to update RegistroDeManutencaos.
     */
    data: XOR<RegistroDeManutencaoUpdateManyMutationInput, RegistroDeManutencaoUncheckedUpdateManyInput>
    /**
     * Filter which RegistroDeManutencaos to update
     */
    where?: RegistroDeManutencaoWhereInput
    /**
     * Limit how many RegistroDeManutencaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroDeManutencaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RegistroDeManutencao upsert
   */
  export type RegistroDeManutencaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroDeManutencao
     */
    select?: RegistroDeManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroDeManutencao
     */
    omit?: RegistroDeManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroDeManutencaoInclude<ExtArgs> | null
    /**
     * The filter to search for the RegistroDeManutencao to update in case it exists.
     */
    where: RegistroDeManutencaoWhereUniqueInput
    /**
     * In case the RegistroDeManutencao found by the `where` argument doesn't exist, create a new RegistroDeManutencao with this data.
     */
    create: XOR<RegistroDeManutencaoCreateInput, RegistroDeManutencaoUncheckedCreateInput>
    /**
     * In case the RegistroDeManutencao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistroDeManutencaoUpdateInput, RegistroDeManutencaoUncheckedUpdateInput>
  }

  /**
   * RegistroDeManutencao delete
   */
  export type RegistroDeManutencaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroDeManutencao
     */
    select?: RegistroDeManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroDeManutencao
     */
    omit?: RegistroDeManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroDeManutencaoInclude<ExtArgs> | null
    /**
     * Filter which RegistroDeManutencao to delete.
     */
    where: RegistroDeManutencaoWhereUniqueInput
  }

  /**
   * RegistroDeManutencao deleteMany
   */
  export type RegistroDeManutencaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroDeManutencaos to delete
     */
    where?: RegistroDeManutencaoWhereInput
    /**
     * Limit how many RegistroDeManutencaos to delete.
     */
    limit?: number
  }

  /**
   * RegistroDeManutencao without action
   */
  export type RegistroDeManutencaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroDeManutencao
     */
    select?: RegistroDeManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroDeManutencao
     */
    omit?: RegistroDeManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroDeManutencaoInclude<ExtArgs> | null
  }


  /**
   * Model Lembrete
   */

  export type AggregateLembrete = {
    _count: LembreteCountAggregateOutputType | null
    _min: LembreteMinAggregateOutputType | null
    _max: LembreteMaxAggregateOutputType | null
  }

  export type LembreteMinAggregateOutputType = {
    id: string | null
    descricao: string | null
    dataHora: Date | null
    status: boolean | null
    usuarioIdEnviou: string | null
    listaDeCompraId: string | null
    veiculoId: string | null
  }

  export type LembreteMaxAggregateOutputType = {
    id: string | null
    descricao: string | null
    dataHora: Date | null
    status: boolean | null
    usuarioIdEnviou: string | null
    listaDeCompraId: string | null
    veiculoId: string | null
  }

  export type LembreteCountAggregateOutputType = {
    id: number
    descricao: number
    dataHora: number
    status: number
    usuarioIdEnviou: number
    listaDeCompraId: number
    veiculoId: number
    _all: number
  }


  export type LembreteMinAggregateInputType = {
    id?: true
    descricao?: true
    dataHora?: true
    status?: true
    usuarioIdEnviou?: true
    listaDeCompraId?: true
    veiculoId?: true
  }

  export type LembreteMaxAggregateInputType = {
    id?: true
    descricao?: true
    dataHora?: true
    status?: true
    usuarioIdEnviou?: true
    listaDeCompraId?: true
    veiculoId?: true
  }

  export type LembreteCountAggregateInputType = {
    id?: true
    descricao?: true
    dataHora?: true
    status?: true
    usuarioIdEnviou?: true
    listaDeCompraId?: true
    veiculoId?: true
    _all?: true
  }

  export type LembreteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lembrete to aggregate.
     */
    where?: LembreteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lembretes to fetch.
     */
    orderBy?: LembreteOrderByWithRelationInput | LembreteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LembreteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lembretes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lembretes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lembretes
    **/
    _count?: true | LembreteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LembreteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LembreteMaxAggregateInputType
  }

  export type GetLembreteAggregateType<T extends LembreteAggregateArgs> = {
        [P in keyof T & keyof AggregateLembrete]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLembrete[P]>
      : GetScalarType<T[P], AggregateLembrete[P]>
  }




  export type LembreteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LembreteWhereInput
    orderBy?: LembreteOrderByWithAggregationInput | LembreteOrderByWithAggregationInput[]
    by: LembreteScalarFieldEnum[] | LembreteScalarFieldEnum
    having?: LembreteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LembreteCountAggregateInputType | true
    _min?: LembreteMinAggregateInputType
    _max?: LembreteMaxAggregateInputType
  }

  export type LembreteGroupByOutputType = {
    id: string
    descricao: string
    dataHora: Date
    status: boolean
    usuarioIdEnviou: string
    listaDeCompraId: string
    veiculoId: string
    _count: LembreteCountAggregateOutputType | null
    _min: LembreteMinAggregateOutputType | null
    _max: LembreteMaxAggregateOutputType | null
  }

  type GetLembreteGroupByPayload<T extends LembreteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LembreteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LembreteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LembreteGroupByOutputType[P]>
            : GetScalarType<T[P], LembreteGroupByOutputType[P]>
        }
      >
    >


  export type LembreteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    dataHora?: boolean
    status?: boolean
    usuarioIdEnviou?: boolean
    listaDeCompraId?: boolean
    veiculoId?: boolean
    listaDeCompra?: boolean | ListaDeCompraDefaultArgs<ExtArgs>
    usuarioEnviou?: boolean | UsuarioDefaultArgs<ExtArgs>
    veiculo?: boolean | VeiculoDefaultArgs<ExtArgs>
    atividades?: boolean | Lembrete$atividadesArgs<ExtArgs>
    _count?: boolean | LembreteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lembrete"]>

  export type LembreteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    dataHora?: boolean
    status?: boolean
    usuarioIdEnviou?: boolean
    listaDeCompraId?: boolean
    veiculoId?: boolean
    listaDeCompra?: boolean | ListaDeCompraDefaultArgs<ExtArgs>
    usuarioEnviou?: boolean | UsuarioDefaultArgs<ExtArgs>
    veiculo?: boolean | VeiculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lembrete"]>

  export type LembreteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    dataHora?: boolean
    status?: boolean
    usuarioIdEnviou?: boolean
    listaDeCompraId?: boolean
    veiculoId?: boolean
    listaDeCompra?: boolean | ListaDeCompraDefaultArgs<ExtArgs>
    usuarioEnviou?: boolean | UsuarioDefaultArgs<ExtArgs>
    veiculo?: boolean | VeiculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lembrete"]>

  export type LembreteSelectScalar = {
    id?: boolean
    descricao?: boolean
    dataHora?: boolean
    status?: boolean
    usuarioIdEnviou?: boolean
    listaDeCompraId?: boolean
    veiculoId?: boolean
  }

  export type LembreteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao" | "dataHora" | "status" | "usuarioIdEnviou" | "listaDeCompraId" | "veiculoId", ExtArgs["result"]["lembrete"]>
  export type LembreteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listaDeCompra?: boolean | ListaDeCompraDefaultArgs<ExtArgs>
    usuarioEnviou?: boolean | UsuarioDefaultArgs<ExtArgs>
    veiculo?: boolean | VeiculoDefaultArgs<ExtArgs>
    atividades?: boolean | Lembrete$atividadesArgs<ExtArgs>
    _count?: boolean | LembreteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LembreteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listaDeCompra?: boolean | ListaDeCompraDefaultArgs<ExtArgs>
    usuarioEnviou?: boolean | UsuarioDefaultArgs<ExtArgs>
    veiculo?: boolean | VeiculoDefaultArgs<ExtArgs>
  }
  export type LembreteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listaDeCompra?: boolean | ListaDeCompraDefaultArgs<ExtArgs>
    usuarioEnviou?: boolean | UsuarioDefaultArgs<ExtArgs>
    veiculo?: boolean | VeiculoDefaultArgs<ExtArgs>
  }

  export type $LembretePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lembrete"
    objects: {
      listaDeCompra: Prisma.$ListaDeCompraPayload<ExtArgs>
      usuarioEnviou: Prisma.$UsuarioPayload<ExtArgs>
      veiculo: Prisma.$VeiculoPayload<ExtArgs>
      atividades: Prisma.$AtividadePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      descricao: string
      dataHora: Date
      status: boolean
      usuarioIdEnviou: string
      listaDeCompraId: string
      veiculoId: string
    }, ExtArgs["result"]["lembrete"]>
    composites: {}
  }

  type LembreteGetPayload<S extends boolean | null | undefined | LembreteDefaultArgs> = $Result.GetResult<Prisma.$LembretePayload, S>

  type LembreteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LembreteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LembreteCountAggregateInputType | true
    }

  export interface LembreteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lembrete'], meta: { name: 'Lembrete' } }
    /**
     * Find zero or one Lembrete that matches the filter.
     * @param {LembreteFindUniqueArgs} args - Arguments to find a Lembrete
     * @example
     * // Get one Lembrete
     * const lembrete = await prisma.lembrete.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LembreteFindUniqueArgs>(args: SelectSubset<T, LembreteFindUniqueArgs<ExtArgs>>): Prisma__LembreteClient<$Result.GetResult<Prisma.$LembretePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lembrete that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LembreteFindUniqueOrThrowArgs} args - Arguments to find a Lembrete
     * @example
     * // Get one Lembrete
     * const lembrete = await prisma.lembrete.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LembreteFindUniqueOrThrowArgs>(args: SelectSubset<T, LembreteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LembreteClient<$Result.GetResult<Prisma.$LembretePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lembrete that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LembreteFindFirstArgs} args - Arguments to find a Lembrete
     * @example
     * // Get one Lembrete
     * const lembrete = await prisma.lembrete.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LembreteFindFirstArgs>(args?: SelectSubset<T, LembreteFindFirstArgs<ExtArgs>>): Prisma__LembreteClient<$Result.GetResult<Prisma.$LembretePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lembrete that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LembreteFindFirstOrThrowArgs} args - Arguments to find a Lembrete
     * @example
     * // Get one Lembrete
     * const lembrete = await prisma.lembrete.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LembreteFindFirstOrThrowArgs>(args?: SelectSubset<T, LembreteFindFirstOrThrowArgs<ExtArgs>>): Prisma__LembreteClient<$Result.GetResult<Prisma.$LembretePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lembretes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LembreteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lembretes
     * const lembretes = await prisma.lembrete.findMany()
     * 
     * // Get first 10 Lembretes
     * const lembretes = await prisma.lembrete.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lembreteWithIdOnly = await prisma.lembrete.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LembreteFindManyArgs>(args?: SelectSubset<T, LembreteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LembretePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lembrete.
     * @param {LembreteCreateArgs} args - Arguments to create a Lembrete.
     * @example
     * // Create one Lembrete
     * const Lembrete = await prisma.lembrete.create({
     *   data: {
     *     // ... data to create a Lembrete
     *   }
     * })
     * 
     */
    create<T extends LembreteCreateArgs>(args: SelectSubset<T, LembreteCreateArgs<ExtArgs>>): Prisma__LembreteClient<$Result.GetResult<Prisma.$LembretePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lembretes.
     * @param {LembreteCreateManyArgs} args - Arguments to create many Lembretes.
     * @example
     * // Create many Lembretes
     * const lembrete = await prisma.lembrete.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LembreteCreateManyArgs>(args?: SelectSubset<T, LembreteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lembretes and returns the data saved in the database.
     * @param {LembreteCreateManyAndReturnArgs} args - Arguments to create many Lembretes.
     * @example
     * // Create many Lembretes
     * const lembrete = await prisma.lembrete.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lembretes and only return the `id`
     * const lembreteWithIdOnly = await prisma.lembrete.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LembreteCreateManyAndReturnArgs>(args?: SelectSubset<T, LembreteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LembretePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lembrete.
     * @param {LembreteDeleteArgs} args - Arguments to delete one Lembrete.
     * @example
     * // Delete one Lembrete
     * const Lembrete = await prisma.lembrete.delete({
     *   where: {
     *     // ... filter to delete one Lembrete
     *   }
     * })
     * 
     */
    delete<T extends LembreteDeleteArgs>(args: SelectSubset<T, LembreteDeleteArgs<ExtArgs>>): Prisma__LembreteClient<$Result.GetResult<Prisma.$LembretePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lembrete.
     * @param {LembreteUpdateArgs} args - Arguments to update one Lembrete.
     * @example
     * // Update one Lembrete
     * const lembrete = await prisma.lembrete.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LembreteUpdateArgs>(args: SelectSubset<T, LembreteUpdateArgs<ExtArgs>>): Prisma__LembreteClient<$Result.GetResult<Prisma.$LembretePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lembretes.
     * @param {LembreteDeleteManyArgs} args - Arguments to filter Lembretes to delete.
     * @example
     * // Delete a few Lembretes
     * const { count } = await prisma.lembrete.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LembreteDeleteManyArgs>(args?: SelectSubset<T, LembreteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lembretes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LembreteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lembretes
     * const lembrete = await prisma.lembrete.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LembreteUpdateManyArgs>(args: SelectSubset<T, LembreteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lembretes and returns the data updated in the database.
     * @param {LembreteUpdateManyAndReturnArgs} args - Arguments to update many Lembretes.
     * @example
     * // Update many Lembretes
     * const lembrete = await prisma.lembrete.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lembretes and only return the `id`
     * const lembreteWithIdOnly = await prisma.lembrete.updateManyAndReturn({
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
    updateManyAndReturn<T extends LembreteUpdateManyAndReturnArgs>(args: SelectSubset<T, LembreteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LembretePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lembrete.
     * @param {LembreteUpsertArgs} args - Arguments to update or create a Lembrete.
     * @example
     * // Update or create a Lembrete
     * const lembrete = await prisma.lembrete.upsert({
     *   create: {
     *     // ... data to create a Lembrete
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lembrete we want to update
     *   }
     * })
     */
    upsert<T extends LembreteUpsertArgs>(args: SelectSubset<T, LembreteUpsertArgs<ExtArgs>>): Prisma__LembreteClient<$Result.GetResult<Prisma.$LembretePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lembretes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LembreteCountArgs} args - Arguments to filter Lembretes to count.
     * @example
     * // Count the number of Lembretes
     * const count = await prisma.lembrete.count({
     *   where: {
     *     // ... the filter for the Lembretes we want to count
     *   }
     * })
    **/
    count<T extends LembreteCountArgs>(
      args?: Subset<T, LembreteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LembreteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lembrete.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LembreteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LembreteAggregateArgs>(args: Subset<T, LembreteAggregateArgs>): Prisma.PrismaPromise<GetLembreteAggregateType<T>>

    /**
     * Group by Lembrete.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LembreteGroupByArgs} args - Group by arguments.
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
      T extends LembreteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LembreteGroupByArgs['orderBy'] }
        : { orderBy?: LembreteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LembreteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLembreteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lembrete model
   */
  readonly fields: LembreteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lembrete.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LembreteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listaDeCompra<T extends ListaDeCompraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListaDeCompraDefaultArgs<ExtArgs>>): Prisma__ListaDeCompraClient<$Result.GetResult<Prisma.$ListaDeCompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuarioEnviou<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    veiculo<T extends VeiculoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VeiculoDefaultArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    atividades<T extends Lembrete$atividadesArgs<ExtArgs> = {}>(args?: Subset<T, Lembrete$atividadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Lembrete model
   */
  interface LembreteFieldRefs {
    readonly id: FieldRef<"Lembrete", 'String'>
    readonly descricao: FieldRef<"Lembrete", 'String'>
    readonly dataHora: FieldRef<"Lembrete", 'DateTime'>
    readonly status: FieldRef<"Lembrete", 'Boolean'>
    readonly usuarioIdEnviou: FieldRef<"Lembrete", 'String'>
    readonly listaDeCompraId: FieldRef<"Lembrete", 'String'>
    readonly veiculoId: FieldRef<"Lembrete", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Lembrete findUnique
   */
  export type LembreteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lembrete
     */
    select?: LembreteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lembrete
     */
    omit?: LembreteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LembreteInclude<ExtArgs> | null
    /**
     * Filter, which Lembrete to fetch.
     */
    where: LembreteWhereUniqueInput
  }

  /**
   * Lembrete findUniqueOrThrow
   */
  export type LembreteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lembrete
     */
    select?: LembreteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lembrete
     */
    omit?: LembreteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LembreteInclude<ExtArgs> | null
    /**
     * Filter, which Lembrete to fetch.
     */
    where: LembreteWhereUniqueInput
  }

  /**
   * Lembrete findFirst
   */
  export type LembreteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lembrete
     */
    select?: LembreteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lembrete
     */
    omit?: LembreteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LembreteInclude<ExtArgs> | null
    /**
     * Filter, which Lembrete to fetch.
     */
    where?: LembreteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lembretes to fetch.
     */
    orderBy?: LembreteOrderByWithRelationInput | LembreteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lembretes.
     */
    cursor?: LembreteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lembretes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lembretes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lembretes.
     */
    distinct?: LembreteScalarFieldEnum | LembreteScalarFieldEnum[]
  }

  /**
   * Lembrete findFirstOrThrow
   */
  export type LembreteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lembrete
     */
    select?: LembreteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lembrete
     */
    omit?: LembreteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LembreteInclude<ExtArgs> | null
    /**
     * Filter, which Lembrete to fetch.
     */
    where?: LembreteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lembretes to fetch.
     */
    orderBy?: LembreteOrderByWithRelationInput | LembreteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lembretes.
     */
    cursor?: LembreteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lembretes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lembretes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lembretes.
     */
    distinct?: LembreteScalarFieldEnum | LembreteScalarFieldEnum[]
  }

  /**
   * Lembrete findMany
   */
  export type LembreteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lembrete
     */
    select?: LembreteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lembrete
     */
    omit?: LembreteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LembreteInclude<ExtArgs> | null
    /**
     * Filter, which Lembretes to fetch.
     */
    where?: LembreteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lembretes to fetch.
     */
    orderBy?: LembreteOrderByWithRelationInput | LembreteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lembretes.
     */
    cursor?: LembreteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lembretes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lembretes.
     */
    skip?: number
    distinct?: LembreteScalarFieldEnum | LembreteScalarFieldEnum[]
  }

  /**
   * Lembrete create
   */
  export type LembreteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lembrete
     */
    select?: LembreteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lembrete
     */
    omit?: LembreteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LembreteInclude<ExtArgs> | null
    /**
     * The data needed to create a Lembrete.
     */
    data: XOR<LembreteCreateInput, LembreteUncheckedCreateInput>
  }

  /**
   * Lembrete createMany
   */
  export type LembreteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lembretes.
     */
    data: LembreteCreateManyInput | LembreteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lembrete createManyAndReturn
   */
  export type LembreteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lembrete
     */
    select?: LembreteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lembrete
     */
    omit?: LembreteOmit<ExtArgs> | null
    /**
     * The data used to create many Lembretes.
     */
    data: LembreteCreateManyInput | LembreteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LembreteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lembrete update
   */
  export type LembreteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lembrete
     */
    select?: LembreteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lembrete
     */
    omit?: LembreteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LembreteInclude<ExtArgs> | null
    /**
     * The data needed to update a Lembrete.
     */
    data: XOR<LembreteUpdateInput, LembreteUncheckedUpdateInput>
    /**
     * Choose, which Lembrete to update.
     */
    where: LembreteWhereUniqueInput
  }

  /**
   * Lembrete updateMany
   */
  export type LembreteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lembretes.
     */
    data: XOR<LembreteUpdateManyMutationInput, LembreteUncheckedUpdateManyInput>
    /**
     * Filter which Lembretes to update
     */
    where?: LembreteWhereInput
    /**
     * Limit how many Lembretes to update.
     */
    limit?: number
  }

  /**
   * Lembrete updateManyAndReturn
   */
  export type LembreteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lembrete
     */
    select?: LembreteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lembrete
     */
    omit?: LembreteOmit<ExtArgs> | null
    /**
     * The data used to update Lembretes.
     */
    data: XOR<LembreteUpdateManyMutationInput, LembreteUncheckedUpdateManyInput>
    /**
     * Filter which Lembretes to update
     */
    where?: LembreteWhereInput
    /**
     * Limit how many Lembretes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LembreteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lembrete upsert
   */
  export type LembreteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lembrete
     */
    select?: LembreteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lembrete
     */
    omit?: LembreteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LembreteInclude<ExtArgs> | null
    /**
     * The filter to search for the Lembrete to update in case it exists.
     */
    where: LembreteWhereUniqueInput
    /**
     * In case the Lembrete found by the `where` argument doesn't exist, create a new Lembrete with this data.
     */
    create: XOR<LembreteCreateInput, LembreteUncheckedCreateInput>
    /**
     * In case the Lembrete was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LembreteUpdateInput, LembreteUncheckedUpdateInput>
  }

  /**
   * Lembrete delete
   */
  export type LembreteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lembrete
     */
    select?: LembreteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lembrete
     */
    omit?: LembreteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LembreteInclude<ExtArgs> | null
    /**
     * Filter which Lembrete to delete.
     */
    where: LembreteWhereUniqueInput
  }

  /**
   * Lembrete deleteMany
   */
  export type LembreteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lembretes to delete
     */
    where?: LembreteWhereInput
    /**
     * Limit how many Lembretes to delete.
     */
    limit?: number
  }

  /**
   * Lembrete.atividades
   */
  export type Lembrete$atividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    where?: AtividadeWhereInput
    orderBy?: AtividadeOrderByWithRelationInput | AtividadeOrderByWithRelationInput[]
    cursor?: AtividadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtividadeScalarFieldEnum | AtividadeScalarFieldEnum[]
  }

  /**
   * Lembrete without action
   */
  export type LembreteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lembrete
     */
    select?: LembreteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lembrete
     */
    omit?: LembreteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LembreteInclude<ExtArgs> | null
  }


  /**
   * Model Tarefa
   */

  export type AggregateTarefa = {
    _count: TarefaCountAggregateOutputType | null
    _min: TarefaMinAggregateOutputType | null
    _max: TarefaMaxAggregateOutputType | null
  }

  export type TarefaMinAggregateOutputType = {
    id: string | null
    descricao: string | null
    status: boolean | null
    usuarioId: string | null
  }

  export type TarefaMaxAggregateOutputType = {
    id: string | null
    descricao: string | null
    status: boolean | null
    usuarioId: string | null
  }

  export type TarefaCountAggregateOutputType = {
    id: number
    descricao: number
    status: number
    usuarioId: number
    _all: number
  }


  export type TarefaMinAggregateInputType = {
    id?: true
    descricao?: true
    status?: true
    usuarioId?: true
  }

  export type TarefaMaxAggregateInputType = {
    id?: true
    descricao?: true
    status?: true
    usuarioId?: true
  }

  export type TarefaCountAggregateInputType = {
    id?: true
    descricao?: true
    status?: true
    usuarioId?: true
    _all?: true
  }

  export type TarefaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tarefa to aggregate.
     */
    where?: TarefaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tarefas to fetch.
     */
    orderBy?: TarefaOrderByWithRelationInput | TarefaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TarefaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tarefas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tarefas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tarefas
    **/
    _count?: true | TarefaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TarefaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TarefaMaxAggregateInputType
  }

  export type GetTarefaAggregateType<T extends TarefaAggregateArgs> = {
        [P in keyof T & keyof AggregateTarefa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTarefa[P]>
      : GetScalarType<T[P], AggregateTarefa[P]>
  }




  export type TarefaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TarefaWhereInput
    orderBy?: TarefaOrderByWithAggregationInput | TarefaOrderByWithAggregationInput[]
    by: TarefaScalarFieldEnum[] | TarefaScalarFieldEnum
    having?: TarefaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TarefaCountAggregateInputType | true
    _min?: TarefaMinAggregateInputType
    _max?: TarefaMaxAggregateInputType
  }

  export type TarefaGroupByOutputType = {
    id: string
    descricao: string
    status: boolean
    usuarioId: string
    _count: TarefaCountAggregateOutputType | null
    _min: TarefaMinAggregateOutputType | null
    _max: TarefaMaxAggregateOutputType | null
  }

  type GetTarefaGroupByPayload<T extends TarefaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TarefaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TarefaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TarefaGroupByOutputType[P]>
            : GetScalarType<T[P], TarefaGroupByOutputType[P]>
        }
      >
    >


  export type TarefaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    status?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    atividades?: boolean | Tarefa$atividadesArgs<ExtArgs>
    _count?: boolean | TarefaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tarefa"]>

  export type TarefaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    status?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tarefa"]>

  export type TarefaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    status?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tarefa"]>

  export type TarefaSelectScalar = {
    id?: boolean
    descricao?: boolean
    status?: boolean
    usuarioId?: boolean
  }

  export type TarefaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao" | "status" | "usuarioId", ExtArgs["result"]["tarefa"]>
  export type TarefaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    atividades?: boolean | Tarefa$atividadesArgs<ExtArgs>
    _count?: boolean | TarefaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TarefaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type TarefaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $TarefaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tarefa"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      atividades: Prisma.$AtividadePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      descricao: string
      status: boolean
      usuarioId: string
    }, ExtArgs["result"]["tarefa"]>
    composites: {}
  }

  type TarefaGetPayload<S extends boolean | null | undefined | TarefaDefaultArgs> = $Result.GetResult<Prisma.$TarefaPayload, S>

  type TarefaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TarefaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TarefaCountAggregateInputType | true
    }

  export interface TarefaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tarefa'], meta: { name: 'Tarefa' } }
    /**
     * Find zero or one Tarefa that matches the filter.
     * @param {TarefaFindUniqueArgs} args - Arguments to find a Tarefa
     * @example
     * // Get one Tarefa
     * const tarefa = await prisma.tarefa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TarefaFindUniqueArgs>(args: SelectSubset<T, TarefaFindUniqueArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tarefa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TarefaFindUniqueOrThrowArgs} args - Arguments to find a Tarefa
     * @example
     * // Get one Tarefa
     * const tarefa = await prisma.tarefa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TarefaFindUniqueOrThrowArgs>(args: SelectSubset<T, TarefaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tarefa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaFindFirstArgs} args - Arguments to find a Tarefa
     * @example
     * // Get one Tarefa
     * const tarefa = await prisma.tarefa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TarefaFindFirstArgs>(args?: SelectSubset<T, TarefaFindFirstArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tarefa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaFindFirstOrThrowArgs} args - Arguments to find a Tarefa
     * @example
     * // Get one Tarefa
     * const tarefa = await prisma.tarefa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TarefaFindFirstOrThrowArgs>(args?: SelectSubset<T, TarefaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tarefas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tarefas
     * const tarefas = await prisma.tarefa.findMany()
     * 
     * // Get first 10 Tarefas
     * const tarefas = await prisma.tarefa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tarefaWithIdOnly = await prisma.tarefa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TarefaFindManyArgs>(args?: SelectSubset<T, TarefaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tarefa.
     * @param {TarefaCreateArgs} args - Arguments to create a Tarefa.
     * @example
     * // Create one Tarefa
     * const Tarefa = await prisma.tarefa.create({
     *   data: {
     *     // ... data to create a Tarefa
     *   }
     * })
     * 
     */
    create<T extends TarefaCreateArgs>(args: SelectSubset<T, TarefaCreateArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tarefas.
     * @param {TarefaCreateManyArgs} args - Arguments to create many Tarefas.
     * @example
     * // Create many Tarefas
     * const tarefa = await prisma.tarefa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TarefaCreateManyArgs>(args?: SelectSubset<T, TarefaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tarefas and returns the data saved in the database.
     * @param {TarefaCreateManyAndReturnArgs} args - Arguments to create many Tarefas.
     * @example
     * // Create many Tarefas
     * const tarefa = await prisma.tarefa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tarefas and only return the `id`
     * const tarefaWithIdOnly = await prisma.tarefa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TarefaCreateManyAndReturnArgs>(args?: SelectSubset<T, TarefaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tarefa.
     * @param {TarefaDeleteArgs} args - Arguments to delete one Tarefa.
     * @example
     * // Delete one Tarefa
     * const Tarefa = await prisma.tarefa.delete({
     *   where: {
     *     // ... filter to delete one Tarefa
     *   }
     * })
     * 
     */
    delete<T extends TarefaDeleteArgs>(args: SelectSubset<T, TarefaDeleteArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tarefa.
     * @param {TarefaUpdateArgs} args - Arguments to update one Tarefa.
     * @example
     * // Update one Tarefa
     * const tarefa = await prisma.tarefa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TarefaUpdateArgs>(args: SelectSubset<T, TarefaUpdateArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tarefas.
     * @param {TarefaDeleteManyArgs} args - Arguments to filter Tarefas to delete.
     * @example
     * // Delete a few Tarefas
     * const { count } = await prisma.tarefa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TarefaDeleteManyArgs>(args?: SelectSubset<T, TarefaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tarefas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tarefas
     * const tarefa = await prisma.tarefa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TarefaUpdateManyArgs>(args: SelectSubset<T, TarefaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tarefas and returns the data updated in the database.
     * @param {TarefaUpdateManyAndReturnArgs} args - Arguments to update many Tarefas.
     * @example
     * // Update many Tarefas
     * const tarefa = await prisma.tarefa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tarefas and only return the `id`
     * const tarefaWithIdOnly = await prisma.tarefa.updateManyAndReturn({
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
    updateManyAndReturn<T extends TarefaUpdateManyAndReturnArgs>(args: SelectSubset<T, TarefaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tarefa.
     * @param {TarefaUpsertArgs} args - Arguments to update or create a Tarefa.
     * @example
     * // Update or create a Tarefa
     * const tarefa = await prisma.tarefa.upsert({
     *   create: {
     *     // ... data to create a Tarefa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tarefa we want to update
     *   }
     * })
     */
    upsert<T extends TarefaUpsertArgs>(args: SelectSubset<T, TarefaUpsertArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tarefas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaCountArgs} args - Arguments to filter Tarefas to count.
     * @example
     * // Count the number of Tarefas
     * const count = await prisma.tarefa.count({
     *   where: {
     *     // ... the filter for the Tarefas we want to count
     *   }
     * })
    **/
    count<T extends TarefaCountArgs>(
      args?: Subset<T, TarefaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TarefaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tarefa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TarefaAggregateArgs>(args: Subset<T, TarefaAggregateArgs>): Prisma.PrismaPromise<GetTarefaAggregateType<T>>

    /**
     * Group by Tarefa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaGroupByArgs} args - Group by arguments.
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
      T extends TarefaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TarefaGroupByArgs['orderBy'] }
        : { orderBy?: TarefaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TarefaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTarefaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tarefa model
   */
  readonly fields: TarefaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tarefa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TarefaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    atividades<T extends Tarefa$atividadesArgs<ExtArgs> = {}>(args?: Subset<T, Tarefa$atividadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tarefa model
   */
  interface TarefaFieldRefs {
    readonly id: FieldRef<"Tarefa", 'String'>
    readonly descricao: FieldRef<"Tarefa", 'String'>
    readonly status: FieldRef<"Tarefa", 'Boolean'>
    readonly usuarioId: FieldRef<"Tarefa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tarefa findUnique
   */
  export type TarefaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * Filter, which Tarefa to fetch.
     */
    where: TarefaWhereUniqueInput
  }

  /**
   * Tarefa findUniqueOrThrow
   */
  export type TarefaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * Filter, which Tarefa to fetch.
     */
    where: TarefaWhereUniqueInput
  }

  /**
   * Tarefa findFirst
   */
  export type TarefaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * Filter, which Tarefa to fetch.
     */
    where?: TarefaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tarefas to fetch.
     */
    orderBy?: TarefaOrderByWithRelationInput | TarefaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tarefas.
     */
    cursor?: TarefaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tarefas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tarefas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tarefas.
     */
    distinct?: TarefaScalarFieldEnum | TarefaScalarFieldEnum[]
  }

  /**
   * Tarefa findFirstOrThrow
   */
  export type TarefaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * Filter, which Tarefa to fetch.
     */
    where?: TarefaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tarefas to fetch.
     */
    orderBy?: TarefaOrderByWithRelationInput | TarefaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tarefas.
     */
    cursor?: TarefaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tarefas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tarefas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tarefas.
     */
    distinct?: TarefaScalarFieldEnum | TarefaScalarFieldEnum[]
  }

  /**
   * Tarefa findMany
   */
  export type TarefaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * Filter, which Tarefas to fetch.
     */
    where?: TarefaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tarefas to fetch.
     */
    orderBy?: TarefaOrderByWithRelationInput | TarefaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tarefas.
     */
    cursor?: TarefaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tarefas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tarefas.
     */
    skip?: number
    distinct?: TarefaScalarFieldEnum | TarefaScalarFieldEnum[]
  }

  /**
   * Tarefa create
   */
  export type TarefaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * The data needed to create a Tarefa.
     */
    data: XOR<TarefaCreateInput, TarefaUncheckedCreateInput>
  }

  /**
   * Tarefa createMany
   */
  export type TarefaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tarefas.
     */
    data: TarefaCreateManyInput | TarefaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tarefa createManyAndReturn
   */
  export type TarefaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * The data used to create many Tarefas.
     */
    data: TarefaCreateManyInput | TarefaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tarefa update
   */
  export type TarefaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * The data needed to update a Tarefa.
     */
    data: XOR<TarefaUpdateInput, TarefaUncheckedUpdateInput>
    /**
     * Choose, which Tarefa to update.
     */
    where: TarefaWhereUniqueInput
  }

  /**
   * Tarefa updateMany
   */
  export type TarefaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tarefas.
     */
    data: XOR<TarefaUpdateManyMutationInput, TarefaUncheckedUpdateManyInput>
    /**
     * Filter which Tarefas to update
     */
    where?: TarefaWhereInput
    /**
     * Limit how many Tarefas to update.
     */
    limit?: number
  }

  /**
   * Tarefa updateManyAndReturn
   */
  export type TarefaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * The data used to update Tarefas.
     */
    data: XOR<TarefaUpdateManyMutationInput, TarefaUncheckedUpdateManyInput>
    /**
     * Filter which Tarefas to update
     */
    where?: TarefaWhereInput
    /**
     * Limit how many Tarefas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tarefa upsert
   */
  export type TarefaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * The filter to search for the Tarefa to update in case it exists.
     */
    where: TarefaWhereUniqueInput
    /**
     * In case the Tarefa found by the `where` argument doesn't exist, create a new Tarefa with this data.
     */
    create: XOR<TarefaCreateInput, TarefaUncheckedCreateInput>
    /**
     * In case the Tarefa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TarefaUpdateInput, TarefaUncheckedUpdateInput>
  }

  /**
   * Tarefa delete
   */
  export type TarefaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * Filter which Tarefa to delete.
     */
    where: TarefaWhereUniqueInput
  }

  /**
   * Tarefa deleteMany
   */
  export type TarefaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tarefas to delete
     */
    where?: TarefaWhereInput
    /**
     * Limit how many Tarefas to delete.
     */
    limit?: number
  }

  /**
   * Tarefa.atividades
   */
  export type Tarefa$atividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    where?: AtividadeWhereInput
    orderBy?: AtividadeOrderByWithRelationInput | AtividadeOrderByWithRelationInput[]
    cursor?: AtividadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtividadeScalarFieldEnum | AtividadeScalarFieldEnum[]
  }

  /**
   * Tarefa without action
   */
  export type TarefaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
  }


  /**
   * Model Atividade
   */

  export type AggregateAtividade = {
    _count: AtividadeCountAggregateOutputType | null
    _min: AtividadeMinAggregateOutputType | null
    _max: AtividadeMaxAggregateOutputType | null
  }

  export type AtividadeMinAggregateOutputType = {
    id: string | null
    tipo: $Enums.TipoAtividade | null
    acao: $Enums.AcaoAtividade | null
    datHora: Date | null
    tarefaId: string | null
    listaDeCompraId: string | null
    lembreteId: string | null
    veiculoId: string | null
  }

  export type AtividadeMaxAggregateOutputType = {
    id: string | null
    tipo: $Enums.TipoAtividade | null
    acao: $Enums.AcaoAtividade | null
    datHora: Date | null
    tarefaId: string | null
    listaDeCompraId: string | null
    lembreteId: string | null
    veiculoId: string | null
  }

  export type AtividadeCountAggregateOutputType = {
    id: number
    tipo: number
    acao: number
    datHora: number
    tarefaId: number
    listaDeCompraId: number
    lembreteId: number
    veiculoId: number
    _all: number
  }


  export type AtividadeMinAggregateInputType = {
    id?: true
    tipo?: true
    acao?: true
    datHora?: true
    tarefaId?: true
    listaDeCompraId?: true
    lembreteId?: true
    veiculoId?: true
  }

  export type AtividadeMaxAggregateInputType = {
    id?: true
    tipo?: true
    acao?: true
    datHora?: true
    tarefaId?: true
    listaDeCompraId?: true
    lembreteId?: true
    veiculoId?: true
  }

  export type AtividadeCountAggregateInputType = {
    id?: true
    tipo?: true
    acao?: true
    datHora?: true
    tarefaId?: true
    listaDeCompraId?: true
    lembreteId?: true
    veiculoId?: true
    _all?: true
  }

  export type AtividadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atividade to aggregate.
     */
    where?: AtividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atividades to fetch.
     */
    orderBy?: AtividadeOrderByWithRelationInput | AtividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Atividades
    **/
    _count?: true | AtividadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtividadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtividadeMaxAggregateInputType
  }

  export type GetAtividadeAggregateType<T extends AtividadeAggregateArgs> = {
        [P in keyof T & keyof AggregateAtividade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtividade[P]>
      : GetScalarType<T[P], AggregateAtividade[P]>
  }




  export type AtividadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtividadeWhereInput
    orderBy?: AtividadeOrderByWithAggregationInput | AtividadeOrderByWithAggregationInput[]
    by: AtividadeScalarFieldEnum[] | AtividadeScalarFieldEnum
    having?: AtividadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtividadeCountAggregateInputType | true
    _min?: AtividadeMinAggregateInputType
    _max?: AtividadeMaxAggregateInputType
  }

  export type AtividadeGroupByOutputType = {
    id: string
    tipo: $Enums.TipoAtividade
    acao: $Enums.AcaoAtividade
    datHora: Date
    tarefaId: string | null
    listaDeCompraId: string | null
    lembreteId: string | null
    veiculoId: string | null
    _count: AtividadeCountAggregateOutputType | null
    _min: AtividadeMinAggregateOutputType | null
    _max: AtividadeMaxAggregateOutputType | null
  }

  type GetAtividadeGroupByPayload<T extends AtividadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtividadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtividadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtividadeGroupByOutputType[P]>
            : GetScalarType<T[P], AtividadeGroupByOutputType[P]>
        }
      >
    >


  export type AtividadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    acao?: boolean
    datHora?: boolean
    tarefaId?: boolean
    listaDeCompraId?: boolean
    lembreteId?: boolean
    veiculoId?: boolean
    tarefa?: boolean | Atividade$tarefaArgs<ExtArgs>
    lista?: boolean | Atividade$listaArgs<ExtArgs>
    lembrete?: boolean | Atividade$lembreteArgs<ExtArgs>
    veiculo?: boolean | Atividade$veiculoArgs<ExtArgs>
  }, ExtArgs["result"]["atividade"]>

  export type AtividadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    acao?: boolean
    datHora?: boolean
    tarefaId?: boolean
    listaDeCompraId?: boolean
    lembreteId?: boolean
    veiculoId?: boolean
    tarefa?: boolean | Atividade$tarefaArgs<ExtArgs>
    lista?: boolean | Atividade$listaArgs<ExtArgs>
    lembrete?: boolean | Atividade$lembreteArgs<ExtArgs>
    veiculo?: boolean | Atividade$veiculoArgs<ExtArgs>
  }, ExtArgs["result"]["atividade"]>

  export type AtividadeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    acao?: boolean
    datHora?: boolean
    tarefaId?: boolean
    listaDeCompraId?: boolean
    lembreteId?: boolean
    veiculoId?: boolean
    tarefa?: boolean | Atividade$tarefaArgs<ExtArgs>
    lista?: boolean | Atividade$listaArgs<ExtArgs>
    lembrete?: boolean | Atividade$lembreteArgs<ExtArgs>
    veiculo?: boolean | Atividade$veiculoArgs<ExtArgs>
  }, ExtArgs["result"]["atividade"]>

  export type AtividadeSelectScalar = {
    id?: boolean
    tipo?: boolean
    acao?: boolean
    datHora?: boolean
    tarefaId?: boolean
    listaDeCompraId?: boolean
    lembreteId?: boolean
    veiculoId?: boolean
  }

  export type AtividadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "acao" | "datHora" | "tarefaId" | "listaDeCompraId" | "lembreteId" | "veiculoId", ExtArgs["result"]["atividade"]>
  export type AtividadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tarefa?: boolean | Atividade$tarefaArgs<ExtArgs>
    lista?: boolean | Atividade$listaArgs<ExtArgs>
    lembrete?: boolean | Atividade$lembreteArgs<ExtArgs>
    veiculo?: boolean | Atividade$veiculoArgs<ExtArgs>
  }
  export type AtividadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tarefa?: boolean | Atividade$tarefaArgs<ExtArgs>
    lista?: boolean | Atividade$listaArgs<ExtArgs>
    lembrete?: boolean | Atividade$lembreteArgs<ExtArgs>
    veiculo?: boolean | Atividade$veiculoArgs<ExtArgs>
  }
  export type AtividadeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tarefa?: boolean | Atividade$tarefaArgs<ExtArgs>
    lista?: boolean | Atividade$listaArgs<ExtArgs>
    lembrete?: boolean | Atividade$lembreteArgs<ExtArgs>
    veiculo?: boolean | Atividade$veiculoArgs<ExtArgs>
  }

  export type $AtividadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Atividade"
    objects: {
      tarefa: Prisma.$TarefaPayload<ExtArgs> | null
      lista: Prisma.$ListaDeCompraPayload<ExtArgs> | null
      lembrete: Prisma.$LembretePayload<ExtArgs> | null
      veiculo: Prisma.$VeiculoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tipo: $Enums.TipoAtividade
      acao: $Enums.AcaoAtividade
      datHora: Date
      tarefaId: string | null
      listaDeCompraId: string | null
      lembreteId: string | null
      veiculoId: string | null
    }, ExtArgs["result"]["atividade"]>
    composites: {}
  }

  type AtividadeGetPayload<S extends boolean | null | undefined | AtividadeDefaultArgs> = $Result.GetResult<Prisma.$AtividadePayload, S>

  type AtividadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AtividadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AtividadeCountAggregateInputType | true
    }

  export interface AtividadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Atividade'], meta: { name: 'Atividade' } }
    /**
     * Find zero or one Atividade that matches the filter.
     * @param {AtividadeFindUniqueArgs} args - Arguments to find a Atividade
     * @example
     * // Get one Atividade
     * const atividade = await prisma.atividade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtividadeFindUniqueArgs>(args: SelectSubset<T, AtividadeFindUniqueArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Atividade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AtividadeFindUniqueOrThrowArgs} args - Arguments to find a Atividade
     * @example
     * // Get one Atividade
     * const atividade = await prisma.atividade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtividadeFindUniqueOrThrowArgs>(args: SelectSubset<T, AtividadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atividade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeFindFirstArgs} args - Arguments to find a Atividade
     * @example
     * // Get one Atividade
     * const atividade = await prisma.atividade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtividadeFindFirstArgs>(args?: SelectSubset<T, AtividadeFindFirstArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atividade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeFindFirstOrThrowArgs} args - Arguments to find a Atividade
     * @example
     * // Get one Atividade
     * const atividade = await prisma.atividade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtividadeFindFirstOrThrowArgs>(args?: SelectSubset<T, AtividadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Atividades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Atividades
     * const atividades = await prisma.atividade.findMany()
     * 
     * // Get first 10 Atividades
     * const atividades = await prisma.atividade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const atividadeWithIdOnly = await prisma.atividade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AtividadeFindManyArgs>(args?: SelectSubset<T, AtividadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Atividade.
     * @param {AtividadeCreateArgs} args - Arguments to create a Atividade.
     * @example
     * // Create one Atividade
     * const Atividade = await prisma.atividade.create({
     *   data: {
     *     // ... data to create a Atividade
     *   }
     * })
     * 
     */
    create<T extends AtividadeCreateArgs>(args: SelectSubset<T, AtividadeCreateArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Atividades.
     * @param {AtividadeCreateManyArgs} args - Arguments to create many Atividades.
     * @example
     * // Create many Atividades
     * const atividade = await prisma.atividade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtividadeCreateManyArgs>(args?: SelectSubset<T, AtividadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Atividades and returns the data saved in the database.
     * @param {AtividadeCreateManyAndReturnArgs} args - Arguments to create many Atividades.
     * @example
     * // Create many Atividades
     * const atividade = await prisma.atividade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Atividades and only return the `id`
     * const atividadeWithIdOnly = await prisma.atividade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AtividadeCreateManyAndReturnArgs>(args?: SelectSubset<T, AtividadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Atividade.
     * @param {AtividadeDeleteArgs} args - Arguments to delete one Atividade.
     * @example
     * // Delete one Atividade
     * const Atividade = await prisma.atividade.delete({
     *   where: {
     *     // ... filter to delete one Atividade
     *   }
     * })
     * 
     */
    delete<T extends AtividadeDeleteArgs>(args: SelectSubset<T, AtividadeDeleteArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Atividade.
     * @param {AtividadeUpdateArgs} args - Arguments to update one Atividade.
     * @example
     * // Update one Atividade
     * const atividade = await prisma.atividade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtividadeUpdateArgs>(args: SelectSubset<T, AtividadeUpdateArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Atividades.
     * @param {AtividadeDeleteManyArgs} args - Arguments to filter Atividades to delete.
     * @example
     * // Delete a few Atividades
     * const { count } = await prisma.atividade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtividadeDeleteManyArgs>(args?: SelectSubset<T, AtividadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atividades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Atividades
     * const atividade = await prisma.atividade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtividadeUpdateManyArgs>(args: SelectSubset<T, AtividadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atividades and returns the data updated in the database.
     * @param {AtividadeUpdateManyAndReturnArgs} args - Arguments to update many Atividades.
     * @example
     * // Update many Atividades
     * const atividade = await prisma.atividade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Atividades and only return the `id`
     * const atividadeWithIdOnly = await prisma.atividade.updateManyAndReturn({
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
    updateManyAndReturn<T extends AtividadeUpdateManyAndReturnArgs>(args: SelectSubset<T, AtividadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Atividade.
     * @param {AtividadeUpsertArgs} args - Arguments to update or create a Atividade.
     * @example
     * // Update or create a Atividade
     * const atividade = await prisma.atividade.upsert({
     *   create: {
     *     // ... data to create a Atividade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Atividade we want to update
     *   }
     * })
     */
    upsert<T extends AtividadeUpsertArgs>(args: SelectSubset<T, AtividadeUpsertArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Atividades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeCountArgs} args - Arguments to filter Atividades to count.
     * @example
     * // Count the number of Atividades
     * const count = await prisma.atividade.count({
     *   where: {
     *     // ... the filter for the Atividades we want to count
     *   }
     * })
    **/
    count<T extends AtividadeCountArgs>(
      args?: Subset<T, AtividadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtividadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Atividade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AtividadeAggregateArgs>(args: Subset<T, AtividadeAggregateArgs>): Prisma.PrismaPromise<GetAtividadeAggregateType<T>>

    /**
     * Group by Atividade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeGroupByArgs} args - Group by arguments.
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
      T extends AtividadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtividadeGroupByArgs['orderBy'] }
        : { orderBy?: AtividadeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AtividadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtividadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Atividade model
   */
  readonly fields: AtividadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Atividade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtividadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tarefa<T extends Atividade$tarefaArgs<ExtArgs> = {}>(args?: Subset<T, Atividade$tarefaArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    lista<T extends Atividade$listaArgs<ExtArgs> = {}>(args?: Subset<T, Atividade$listaArgs<ExtArgs>>): Prisma__ListaDeCompraClient<$Result.GetResult<Prisma.$ListaDeCompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    lembrete<T extends Atividade$lembreteArgs<ExtArgs> = {}>(args?: Subset<T, Atividade$lembreteArgs<ExtArgs>>): Prisma__LembreteClient<$Result.GetResult<Prisma.$LembretePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    veiculo<T extends Atividade$veiculoArgs<ExtArgs> = {}>(args?: Subset<T, Atividade$veiculoArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Atividade model
   */
  interface AtividadeFieldRefs {
    readonly id: FieldRef<"Atividade", 'String'>
    readonly tipo: FieldRef<"Atividade", 'TipoAtividade'>
    readonly acao: FieldRef<"Atividade", 'AcaoAtividade'>
    readonly datHora: FieldRef<"Atividade", 'DateTime'>
    readonly tarefaId: FieldRef<"Atividade", 'String'>
    readonly listaDeCompraId: FieldRef<"Atividade", 'String'>
    readonly lembreteId: FieldRef<"Atividade", 'String'>
    readonly veiculoId: FieldRef<"Atividade", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Atividade findUnique
   */
  export type AtividadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * Filter, which Atividade to fetch.
     */
    where: AtividadeWhereUniqueInput
  }

  /**
   * Atividade findUniqueOrThrow
   */
  export type AtividadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * Filter, which Atividade to fetch.
     */
    where: AtividadeWhereUniqueInput
  }

  /**
   * Atividade findFirst
   */
  export type AtividadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * Filter, which Atividade to fetch.
     */
    where?: AtividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atividades to fetch.
     */
    orderBy?: AtividadeOrderByWithRelationInput | AtividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atividades.
     */
    cursor?: AtividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atividades.
     */
    distinct?: AtividadeScalarFieldEnum | AtividadeScalarFieldEnum[]
  }

  /**
   * Atividade findFirstOrThrow
   */
  export type AtividadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * Filter, which Atividade to fetch.
     */
    where?: AtividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atividades to fetch.
     */
    orderBy?: AtividadeOrderByWithRelationInput | AtividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atividades.
     */
    cursor?: AtividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atividades.
     */
    distinct?: AtividadeScalarFieldEnum | AtividadeScalarFieldEnum[]
  }

  /**
   * Atividade findMany
   */
  export type AtividadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * Filter, which Atividades to fetch.
     */
    where?: AtividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atividades to fetch.
     */
    orderBy?: AtividadeOrderByWithRelationInput | AtividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Atividades.
     */
    cursor?: AtividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atividades.
     */
    skip?: number
    distinct?: AtividadeScalarFieldEnum | AtividadeScalarFieldEnum[]
  }

  /**
   * Atividade create
   */
  export type AtividadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * The data needed to create a Atividade.
     */
    data: XOR<AtividadeCreateInput, AtividadeUncheckedCreateInput>
  }

  /**
   * Atividade createMany
   */
  export type AtividadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Atividades.
     */
    data: AtividadeCreateManyInput | AtividadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Atividade createManyAndReturn
   */
  export type AtividadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * The data used to create many Atividades.
     */
    data: AtividadeCreateManyInput | AtividadeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Atividade update
   */
  export type AtividadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * The data needed to update a Atividade.
     */
    data: XOR<AtividadeUpdateInput, AtividadeUncheckedUpdateInput>
    /**
     * Choose, which Atividade to update.
     */
    where: AtividadeWhereUniqueInput
  }

  /**
   * Atividade updateMany
   */
  export type AtividadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Atividades.
     */
    data: XOR<AtividadeUpdateManyMutationInput, AtividadeUncheckedUpdateManyInput>
    /**
     * Filter which Atividades to update
     */
    where?: AtividadeWhereInput
    /**
     * Limit how many Atividades to update.
     */
    limit?: number
  }

  /**
   * Atividade updateManyAndReturn
   */
  export type AtividadeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * The data used to update Atividades.
     */
    data: XOR<AtividadeUpdateManyMutationInput, AtividadeUncheckedUpdateManyInput>
    /**
     * Filter which Atividades to update
     */
    where?: AtividadeWhereInput
    /**
     * Limit how many Atividades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Atividade upsert
   */
  export type AtividadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * The filter to search for the Atividade to update in case it exists.
     */
    where: AtividadeWhereUniqueInput
    /**
     * In case the Atividade found by the `where` argument doesn't exist, create a new Atividade with this data.
     */
    create: XOR<AtividadeCreateInput, AtividadeUncheckedCreateInput>
    /**
     * In case the Atividade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtividadeUpdateInput, AtividadeUncheckedUpdateInput>
  }

  /**
   * Atividade delete
   */
  export type AtividadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * Filter which Atividade to delete.
     */
    where: AtividadeWhereUniqueInput
  }

  /**
   * Atividade deleteMany
   */
  export type AtividadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atividades to delete
     */
    where?: AtividadeWhereInput
    /**
     * Limit how many Atividades to delete.
     */
    limit?: number
  }

  /**
   * Atividade.tarefa
   */
  export type Atividade$tarefaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    where?: TarefaWhereInput
  }

  /**
   * Atividade.lista
   */
  export type Atividade$listaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeCompra
     */
    select?: ListaDeCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeCompra
     */
    omit?: ListaDeCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeCompraInclude<ExtArgs> | null
    where?: ListaDeCompraWhereInput
  }

  /**
   * Atividade.lembrete
   */
  export type Atividade$lembreteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lembrete
     */
    select?: LembreteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lembrete
     */
    omit?: LembreteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LembreteInclude<ExtArgs> | null
    where?: LembreteWhereInput
  }

  /**
   * Atividade.veiculo
   */
  export type Atividade$veiculoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    where?: VeiculoWhereInput
  }

  /**
   * Atividade without action
   */
  export type AtividadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const FamiliaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    usuarioId: 'usuarioId'
  };

  export type FamiliaScalarFieldEnum = (typeof FamiliaScalarFieldEnum)[keyof typeof FamiliaScalarFieldEnum]


  export const Familia_usuariosScalarFieldEnum: {
    id_usuario: 'id_usuario',
    id_familia: 'id_familia',
    rotulo: 'rotulo'
  };

  export type Familia_usuariosScalarFieldEnum = (typeof Familia_usuariosScalarFieldEnum)[keyof typeof Familia_usuariosScalarFieldEnum]


  export const ListaDeCompraScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    usuarioIdEnviou: 'usuarioIdEnviou',
    status: 'status'
  };

  export type ListaDeCompraScalarFieldEnum = (typeof ListaDeCompraScalarFieldEnum)[keyof typeof ListaDeCompraScalarFieldEnum]


  export const ItemListaDeCompraScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    quantidade: 'quantidade',
    comprado: 'comprado',
    listaId: 'listaId'
  };

  export type ItemListaDeCompraScalarFieldEnum = (typeof ItemListaDeCompraScalarFieldEnum)[keyof typeof ItemListaDeCompraScalarFieldEnum]


  export const VeiculoScalarFieldEnum: {
    id: 'id',
    marca: 'marca',
    modelo: 'modelo',
    ano: 'ano',
    placa: 'placa',
    usuarioId: 'usuarioId'
  };

  export type VeiculoScalarFieldEnum = (typeof VeiculoScalarFieldEnum)[keyof typeof VeiculoScalarFieldEnum]


  export const RegistroDeManutencaoScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    data: 'data',
    valor: 'valor',
    veiculoId: 'veiculoId'
  };

  export type RegistroDeManutencaoScalarFieldEnum = (typeof RegistroDeManutencaoScalarFieldEnum)[keyof typeof RegistroDeManutencaoScalarFieldEnum]


  export const LembreteScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    dataHora: 'dataHora',
    status: 'status',
    usuarioIdEnviou: 'usuarioIdEnviou',
    listaDeCompraId: 'listaDeCompraId',
    veiculoId: 'veiculoId'
  };

  export type LembreteScalarFieldEnum = (typeof LembreteScalarFieldEnum)[keyof typeof LembreteScalarFieldEnum]


  export const TarefaScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    status: 'status',
    usuarioId: 'usuarioId'
  };

  export type TarefaScalarFieldEnum = (typeof TarefaScalarFieldEnum)[keyof typeof TarefaScalarFieldEnum]


  export const AtividadeScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    acao: 'acao',
    datHora: 'datHora',
    tarefaId: 'tarefaId',
    listaDeCompraId: 'listaDeCompraId',
    lembreteId: 'lembreteId',
    veiculoId: 'veiculoId'
  };

  export type AtividadeScalarFieldEnum = (typeof AtividadeScalarFieldEnum)[keyof typeof AtividadeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Rotulo'
   */
  export type EnumRotuloFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rotulo'>
    


  /**
   * Reference to a field of type 'Rotulo[]'
   */
  export type ListEnumRotuloFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rotulo[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TipoAtividade'
   */
  export type EnumTipoAtividadeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoAtividade'>
    


  /**
   * Reference to a field of type 'TipoAtividade[]'
   */
  export type ListEnumTipoAtividadeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoAtividade[]'>
    


  /**
   * Reference to a field of type 'AcaoAtividade'
   */
  export type EnumAcaoAtividadeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AcaoAtividade'>
    


  /**
   * Reference to a field of type 'AcaoAtividade[]'
   */
  export type ListEnumAcaoAtividadeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AcaoAtividade[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: UuidFilter<"Usuario"> | string
    name?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    familias?: Familia_usuariosListRelationFilter
    lembretesEnviados?: LembreteListRelationFilter
    listasEnviadas?: ListaDeCompraListRelationFilter
    veiculos?: VeiculoListRelationFilter
    tarefas?: TarefaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    familias?: familia_usuariosOrderByRelationAggregateInput
    lembretesEnviados?: LembreteOrderByRelationAggregateInput
    listasEnviadas?: ListaDeCompraOrderByRelationAggregateInput
    veiculos?: VeiculoOrderByRelationAggregateInput
    tarefas?: TarefaOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    name?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    familias?: Familia_usuariosListRelationFilter
    lembretesEnviados?: LembreteListRelationFilter
    listasEnviadas?: ListaDeCompraListRelationFilter
    veiculos?: VeiculoListRelationFilter
    tarefas?: TarefaListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Usuario"> | string
    name?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type FamiliaWhereInput = {
    AND?: FamiliaWhereInput | FamiliaWhereInput[]
    OR?: FamiliaWhereInput[]
    NOT?: FamiliaWhereInput | FamiliaWhereInput[]
    id?: UuidFilter<"Familia"> | string
    nome?: StringFilter<"Familia"> | string
    usuarioId?: UuidFilter<"Familia"> | string
    usuarios?: Familia_usuariosListRelationFilter
  }

  export type FamiliaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    usuarioId?: SortOrder
    usuarios?: familia_usuariosOrderByRelationAggregateInput
  }

  export type FamiliaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FamiliaWhereInput | FamiliaWhereInput[]
    OR?: FamiliaWhereInput[]
    NOT?: FamiliaWhereInput | FamiliaWhereInput[]
    nome?: StringFilter<"Familia"> | string
    usuarioId?: UuidFilter<"Familia"> | string
    usuarios?: Familia_usuariosListRelationFilter
  }, "id">

  export type FamiliaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    usuarioId?: SortOrder
    _count?: FamiliaCountOrderByAggregateInput
    _max?: FamiliaMaxOrderByAggregateInput
    _min?: FamiliaMinOrderByAggregateInput
  }

  export type FamiliaScalarWhereWithAggregatesInput = {
    AND?: FamiliaScalarWhereWithAggregatesInput | FamiliaScalarWhereWithAggregatesInput[]
    OR?: FamiliaScalarWhereWithAggregatesInput[]
    NOT?: FamiliaScalarWhereWithAggregatesInput | FamiliaScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Familia"> | string
    nome?: StringWithAggregatesFilter<"Familia"> | string
    usuarioId?: UuidWithAggregatesFilter<"Familia"> | string
  }

  export type familia_usuariosWhereInput = {
    AND?: familia_usuariosWhereInput | familia_usuariosWhereInput[]
    OR?: familia_usuariosWhereInput[]
    NOT?: familia_usuariosWhereInput | familia_usuariosWhereInput[]
    id_usuario?: UuidFilter<"familia_usuarios"> | string
    id_familia?: UuidFilter<"familia_usuarios"> | string
    rotulo?: EnumRotuloFilter<"familia_usuarios"> | $Enums.Rotulo
    familia?: XOR<FamiliaScalarRelationFilter, FamiliaWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type familia_usuariosOrderByWithRelationInput = {
    id_usuario?: SortOrder
    id_familia?: SortOrder
    rotulo?: SortOrder
    familia?: FamiliaOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type familia_usuariosWhereUniqueInput = Prisma.AtLeast<{
    id_usuario_id_familia?: familia_usuariosId_usuarioId_familiaCompoundUniqueInput
    AND?: familia_usuariosWhereInput | familia_usuariosWhereInput[]
    OR?: familia_usuariosWhereInput[]
    NOT?: familia_usuariosWhereInput | familia_usuariosWhereInput[]
    id_usuario?: UuidFilter<"familia_usuarios"> | string
    id_familia?: UuidFilter<"familia_usuarios"> | string
    rotulo?: EnumRotuloFilter<"familia_usuarios"> | $Enums.Rotulo
    familia?: XOR<FamiliaScalarRelationFilter, FamiliaWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id_usuario_id_familia">

  export type familia_usuariosOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    id_familia?: SortOrder
    rotulo?: SortOrder
    _count?: familia_usuariosCountOrderByAggregateInput
    _max?: familia_usuariosMaxOrderByAggregateInput
    _min?: familia_usuariosMinOrderByAggregateInput
  }

  export type familia_usuariosScalarWhereWithAggregatesInput = {
    AND?: familia_usuariosScalarWhereWithAggregatesInput | familia_usuariosScalarWhereWithAggregatesInput[]
    OR?: familia_usuariosScalarWhereWithAggregatesInput[]
    NOT?: familia_usuariosScalarWhereWithAggregatesInput | familia_usuariosScalarWhereWithAggregatesInput[]
    id_usuario?: UuidWithAggregatesFilter<"familia_usuarios"> | string
    id_familia?: UuidWithAggregatesFilter<"familia_usuarios"> | string
    rotulo?: EnumRotuloWithAggregatesFilter<"familia_usuarios"> | $Enums.Rotulo
  }

  export type ListaDeCompraWhereInput = {
    AND?: ListaDeCompraWhereInput | ListaDeCompraWhereInput[]
    OR?: ListaDeCompraWhereInput[]
    NOT?: ListaDeCompraWhereInput | ListaDeCompraWhereInput[]
    id?: UuidFilter<"ListaDeCompra"> | string
    tipo?: StringFilter<"ListaDeCompra"> | string
    usuarioIdEnviou?: UuidFilter<"ListaDeCompra"> | string
    status?: BoolFilter<"ListaDeCompra"> | boolean
    usuarioEnviou?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    itens?: ItemListaDeCompraListRelationFilter
    lembretes?: LembreteListRelationFilter
    atividades?: AtividadeListRelationFilter
  }

  export type ListaDeCompraOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    usuarioIdEnviou?: SortOrder
    status?: SortOrder
    usuarioEnviou?: UsuarioOrderByWithRelationInput
    itens?: ItemListaDeCompraOrderByRelationAggregateInput
    lembretes?: LembreteOrderByRelationAggregateInput
    atividades?: AtividadeOrderByRelationAggregateInput
  }

  export type ListaDeCompraWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ListaDeCompraWhereInput | ListaDeCompraWhereInput[]
    OR?: ListaDeCompraWhereInput[]
    NOT?: ListaDeCompraWhereInput | ListaDeCompraWhereInput[]
    tipo?: StringFilter<"ListaDeCompra"> | string
    usuarioIdEnviou?: UuidFilter<"ListaDeCompra"> | string
    status?: BoolFilter<"ListaDeCompra"> | boolean
    usuarioEnviou?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    itens?: ItemListaDeCompraListRelationFilter
    lembretes?: LembreteListRelationFilter
    atividades?: AtividadeListRelationFilter
  }, "id">

  export type ListaDeCompraOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    usuarioIdEnviou?: SortOrder
    status?: SortOrder
    _count?: ListaDeCompraCountOrderByAggregateInput
    _max?: ListaDeCompraMaxOrderByAggregateInput
    _min?: ListaDeCompraMinOrderByAggregateInput
  }

  export type ListaDeCompraScalarWhereWithAggregatesInput = {
    AND?: ListaDeCompraScalarWhereWithAggregatesInput | ListaDeCompraScalarWhereWithAggregatesInput[]
    OR?: ListaDeCompraScalarWhereWithAggregatesInput[]
    NOT?: ListaDeCompraScalarWhereWithAggregatesInput | ListaDeCompraScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ListaDeCompra"> | string
    tipo?: StringWithAggregatesFilter<"ListaDeCompra"> | string
    usuarioIdEnviou?: UuidWithAggregatesFilter<"ListaDeCompra"> | string
    status?: BoolWithAggregatesFilter<"ListaDeCompra"> | boolean
  }

  export type ItemListaDeCompraWhereInput = {
    AND?: ItemListaDeCompraWhereInput | ItemListaDeCompraWhereInput[]
    OR?: ItemListaDeCompraWhereInput[]
    NOT?: ItemListaDeCompraWhereInput | ItemListaDeCompraWhereInput[]
    id?: UuidFilter<"ItemListaDeCompra"> | string
    descricao?: StringFilter<"ItemListaDeCompra"> | string
    quantidade?: IntFilter<"ItemListaDeCompra"> | number
    comprado?: BoolFilter<"ItemListaDeCompra"> | boolean
    listaId?: UuidFilter<"ItemListaDeCompra"> | string
    lista?: XOR<ListaDeCompraScalarRelationFilter, ListaDeCompraWhereInput>
  }

  export type ItemListaDeCompraOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    quantidade?: SortOrder
    comprado?: SortOrder
    listaId?: SortOrder
    lista?: ListaDeCompraOrderByWithRelationInput
  }

  export type ItemListaDeCompraWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ItemListaDeCompraWhereInput | ItemListaDeCompraWhereInput[]
    OR?: ItemListaDeCompraWhereInput[]
    NOT?: ItemListaDeCompraWhereInput | ItemListaDeCompraWhereInput[]
    descricao?: StringFilter<"ItemListaDeCompra"> | string
    quantidade?: IntFilter<"ItemListaDeCompra"> | number
    comprado?: BoolFilter<"ItemListaDeCompra"> | boolean
    listaId?: UuidFilter<"ItemListaDeCompra"> | string
    lista?: XOR<ListaDeCompraScalarRelationFilter, ListaDeCompraWhereInput>
  }, "id">

  export type ItemListaDeCompraOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    quantidade?: SortOrder
    comprado?: SortOrder
    listaId?: SortOrder
    _count?: ItemListaDeCompraCountOrderByAggregateInput
    _avg?: ItemListaDeCompraAvgOrderByAggregateInput
    _max?: ItemListaDeCompraMaxOrderByAggregateInput
    _min?: ItemListaDeCompraMinOrderByAggregateInput
    _sum?: ItemListaDeCompraSumOrderByAggregateInput
  }

  export type ItemListaDeCompraScalarWhereWithAggregatesInput = {
    AND?: ItemListaDeCompraScalarWhereWithAggregatesInput | ItemListaDeCompraScalarWhereWithAggregatesInput[]
    OR?: ItemListaDeCompraScalarWhereWithAggregatesInput[]
    NOT?: ItemListaDeCompraScalarWhereWithAggregatesInput | ItemListaDeCompraScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ItemListaDeCompra"> | string
    descricao?: StringWithAggregatesFilter<"ItemListaDeCompra"> | string
    quantidade?: IntWithAggregatesFilter<"ItemListaDeCompra"> | number
    comprado?: BoolWithAggregatesFilter<"ItemListaDeCompra"> | boolean
    listaId?: UuidWithAggregatesFilter<"ItemListaDeCompra"> | string
  }

  export type VeiculoWhereInput = {
    AND?: VeiculoWhereInput | VeiculoWhereInput[]
    OR?: VeiculoWhereInput[]
    NOT?: VeiculoWhereInput | VeiculoWhereInput[]
    id?: UuidFilter<"Veiculo"> | string
    marca?: StringFilter<"Veiculo"> | string
    modelo?: StringFilter<"Veiculo"> | string
    ano?: IntFilter<"Veiculo"> | number
    placa?: StringFilter<"Veiculo"> | string
    usuarioId?: UuidFilter<"Veiculo"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    Lembrete?: LembreteListRelationFilter
    manutencoes?: RegistroDeManutencaoListRelationFilter
    atividades?: AtividadeListRelationFilter
  }

  export type VeiculoOrderByWithRelationInput = {
    id?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    ano?: SortOrder
    placa?: SortOrder
    usuarioId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    Lembrete?: LembreteOrderByRelationAggregateInput
    manutencoes?: RegistroDeManutencaoOrderByRelationAggregateInput
    atividades?: AtividadeOrderByRelationAggregateInput
  }

  export type VeiculoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    placa?: string
    AND?: VeiculoWhereInput | VeiculoWhereInput[]
    OR?: VeiculoWhereInput[]
    NOT?: VeiculoWhereInput | VeiculoWhereInput[]
    marca?: StringFilter<"Veiculo"> | string
    modelo?: StringFilter<"Veiculo"> | string
    ano?: IntFilter<"Veiculo"> | number
    usuarioId?: UuidFilter<"Veiculo"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    Lembrete?: LembreteListRelationFilter
    manutencoes?: RegistroDeManutencaoListRelationFilter
    atividades?: AtividadeListRelationFilter
  }, "id" | "placa">

  export type VeiculoOrderByWithAggregationInput = {
    id?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    ano?: SortOrder
    placa?: SortOrder
    usuarioId?: SortOrder
    _count?: VeiculoCountOrderByAggregateInput
    _avg?: VeiculoAvgOrderByAggregateInput
    _max?: VeiculoMaxOrderByAggregateInput
    _min?: VeiculoMinOrderByAggregateInput
    _sum?: VeiculoSumOrderByAggregateInput
  }

  export type VeiculoScalarWhereWithAggregatesInput = {
    AND?: VeiculoScalarWhereWithAggregatesInput | VeiculoScalarWhereWithAggregatesInput[]
    OR?: VeiculoScalarWhereWithAggregatesInput[]
    NOT?: VeiculoScalarWhereWithAggregatesInput | VeiculoScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Veiculo"> | string
    marca?: StringWithAggregatesFilter<"Veiculo"> | string
    modelo?: StringWithAggregatesFilter<"Veiculo"> | string
    ano?: IntWithAggregatesFilter<"Veiculo"> | number
    placa?: StringWithAggregatesFilter<"Veiculo"> | string
    usuarioId?: UuidWithAggregatesFilter<"Veiculo"> | string
  }

  export type RegistroDeManutencaoWhereInput = {
    AND?: RegistroDeManutencaoWhereInput | RegistroDeManutencaoWhereInput[]
    OR?: RegistroDeManutencaoWhereInput[]
    NOT?: RegistroDeManutencaoWhereInput | RegistroDeManutencaoWhereInput[]
    id?: UuidFilter<"RegistroDeManutencao"> | string
    descricao?: StringNullableFilter<"RegistroDeManutencao"> | string | null
    data?: DateTimeFilter<"RegistroDeManutencao"> | Date | string
    valor?: FloatNullableFilter<"RegistroDeManutencao"> | number | null
    veiculoId?: UuidFilter<"RegistroDeManutencao"> | string
    veiculo?: XOR<VeiculoScalarRelationFilter, VeiculoWhereInput>
  }

  export type RegistroDeManutencaoOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrderInput | SortOrder
    data?: SortOrder
    valor?: SortOrderInput | SortOrder
    veiculoId?: SortOrder
    veiculo?: VeiculoOrderByWithRelationInput
  }

  export type RegistroDeManutencaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RegistroDeManutencaoWhereInput | RegistroDeManutencaoWhereInput[]
    OR?: RegistroDeManutencaoWhereInput[]
    NOT?: RegistroDeManutencaoWhereInput | RegistroDeManutencaoWhereInput[]
    descricao?: StringNullableFilter<"RegistroDeManutencao"> | string | null
    data?: DateTimeFilter<"RegistroDeManutencao"> | Date | string
    valor?: FloatNullableFilter<"RegistroDeManutencao"> | number | null
    veiculoId?: UuidFilter<"RegistroDeManutencao"> | string
    veiculo?: XOR<VeiculoScalarRelationFilter, VeiculoWhereInput>
  }, "id">

  export type RegistroDeManutencaoOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrderInput | SortOrder
    data?: SortOrder
    valor?: SortOrderInput | SortOrder
    veiculoId?: SortOrder
    _count?: RegistroDeManutencaoCountOrderByAggregateInput
    _avg?: RegistroDeManutencaoAvgOrderByAggregateInput
    _max?: RegistroDeManutencaoMaxOrderByAggregateInput
    _min?: RegistroDeManutencaoMinOrderByAggregateInput
    _sum?: RegistroDeManutencaoSumOrderByAggregateInput
  }

  export type RegistroDeManutencaoScalarWhereWithAggregatesInput = {
    AND?: RegistroDeManutencaoScalarWhereWithAggregatesInput | RegistroDeManutencaoScalarWhereWithAggregatesInput[]
    OR?: RegistroDeManutencaoScalarWhereWithAggregatesInput[]
    NOT?: RegistroDeManutencaoScalarWhereWithAggregatesInput | RegistroDeManutencaoScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"RegistroDeManutencao"> | string
    descricao?: StringNullableWithAggregatesFilter<"RegistroDeManutencao"> | string | null
    data?: DateTimeWithAggregatesFilter<"RegistroDeManutencao"> | Date | string
    valor?: FloatNullableWithAggregatesFilter<"RegistroDeManutencao"> | number | null
    veiculoId?: UuidWithAggregatesFilter<"RegistroDeManutencao"> | string
  }

  export type LembreteWhereInput = {
    AND?: LembreteWhereInput | LembreteWhereInput[]
    OR?: LembreteWhereInput[]
    NOT?: LembreteWhereInput | LembreteWhereInput[]
    id?: UuidFilter<"Lembrete"> | string
    descricao?: StringFilter<"Lembrete"> | string
    dataHora?: DateTimeFilter<"Lembrete"> | Date | string
    status?: BoolFilter<"Lembrete"> | boolean
    usuarioIdEnviou?: UuidFilter<"Lembrete"> | string
    listaDeCompraId?: UuidFilter<"Lembrete"> | string
    veiculoId?: UuidFilter<"Lembrete"> | string
    listaDeCompra?: XOR<ListaDeCompraScalarRelationFilter, ListaDeCompraWhereInput>
    usuarioEnviou?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    veiculo?: XOR<VeiculoScalarRelationFilter, VeiculoWhereInput>
    atividades?: AtividadeListRelationFilter
  }

  export type LembreteOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    dataHora?: SortOrder
    status?: SortOrder
    usuarioIdEnviou?: SortOrder
    listaDeCompraId?: SortOrder
    veiculoId?: SortOrder
    listaDeCompra?: ListaDeCompraOrderByWithRelationInput
    usuarioEnviou?: UsuarioOrderByWithRelationInput
    veiculo?: VeiculoOrderByWithRelationInput
    atividades?: AtividadeOrderByRelationAggregateInput
  }

  export type LembreteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LembreteWhereInput | LembreteWhereInput[]
    OR?: LembreteWhereInput[]
    NOT?: LembreteWhereInput | LembreteWhereInput[]
    descricao?: StringFilter<"Lembrete"> | string
    dataHora?: DateTimeFilter<"Lembrete"> | Date | string
    status?: BoolFilter<"Lembrete"> | boolean
    usuarioIdEnviou?: UuidFilter<"Lembrete"> | string
    listaDeCompraId?: UuidFilter<"Lembrete"> | string
    veiculoId?: UuidFilter<"Lembrete"> | string
    listaDeCompra?: XOR<ListaDeCompraScalarRelationFilter, ListaDeCompraWhereInput>
    usuarioEnviou?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    veiculo?: XOR<VeiculoScalarRelationFilter, VeiculoWhereInput>
    atividades?: AtividadeListRelationFilter
  }, "id">

  export type LembreteOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    dataHora?: SortOrder
    status?: SortOrder
    usuarioIdEnviou?: SortOrder
    listaDeCompraId?: SortOrder
    veiculoId?: SortOrder
    _count?: LembreteCountOrderByAggregateInput
    _max?: LembreteMaxOrderByAggregateInput
    _min?: LembreteMinOrderByAggregateInput
  }

  export type LembreteScalarWhereWithAggregatesInput = {
    AND?: LembreteScalarWhereWithAggregatesInput | LembreteScalarWhereWithAggregatesInput[]
    OR?: LembreteScalarWhereWithAggregatesInput[]
    NOT?: LembreteScalarWhereWithAggregatesInput | LembreteScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Lembrete"> | string
    descricao?: StringWithAggregatesFilter<"Lembrete"> | string
    dataHora?: DateTimeWithAggregatesFilter<"Lembrete"> | Date | string
    status?: BoolWithAggregatesFilter<"Lembrete"> | boolean
    usuarioIdEnviou?: UuidWithAggregatesFilter<"Lembrete"> | string
    listaDeCompraId?: UuidWithAggregatesFilter<"Lembrete"> | string
    veiculoId?: UuidWithAggregatesFilter<"Lembrete"> | string
  }

  export type TarefaWhereInput = {
    AND?: TarefaWhereInput | TarefaWhereInput[]
    OR?: TarefaWhereInput[]
    NOT?: TarefaWhereInput | TarefaWhereInput[]
    id?: UuidFilter<"Tarefa"> | string
    descricao?: StringFilter<"Tarefa"> | string
    status?: BoolFilter<"Tarefa"> | boolean
    usuarioId?: UuidFilter<"Tarefa"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    atividades?: AtividadeListRelationFilter
  }

  export type TarefaOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    usuarioId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    atividades?: AtividadeOrderByRelationAggregateInput
  }

  export type TarefaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TarefaWhereInput | TarefaWhereInput[]
    OR?: TarefaWhereInput[]
    NOT?: TarefaWhereInput | TarefaWhereInput[]
    descricao?: StringFilter<"Tarefa"> | string
    status?: BoolFilter<"Tarefa"> | boolean
    usuarioId?: UuidFilter<"Tarefa"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    atividades?: AtividadeListRelationFilter
  }, "id">

  export type TarefaOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    usuarioId?: SortOrder
    _count?: TarefaCountOrderByAggregateInput
    _max?: TarefaMaxOrderByAggregateInput
    _min?: TarefaMinOrderByAggregateInput
  }

  export type TarefaScalarWhereWithAggregatesInput = {
    AND?: TarefaScalarWhereWithAggregatesInput | TarefaScalarWhereWithAggregatesInput[]
    OR?: TarefaScalarWhereWithAggregatesInput[]
    NOT?: TarefaScalarWhereWithAggregatesInput | TarefaScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Tarefa"> | string
    descricao?: StringWithAggregatesFilter<"Tarefa"> | string
    status?: BoolWithAggregatesFilter<"Tarefa"> | boolean
    usuarioId?: UuidWithAggregatesFilter<"Tarefa"> | string
  }

  export type AtividadeWhereInput = {
    AND?: AtividadeWhereInput | AtividadeWhereInput[]
    OR?: AtividadeWhereInput[]
    NOT?: AtividadeWhereInput | AtividadeWhereInput[]
    id?: UuidFilter<"Atividade"> | string
    tipo?: EnumTipoAtividadeFilter<"Atividade"> | $Enums.TipoAtividade
    acao?: EnumAcaoAtividadeFilter<"Atividade"> | $Enums.AcaoAtividade
    datHora?: DateTimeFilter<"Atividade"> | Date | string
    tarefaId?: UuidNullableFilter<"Atividade"> | string | null
    listaDeCompraId?: UuidNullableFilter<"Atividade"> | string | null
    lembreteId?: UuidNullableFilter<"Atividade"> | string | null
    veiculoId?: UuidNullableFilter<"Atividade"> | string | null
    tarefa?: XOR<TarefaNullableScalarRelationFilter, TarefaWhereInput> | null
    lista?: XOR<ListaDeCompraNullableScalarRelationFilter, ListaDeCompraWhereInput> | null
    lembrete?: XOR<LembreteNullableScalarRelationFilter, LembreteWhereInput> | null
    veiculo?: XOR<VeiculoNullableScalarRelationFilter, VeiculoWhereInput> | null
  }

  export type AtividadeOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    acao?: SortOrder
    datHora?: SortOrder
    tarefaId?: SortOrderInput | SortOrder
    listaDeCompraId?: SortOrderInput | SortOrder
    lembreteId?: SortOrderInput | SortOrder
    veiculoId?: SortOrderInput | SortOrder
    tarefa?: TarefaOrderByWithRelationInput
    lista?: ListaDeCompraOrderByWithRelationInput
    lembrete?: LembreteOrderByWithRelationInput
    veiculo?: VeiculoOrderByWithRelationInput
  }

  export type AtividadeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AtividadeWhereInput | AtividadeWhereInput[]
    OR?: AtividadeWhereInput[]
    NOT?: AtividadeWhereInput | AtividadeWhereInput[]
    tipo?: EnumTipoAtividadeFilter<"Atividade"> | $Enums.TipoAtividade
    acao?: EnumAcaoAtividadeFilter<"Atividade"> | $Enums.AcaoAtividade
    datHora?: DateTimeFilter<"Atividade"> | Date | string
    tarefaId?: UuidNullableFilter<"Atividade"> | string | null
    listaDeCompraId?: UuidNullableFilter<"Atividade"> | string | null
    lembreteId?: UuidNullableFilter<"Atividade"> | string | null
    veiculoId?: UuidNullableFilter<"Atividade"> | string | null
    tarefa?: XOR<TarefaNullableScalarRelationFilter, TarefaWhereInput> | null
    lista?: XOR<ListaDeCompraNullableScalarRelationFilter, ListaDeCompraWhereInput> | null
    lembrete?: XOR<LembreteNullableScalarRelationFilter, LembreteWhereInput> | null
    veiculo?: XOR<VeiculoNullableScalarRelationFilter, VeiculoWhereInput> | null
  }, "id">

  export type AtividadeOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    acao?: SortOrder
    datHora?: SortOrder
    tarefaId?: SortOrderInput | SortOrder
    listaDeCompraId?: SortOrderInput | SortOrder
    lembreteId?: SortOrderInput | SortOrder
    veiculoId?: SortOrderInput | SortOrder
    _count?: AtividadeCountOrderByAggregateInput
    _max?: AtividadeMaxOrderByAggregateInput
    _min?: AtividadeMinOrderByAggregateInput
  }

  export type AtividadeScalarWhereWithAggregatesInput = {
    AND?: AtividadeScalarWhereWithAggregatesInput | AtividadeScalarWhereWithAggregatesInput[]
    OR?: AtividadeScalarWhereWithAggregatesInput[]
    NOT?: AtividadeScalarWhereWithAggregatesInput | AtividadeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Atividade"> | string
    tipo?: EnumTipoAtividadeWithAggregatesFilter<"Atividade"> | $Enums.TipoAtividade
    acao?: EnumAcaoAtividadeWithAggregatesFilter<"Atividade"> | $Enums.AcaoAtividade
    datHora?: DateTimeWithAggregatesFilter<"Atividade"> | Date | string
    tarefaId?: UuidNullableWithAggregatesFilter<"Atividade"> | string | null
    listaDeCompraId?: UuidNullableWithAggregatesFilter<"Atividade"> | string | null
    lembreteId?: UuidNullableWithAggregatesFilter<"Atividade"> | string | null
    veiculoId?: UuidNullableWithAggregatesFilter<"Atividade"> | string | null
  }

  export type UsuarioCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    familias?: familia_usuariosCreateNestedManyWithoutUsuarioInput
    lembretesEnviados?: LembreteCreateNestedManyWithoutUsuarioEnviouInput
    listasEnviadas?: ListaDeCompraCreateNestedManyWithoutUsuarioEnviouInput
    veiculos?: VeiculoCreateNestedManyWithoutUsuarioInput
    tarefas?: TarefaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    familias?: familia_usuariosUncheckedCreateNestedManyWithoutUsuarioInput
    lembretesEnviados?: LembreteUncheckedCreateNestedManyWithoutUsuarioEnviouInput
    listasEnviadas?: ListaDeCompraUncheckedCreateNestedManyWithoutUsuarioEnviouInput
    veiculos?: VeiculoUncheckedCreateNestedManyWithoutUsuarioInput
    tarefas?: TarefaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    familias?: familia_usuariosUpdateManyWithoutUsuarioNestedInput
    lembretesEnviados?: LembreteUpdateManyWithoutUsuarioEnviouNestedInput
    listasEnviadas?: ListaDeCompraUpdateManyWithoutUsuarioEnviouNestedInput
    veiculos?: VeiculoUpdateManyWithoutUsuarioNestedInput
    tarefas?: TarefaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    familias?: familia_usuariosUncheckedUpdateManyWithoutUsuarioNestedInput
    lembretesEnviados?: LembreteUncheckedUpdateManyWithoutUsuarioEnviouNestedInput
    listasEnviadas?: ListaDeCompraUncheckedUpdateManyWithoutUsuarioEnviouNestedInput
    veiculos?: VeiculoUncheckedUpdateManyWithoutUsuarioNestedInput
    tarefas?: TarefaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type FamiliaCreateInput = {
    id?: string
    nome: string
    usuarioId: string
    usuarios?: familia_usuariosCreateNestedManyWithoutFamiliaInput
  }

  export type FamiliaUncheckedCreateInput = {
    id?: string
    nome: string
    usuarioId: string
    usuarios?: familia_usuariosUncheckedCreateNestedManyWithoutFamiliaInput
  }

  export type FamiliaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    usuarios?: familia_usuariosUpdateManyWithoutFamiliaNestedInput
  }

  export type FamiliaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    usuarios?: familia_usuariosUncheckedUpdateManyWithoutFamiliaNestedInput
  }

  export type FamiliaCreateManyInput = {
    id?: string
    nome: string
    usuarioId: string
  }

  export type FamiliaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type FamiliaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type familia_usuariosCreateInput = {
    rotulo?: $Enums.Rotulo
    familia: FamiliaCreateNestedOneWithoutUsuariosInput
    usuario: UsuarioCreateNestedOneWithoutFamiliasInput
  }

  export type familia_usuariosUncheckedCreateInput = {
    id_usuario: string
    id_familia: string
    rotulo?: $Enums.Rotulo
  }

  export type familia_usuariosUpdateInput = {
    rotulo?: EnumRotuloFieldUpdateOperationsInput | $Enums.Rotulo
    familia?: FamiliaUpdateOneRequiredWithoutUsuariosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutFamiliasNestedInput
  }

  export type familia_usuariosUncheckedUpdateInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    id_familia?: StringFieldUpdateOperationsInput | string
    rotulo?: EnumRotuloFieldUpdateOperationsInput | $Enums.Rotulo
  }

  export type familia_usuariosCreateManyInput = {
    id_usuario: string
    id_familia: string
    rotulo?: $Enums.Rotulo
  }

  export type familia_usuariosUpdateManyMutationInput = {
    rotulo?: EnumRotuloFieldUpdateOperationsInput | $Enums.Rotulo
  }

  export type familia_usuariosUncheckedUpdateManyInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    id_familia?: StringFieldUpdateOperationsInput | string
    rotulo?: EnumRotuloFieldUpdateOperationsInput | $Enums.Rotulo
  }

  export type ListaDeCompraCreateInput = {
    id?: string
    tipo: string
    status?: boolean
    usuarioEnviou: UsuarioCreateNestedOneWithoutListasEnviadasInput
    itens?: ItemListaDeCompraCreateNestedManyWithoutListaInput
    lembretes?: LembreteCreateNestedManyWithoutListaDeCompraInput
    atividades?: AtividadeCreateNestedManyWithoutListaInput
  }

  export type ListaDeCompraUncheckedCreateInput = {
    id?: string
    tipo: string
    usuarioIdEnviou: string
    status?: boolean
    itens?: ItemListaDeCompraUncheckedCreateNestedManyWithoutListaInput
    lembretes?: LembreteUncheckedCreateNestedManyWithoutListaDeCompraInput
    atividades?: AtividadeUncheckedCreateNestedManyWithoutListaInput
  }

  export type ListaDeCompraUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    usuarioEnviou?: UsuarioUpdateOneRequiredWithoutListasEnviadasNestedInput
    itens?: ItemListaDeCompraUpdateManyWithoutListaNestedInput
    lembretes?: LembreteUpdateManyWithoutListaDeCompraNestedInput
    atividades?: AtividadeUpdateManyWithoutListaNestedInput
  }

  export type ListaDeCompraUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    usuarioIdEnviou?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    itens?: ItemListaDeCompraUncheckedUpdateManyWithoutListaNestedInput
    lembretes?: LembreteUncheckedUpdateManyWithoutListaDeCompraNestedInput
    atividades?: AtividadeUncheckedUpdateManyWithoutListaNestedInput
  }

  export type ListaDeCompraCreateManyInput = {
    id?: string
    tipo: string
    usuarioIdEnviou: string
    status?: boolean
  }

  export type ListaDeCompraUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ListaDeCompraUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    usuarioIdEnviou?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ItemListaDeCompraCreateInput = {
    id?: string
    descricao: string
    quantidade: number
    comprado?: boolean
    lista: ListaDeCompraCreateNestedOneWithoutItensInput
  }

  export type ItemListaDeCompraUncheckedCreateInput = {
    id?: string
    descricao: string
    quantidade: number
    comprado?: boolean
    listaId: string
  }

  export type ItemListaDeCompraUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    comprado?: BoolFieldUpdateOperationsInput | boolean
    lista?: ListaDeCompraUpdateOneRequiredWithoutItensNestedInput
  }

  export type ItemListaDeCompraUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    comprado?: BoolFieldUpdateOperationsInput | boolean
    listaId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemListaDeCompraCreateManyInput = {
    id?: string
    descricao: string
    quantidade: number
    comprado?: boolean
    listaId: string
  }

  export type ItemListaDeCompraUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    comprado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ItemListaDeCompraUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    comprado?: BoolFieldUpdateOperationsInput | boolean
    listaId?: StringFieldUpdateOperationsInput | string
  }

  export type VeiculoCreateInput = {
    id?: string
    marca: string
    modelo: string
    ano: number
    placa: string
    usuario: UsuarioCreateNestedOneWithoutVeiculosInput
    Lembrete?: LembreteCreateNestedManyWithoutVeiculoInput
    manutencoes?: RegistroDeManutencaoCreateNestedManyWithoutVeiculoInput
    atividades?: AtividadeCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculoUncheckedCreateInput = {
    id?: string
    marca: string
    modelo: string
    ano: number
    placa: string
    usuarioId: string
    Lembrete?: LembreteUncheckedCreateNestedManyWithoutVeiculoInput
    manutencoes?: RegistroDeManutencaoUncheckedCreateNestedManyWithoutVeiculoInput
    atividades?: AtividadeUncheckedCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutVeiculosNestedInput
    Lembrete?: LembreteUpdateManyWithoutVeiculoNestedInput
    manutencoes?: RegistroDeManutencaoUpdateManyWithoutVeiculoNestedInput
    atividades?: AtividadeUpdateManyWithoutVeiculoNestedInput
  }

  export type VeiculoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    Lembrete?: LembreteUncheckedUpdateManyWithoutVeiculoNestedInput
    manutencoes?: RegistroDeManutencaoUncheckedUpdateManyWithoutVeiculoNestedInput
    atividades?: AtividadeUncheckedUpdateManyWithoutVeiculoNestedInput
  }

  export type VeiculoCreateManyInput = {
    id?: string
    marca: string
    modelo: string
    ano: number
    placa: string
    usuarioId: string
  }

  export type VeiculoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
  }

  export type VeiculoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type RegistroDeManutencaoCreateInput = {
    id?: string
    descricao?: string | null
    data: Date | string
    valor?: number | null
    veiculo: VeiculoCreateNestedOneWithoutManutencoesInput
  }

  export type RegistroDeManutencaoUncheckedCreateInput = {
    id?: string
    descricao?: string | null
    data: Date | string
    valor?: number | null
    veiculoId: string
  }

  export type RegistroDeManutencaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    veiculo?: VeiculoUpdateOneRequiredWithoutManutencoesNestedInput
  }

  export type RegistroDeManutencaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    veiculoId?: StringFieldUpdateOperationsInput | string
  }

  export type RegistroDeManutencaoCreateManyInput = {
    id?: string
    descricao?: string | null
    data: Date | string
    valor?: number | null
    veiculoId: string
  }

  export type RegistroDeManutencaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type RegistroDeManutencaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    veiculoId?: StringFieldUpdateOperationsInput | string
  }

  export type LembreteCreateInput = {
    id?: string
    descricao: string
    dataHora?: Date | string
    status?: boolean
    listaDeCompra: ListaDeCompraCreateNestedOneWithoutLembretesInput
    usuarioEnviou: UsuarioCreateNestedOneWithoutLembretesEnviadosInput
    veiculo: VeiculoCreateNestedOneWithoutLembreteInput
    atividades?: AtividadeCreateNestedManyWithoutLembreteInput
  }

  export type LembreteUncheckedCreateInput = {
    id?: string
    descricao: string
    dataHora?: Date | string
    status?: boolean
    usuarioIdEnviou: string
    listaDeCompraId: string
    veiculoId: string
    atividades?: AtividadeUncheckedCreateNestedManyWithoutLembreteInput
  }

  export type LembreteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    listaDeCompra?: ListaDeCompraUpdateOneRequiredWithoutLembretesNestedInput
    usuarioEnviou?: UsuarioUpdateOneRequiredWithoutLembretesEnviadosNestedInput
    veiculo?: VeiculoUpdateOneRequiredWithoutLembreteNestedInput
    atividades?: AtividadeUpdateManyWithoutLembreteNestedInput
  }

  export type LembreteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    usuarioIdEnviou?: StringFieldUpdateOperationsInput | string
    listaDeCompraId?: StringFieldUpdateOperationsInput | string
    veiculoId?: StringFieldUpdateOperationsInput | string
    atividades?: AtividadeUncheckedUpdateManyWithoutLembreteNestedInput
  }

  export type LembreteCreateManyInput = {
    id?: string
    descricao: string
    dataHora?: Date | string
    status?: boolean
    usuarioIdEnviou: string
    listaDeCompraId: string
    veiculoId: string
  }

  export type LembreteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LembreteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    usuarioIdEnviou?: StringFieldUpdateOperationsInput | string
    listaDeCompraId?: StringFieldUpdateOperationsInput | string
    veiculoId?: StringFieldUpdateOperationsInput | string
  }

  export type TarefaCreateInput = {
    id?: string
    descricao: string
    status?: boolean
    usuario: UsuarioCreateNestedOneWithoutTarefasInput
    atividades?: AtividadeCreateNestedManyWithoutTarefaInput
  }

  export type TarefaUncheckedCreateInput = {
    id?: string
    descricao: string
    status?: boolean
    usuarioId: string
    atividades?: AtividadeUncheckedCreateNestedManyWithoutTarefaInput
  }

  export type TarefaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    usuario?: UsuarioUpdateOneRequiredWithoutTarefasNestedInput
    atividades?: AtividadeUpdateManyWithoutTarefaNestedInput
  }

  export type TarefaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    usuarioId?: StringFieldUpdateOperationsInput | string
    atividades?: AtividadeUncheckedUpdateManyWithoutTarefaNestedInput
  }

  export type TarefaCreateManyInput = {
    id?: string
    descricao: string
    status?: boolean
    usuarioId: string
  }

  export type TarefaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TarefaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type AtividadeCreateInput = {
    id?: string
    tipo: $Enums.TipoAtividade
    acao: $Enums.AcaoAtividade
    datHora?: Date | string
    tarefa?: TarefaCreateNestedOneWithoutAtividadesInput
    lista?: ListaDeCompraCreateNestedOneWithoutAtividadesInput
    lembrete?: LembreteCreateNestedOneWithoutAtividadesInput
    veiculo?: VeiculoCreateNestedOneWithoutAtividadesInput
  }

  export type AtividadeUncheckedCreateInput = {
    id?: string
    tipo: $Enums.TipoAtividade
    acao: $Enums.AcaoAtividade
    datHora?: Date | string
    tarefaId?: string | null
    listaDeCompraId?: string | null
    lembreteId?: string | null
    veiculoId?: string | null
  }

  export type AtividadeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoAtividadeFieldUpdateOperationsInput | $Enums.TipoAtividade
    acao?: EnumAcaoAtividadeFieldUpdateOperationsInput | $Enums.AcaoAtividade
    datHora?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefa?: TarefaUpdateOneWithoutAtividadesNestedInput
    lista?: ListaDeCompraUpdateOneWithoutAtividadesNestedInput
    lembrete?: LembreteUpdateOneWithoutAtividadesNestedInput
    veiculo?: VeiculoUpdateOneWithoutAtividadesNestedInput
  }

  export type AtividadeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoAtividadeFieldUpdateOperationsInput | $Enums.TipoAtividade
    acao?: EnumAcaoAtividadeFieldUpdateOperationsInput | $Enums.AcaoAtividade
    datHora?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefaId?: NullableStringFieldUpdateOperationsInput | string | null
    listaDeCompraId?: NullableStringFieldUpdateOperationsInput | string | null
    lembreteId?: NullableStringFieldUpdateOperationsInput | string | null
    veiculoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AtividadeCreateManyInput = {
    id?: string
    tipo: $Enums.TipoAtividade
    acao: $Enums.AcaoAtividade
    datHora?: Date | string
    tarefaId?: string | null
    listaDeCompraId?: string | null
    lembreteId?: string | null
    veiculoId?: string | null
  }

  export type AtividadeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoAtividadeFieldUpdateOperationsInput | $Enums.TipoAtividade
    acao?: EnumAcaoAtividadeFieldUpdateOperationsInput | $Enums.AcaoAtividade
    datHora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtividadeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoAtividadeFieldUpdateOperationsInput | $Enums.TipoAtividade
    acao?: EnumAcaoAtividadeFieldUpdateOperationsInput | $Enums.AcaoAtividade
    datHora?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefaId?: NullableStringFieldUpdateOperationsInput | string | null
    listaDeCompraId?: NullableStringFieldUpdateOperationsInput | string | null
    lembreteId?: NullableStringFieldUpdateOperationsInput | string | null
    veiculoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type Familia_usuariosListRelationFilter = {
    every?: familia_usuariosWhereInput
    some?: familia_usuariosWhereInput
    none?: familia_usuariosWhereInput
  }

  export type LembreteListRelationFilter = {
    every?: LembreteWhereInput
    some?: LembreteWhereInput
    none?: LembreteWhereInput
  }

  export type ListaDeCompraListRelationFilter = {
    every?: ListaDeCompraWhereInput
    some?: ListaDeCompraWhereInput
    none?: ListaDeCompraWhereInput
  }

  export type VeiculoListRelationFilter = {
    every?: VeiculoWhereInput
    some?: VeiculoWhereInput
    none?: VeiculoWhereInput
  }

  export type TarefaListRelationFilter = {
    every?: TarefaWhereInput
    some?: TarefaWhereInput
    none?: TarefaWhereInput
  }

  export type familia_usuariosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LembreteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListaDeCompraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VeiculoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TarefaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type FamiliaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    usuarioId?: SortOrder
  }

  export type FamiliaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    usuarioId?: SortOrder
  }

  export type FamiliaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    usuarioId?: SortOrder
  }

  export type EnumRotuloFilter<$PrismaModel = never> = {
    equals?: $Enums.Rotulo | EnumRotuloFieldRefInput<$PrismaModel>
    in?: $Enums.Rotulo[] | ListEnumRotuloFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rotulo[] | ListEnumRotuloFieldRefInput<$PrismaModel>
    not?: NestedEnumRotuloFilter<$PrismaModel> | $Enums.Rotulo
  }

  export type FamiliaScalarRelationFilter = {
    is?: FamiliaWhereInput
    isNot?: FamiliaWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type familia_usuariosId_usuarioId_familiaCompoundUniqueInput = {
    id_usuario: string
    id_familia: string
  }

  export type familia_usuariosCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_familia?: SortOrder
    rotulo?: SortOrder
  }

  export type familia_usuariosMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_familia?: SortOrder
    rotulo?: SortOrder
  }

  export type familia_usuariosMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_familia?: SortOrder
    rotulo?: SortOrder
  }

  export type EnumRotuloWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rotulo | EnumRotuloFieldRefInput<$PrismaModel>
    in?: $Enums.Rotulo[] | ListEnumRotuloFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rotulo[] | ListEnumRotuloFieldRefInput<$PrismaModel>
    not?: NestedEnumRotuloWithAggregatesFilter<$PrismaModel> | $Enums.Rotulo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRotuloFilter<$PrismaModel>
    _max?: NestedEnumRotuloFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ItemListaDeCompraListRelationFilter = {
    every?: ItemListaDeCompraWhereInput
    some?: ItemListaDeCompraWhereInput
    none?: ItemListaDeCompraWhereInput
  }

  export type AtividadeListRelationFilter = {
    every?: AtividadeWhereInput
    some?: AtividadeWhereInput
    none?: AtividadeWhereInput
  }

  export type ItemListaDeCompraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AtividadeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListaDeCompraCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    usuarioIdEnviou?: SortOrder
    status?: SortOrder
  }

  export type ListaDeCompraMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    usuarioIdEnviou?: SortOrder
    status?: SortOrder
  }

  export type ListaDeCompraMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    usuarioIdEnviou?: SortOrder
    status?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ListaDeCompraScalarRelationFilter = {
    is?: ListaDeCompraWhereInput
    isNot?: ListaDeCompraWhereInput
  }

  export type ItemListaDeCompraCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    quantidade?: SortOrder
    comprado?: SortOrder
    listaId?: SortOrder
  }

  export type ItemListaDeCompraAvgOrderByAggregateInput = {
    quantidade?: SortOrder
  }

  export type ItemListaDeCompraMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    quantidade?: SortOrder
    comprado?: SortOrder
    listaId?: SortOrder
  }

  export type ItemListaDeCompraMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    quantidade?: SortOrder
    comprado?: SortOrder
    listaId?: SortOrder
  }

  export type ItemListaDeCompraSumOrderByAggregateInput = {
    quantidade?: SortOrder
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

  export type RegistroDeManutencaoListRelationFilter = {
    every?: RegistroDeManutencaoWhereInput
    some?: RegistroDeManutencaoWhereInput
    none?: RegistroDeManutencaoWhereInput
  }

  export type RegistroDeManutencaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VeiculoCountOrderByAggregateInput = {
    id?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    ano?: SortOrder
    placa?: SortOrder
    usuarioId?: SortOrder
  }

  export type VeiculoAvgOrderByAggregateInput = {
    ano?: SortOrder
  }

  export type VeiculoMaxOrderByAggregateInput = {
    id?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    ano?: SortOrder
    placa?: SortOrder
    usuarioId?: SortOrder
  }

  export type VeiculoMinOrderByAggregateInput = {
    id?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    ano?: SortOrder
    placa?: SortOrder
    usuarioId?: SortOrder
  }

  export type VeiculoSumOrderByAggregateInput = {
    ano?: SortOrder
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type VeiculoScalarRelationFilter = {
    is?: VeiculoWhereInput
    isNot?: VeiculoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RegistroDeManutencaoCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    valor?: SortOrder
    veiculoId?: SortOrder
  }

  export type RegistroDeManutencaoAvgOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type RegistroDeManutencaoMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    valor?: SortOrder
    veiculoId?: SortOrder
  }

  export type RegistroDeManutencaoMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    valor?: SortOrder
    veiculoId?: SortOrder
  }

  export type RegistroDeManutencaoSumOrderByAggregateInput = {
    valor?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type LembreteCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    dataHora?: SortOrder
    status?: SortOrder
    usuarioIdEnviou?: SortOrder
    listaDeCompraId?: SortOrder
    veiculoId?: SortOrder
  }

  export type LembreteMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    dataHora?: SortOrder
    status?: SortOrder
    usuarioIdEnviou?: SortOrder
    listaDeCompraId?: SortOrder
    veiculoId?: SortOrder
  }

  export type LembreteMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    dataHora?: SortOrder
    status?: SortOrder
    usuarioIdEnviou?: SortOrder
    listaDeCompraId?: SortOrder
    veiculoId?: SortOrder
  }

  export type TarefaCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    usuarioId?: SortOrder
  }

  export type TarefaMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    usuarioId?: SortOrder
  }

  export type TarefaMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    usuarioId?: SortOrder
  }

  export type EnumTipoAtividadeFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAtividade | EnumTipoAtividadeFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAtividade[] | ListEnumTipoAtividadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoAtividade[] | ListEnumTipoAtividadeFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoAtividadeFilter<$PrismaModel> | $Enums.TipoAtividade
  }

  export type EnumAcaoAtividadeFilter<$PrismaModel = never> = {
    equals?: $Enums.AcaoAtividade | EnumAcaoAtividadeFieldRefInput<$PrismaModel>
    in?: $Enums.AcaoAtividade[] | ListEnumAcaoAtividadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AcaoAtividade[] | ListEnumAcaoAtividadeFieldRefInput<$PrismaModel>
    not?: NestedEnumAcaoAtividadeFilter<$PrismaModel> | $Enums.AcaoAtividade
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type TarefaNullableScalarRelationFilter = {
    is?: TarefaWhereInput | null
    isNot?: TarefaWhereInput | null
  }

  export type ListaDeCompraNullableScalarRelationFilter = {
    is?: ListaDeCompraWhereInput | null
    isNot?: ListaDeCompraWhereInput | null
  }

  export type LembreteNullableScalarRelationFilter = {
    is?: LembreteWhereInput | null
    isNot?: LembreteWhereInput | null
  }

  export type VeiculoNullableScalarRelationFilter = {
    is?: VeiculoWhereInput | null
    isNot?: VeiculoWhereInput | null
  }

  export type AtividadeCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    acao?: SortOrder
    datHora?: SortOrder
    tarefaId?: SortOrder
    listaDeCompraId?: SortOrder
    lembreteId?: SortOrder
    veiculoId?: SortOrder
  }

  export type AtividadeMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    acao?: SortOrder
    datHora?: SortOrder
    tarefaId?: SortOrder
    listaDeCompraId?: SortOrder
    lembreteId?: SortOrder
    veiculoId?: SortOrder
  }

  export type AtividadeMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    acao?: SortOrder
    datHora?: SortOrder
    tarefaId?: SortOrder
    listaDeCompraId?: SortOrder
    lembreteId?: SortOrder
    veiculoId?: SortOrder
  }

  export type EnumTipoAtividadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAtividade | EnumTipoAtividadeFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAtividade[] | ListEnumTipoAtividadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoAtividade[] | ListEnumTipoAtividadeFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoAtividadeWithAggregatesFilter<$PrismaModel> | $Enums.TipoAtividade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoAtividadeFilter<$PrismaModel>
    _max?: NestedEnumTipoAtividadeFilter<$PrismaModel>
  }

  export type EnumAcaoAtividadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AcaoAtividade | EnumAcaoAtividadeFieldRefInput<$PrismaModel>
    in?: $Enums.AcaoAtividade[] | ListEnumAcaoAtividadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AcaoAtividade[] | ListEnumAcaoAtividadeFieldRefInput<$PrismaModel>
    not?: NestedEnumAcaoAtividadeWithAggregatesFilter<$PrismaModel> | $Enums.AcaoAtividade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAcaoAtividadeFilter<$PrismaModel>
    _max?: NestedEnumAcaoAtividadeFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type familia_usuariosCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<familia_usuariosCreateWithoutUsuarioInput, familia_usuariosUncheckedCreateWithoutUsuarioInput> | familia_usuariosCreateWithoutUsuarioInput[] | familia_usuariosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: familia_usuariosCreateOrConnectWithoutUsuarioInput | familia_usuariosCreateOrConnectWithoutUsuarioInput[]
    createMany?: familia_usuariosCreateManyUsuarioInputEnvelope
    connect?: familia_usuariosWhereUniqueInput | familia_usuariosWhereUniqueInput[]
  }

  export type LembreteCreateNestedManyWithoutUsuarioEnviouInput = {
    create?: XOR<LembreteCreateWithoutUsuarioEnviouInput, LembreteUncheckedCreateWithoutUsuarioEnviouInput> | LembreteCreateWithoutUsuarioEnviouInput[] | LembreteUncheckedCreateWithoutUsuarioEnviouInput[]
    connectOrCreate?: LembreteCreateOrConnectWithoutUsuarioEnviouInput | LembreteCreateOrConnectWithoutUsuarioEnviouInput[]
    createMany?: LembreteCreateManyUsuarioEnviouInputEnvelope
    connect?: LembreteWhereUniqueInput | LembreteWhereUniqueInput[]
  }

  export type ListaDeCompraCreateNestedManyWithoutUsuarioEnviouInput = {
    create?: XOR<ListaDeCompraCreateWithoutUsuarioEnviouInput, ListaDeCompraUncheckedCreateWithoutUsuarioEnviouInput> | ListaDeCompraCreateWithoutUsuarioEnviouInput[] | ListaDeCompraUncheckedCreateWithoutUsuarioEnviouInput[]
    connectOrCreate?: ListaDeCompraCreateOrConnectWithoutUsuarioEnviouInput | ListaDeCompraCreateOrConnectWithoutUsuarioEnviouInput[]
    createMany?: ListaDeCompraCreateManyUsuarioEnviouInputEnvelope
    connect?: ListaDeCompraWhereUniqueInput | ListaDeCompraWhereUniqueInput[]
  }

  export type VeiculoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<VeiculoCreateWithoutUsuarioInput, VeiculoUncheckedCreateWithoutUsuarioInput> | VeiculoCreateWithoutUsuarioInput[] | VeiculoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VeiculoCreateOrConnectWithoutUsuarioInput | VeiculoCreateOrConnectWithoutUsuarioInput[]
    createMany?: VeiculoCreateManyUsuarioInputEnvelope
    connect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
  }

  export type TarefaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<TarefaCreateWithoutUsuarioInput, TarefaUncheckedCreateWithoutUsuarioInput> | TarefaCreateWithoutUsuarioInput[] | TarefaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TarefaCreateOrConnectWithoutUsuarioInput | TarefaCreateOrConnectWithoutUsuarioInput[]
    createMany?: TarefaCreateManyUsuarioInputEnvelope
    connect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
  }

  export type familia_usuariosUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<familia_usuariosCreateWithoutUsuarioInput, familia_usuariosUncheckedCreateWithoutUsuarioInput> | familia_usuariosCreateWithoutUsuarioInput[] | familia_usuariosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: familia_usuariosCreateOrConnectWithoutUsuarioInput | familia_usuariosCreateOrConnectWithoutUsuarioInput[]
    createMany?: familia_usuariosCreateManyUsuarioInputEnvelope
    connect?: familia_usuariosWhereUniqueInput | familia_usuariosWhereUniqueInput[]
  }

  export type LembreteUncheckedCreateNestedManyWithoutUsuarioEnviouInput = {
    create?: XOR<LembreteCreateWithoutUsuarioEnviouInput, LembreteUncheckedCreateWithoutUsuarioEnviouInput> | LembreteCreateWithoutUsuarioEnviouInput[] | LembreteUncheckedCreateWithoutUsuarioEnviouInput[]
    connectOrCreate?: LembreteCreateOrConnectWithoutUsuarioEnviouInput | LembreteCreateOrConnectWithoutUsuarioEnviouInput[]
    createMany?: LembreteCreateManyUsuarioEnviouInputEnvelope
    connect?: LembreteWhereUniqueInput | LembreteWhereUniqueInput[]
  }

  export type ListaDeCompraUncheckedCreateNestedManyWithoutUsuarioEnviouInput = {
    create?: XOR<ListaDeCompraCreateWithoutUsuarioEnviouInput, ListaDeCompraUncheckedCreateWithoutUsuarioEnviouInput> | ListaDeCompraCreateWithoutUsuarioEnviouInput[] | ListaDeCompraUncheckedCreateWithoutUsuarioEnviouInput[]
    connectOrCreate?: ListaDeCompraCreateOrConnectWithoutUsuarioEnviouInput | ListaDeCompraCreateOrConnectWithoutUsuarioEnviouInput[]
    createMany?: ListaDeCompraCreateManyUsuarioEnviouInputEnvelope
    connect?: ListaDeCompraWhereUniqueInput | ListaDeCompraWhereUniqueInput[]
  }

  export type VeiculoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<VeiculoCreateWithoutUsuarioInput, VeiculoUncheckedCreateWithoutUsuarioInput> | VeiculoCreateWithoutUsuarioInput[] | VeiculoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VeiculoCreateOrConnectWithoutUsuarioInput | VeiculoCreateOrConnectWithoutUsuarioInput[]
    createMany?: VeiculoCreateManyUsuarioInputEnvelope
    connect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
  }

  export type TarefaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<TarefaCreateWithoutUsuarioInput, TarefaUncheckedCreateWithoutUsuarioInput> | TarefaCreateWithoutUsuarioInput[] | TarefaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TarefaCreateOrConnectWithoutUsuarioInput | TarefaCreateOrConnectWithoutUsuarioInput[]
    createMany?: TarefaCreateManyUsuarioInputEnvelope
    connect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type familia_usuariosUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<familia_usuariosCreateWithoutUsuarioInput, familia_usuariosUncheckedCreateWithoutUsuarioInput> | familia_usuariosCreateWithoutUsuarioInput[] | familia_usuariosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: familia_usuariosCreateOrConnectWithoutUsuarioInput | familia_usuariosCreateOrConnectWithoutUsuarioInput[]
    upsert?: familia_usuariosUpsertWithWhereUniqueWithoutUsuarioInput | familia_usuariosUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: familia_usuariosCreateManyUsuarioInputEnvelope
    set?: familia_usuariosWhereUniqueInput | familia_usuariosWhereUniqueInput[]
    disconnect?: familia_usuariosWhereUniqueInput | familia_usuariosWhereUniqueInput[]
    delete?: familia_usuariosWhereUniqueInput | familia_usuariosWhereUniqueInput[]
    connect?: familia_usuariosWhereUniqueInput | familia_usuariosWhereUniqueInput[]
    update?: familia_usuariosUpdateWithWhereUniqueWithoutUsuarioInput | familia_usuariosUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: familia_usuariosUpdateManyWithWhereWithoutUsuarioInput | familia_usuariosUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: familia_usuariosScalarWhereInput | familia_usuariosScalarWhereInput[]
  }

  export type LembreteUpdateManyWithoutUsuarioEnviouNestedInput = {
    create?: XOR<LembreteCreateWithoutUsuarioEnviouInput, LembreteUncheckedCreateWithoutUsuarioEnviouInput> | LembreteCreateWithoutUsuarioEnviouInput[] | LembreteUncheckedCreateWithoutUsuarioEnviouInput[]
    connectOrCreate?: LembreteCreateOrConnectWithoutUsuarioEnviouInput | LembreteCreateOrConnectWithoutUsuarioEnviouInput[]
    upsert?: LembreteUpsertWithWhereUniqueWithoutUsuarioEnviouInput | LembreteUpsertWithWhereUniqueWithoutUsuarioEnviouInput[]
    createMany?: LembreteCreateManyUsuarioEnviouInputEnvelope
    set?: LembreteWhereUniqueInput | LembreteWhereUniqueInput[]
    disconnect?: LembreteWhereUniqueInput | LembreteWhereUniqueInput[]
    delete?: LembreteWhereUniqueInput | LembreteWhereUniqueInput[]
    connect?: LembreteWhereUniqueInput | LembreteWhereUniqueInput[]
    update?: LembreteUpdateWithWhereUniqueWithoutUsuarioEnviouInput | LembreteUpdateWithWhereUniqueWithoutUsuarioEnviouInput[]
    updateMany?: LembreteUpdateManyWithWhereWithoutUsuarioEnviouInput | LembreteUpdateManyWithWhereWithoutUsuarioEnviouInput[]
    deleteMany?: LembreteScalarWhereInput | LembreteScalarWhereInput[]
  }

  export type ListaDeCompraUpdateManyWithoutUsuarioEnviouNestedInput = {
    create?: XOR<ListaDeCompraCreateWithoutUsuarioEnviouInput, ListaDeCompraUncheckedCreateWithoutUsuarioEnviouInput> | ListaDeCompraCreateWithoutUsuarioEnviouInput[] | ListaDeCompraUncheckedCreateWithoutUsuarioEnviouInput[]
    connectOrCreate?: ListaDeCompraCreateOrConnectWithoutUsuarioEnviouInput | ListaDeCompraCreateOrConnectWithoutUsuarioEnviouInput[]
    upsert?: ListaDeCompraUpsertWithWhereUniqueWithoutUsuarioEnviouInput | ListaDeCompraUpsertWithWhereUniqueWithoutUsuarioEnviouInput[]
    createMany?: ListaDeCompraCreateManyUsuarioEnviouInputEnvelope
    set?: ListaDeCompraWhereUniqueInput | ListaDeCompraWhereUniqueInput[]
    disconnect?: ListaDeCompraWhereUniqueInput | ListaDeCompraWhereUniqueInput[]
    delete?: ListaDeCompraWhereUniqueInput | ListaDeCompraWhereUniqueInput[]
    connect?: ListaDeCompraWhereUniqueInput | ListaDeCompraWhereUniqueInput[]
    update?: ListaDeCompraUpdateWithWhereUniqueWithoutUsuarioEnviouInput | ListaDeCompraUpdateWithWhereUniqueWithoutUsuarioEnviouInput[]
    updateMany?: ListaDeCompraUpdateManyWithWhereWithoutUsuarioEnviouInput | ListaDeCompraUpdateManyWithWhereWithoutUsuarioEnviouInput[]
    deleteMany?: ListaDeCompraScalarWhereInput | ListaDeCompraScalarWhereInput[]
  }

  export type VeiculoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<VeiculoCreateWithoutUsuarioInput, VeiculoUncheckedCreateWithoutUsuarioInput> | VeiculoCreateWithoutUsuarioInput[] | VeiculoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VeiculoCreateOrConnectWithoutUsuarioInput | VeiculoCreateOrConnectWithoutUsuarioInput[]
    upsert?: VeiculoUpsertWithWhereUniqueWithoutUsuarioInput | VeiculoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: VeiculoCreateManyUsuarioInputEnvelope
    set?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    disconnect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    delete?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    connect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    update?: VeiculoUpdateWithWhereUniqueWithoutUsuarioInput | VeiculoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: VeiculoUpdateManyWithWhereWithoutUsuarioInput | VeiculoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: VeiculoScalarWhereInput | VeiculoScalarWhereInput[]
  }

  export type TarefaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<TarefaCreateWithoutUsuarioInput, TarefaUncheckedCreateWithoutUsuarioInput> | TarefaCreateWithoutUsuarioInput[] | TarefaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TarefaCreateOrConnectWithoutUsuarioInput | TarefaCreateOrConnectWithoutUsuarioInput[]
    upsert?: TarefaUpsertWithWhereUniqueWithoutUsuarioInput | TarefaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: TarefaCreateManyUsuarioInputEnvelope
    set?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    disconnect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    delete?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    connect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    update?: TarefaUpdateWithWhereUniqueWithoutUsuarioInput | TarefaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: TarefaUpdateManyWithWhereWithoutUsuarioInput | TarefaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: TarefaScalarWhereInput | TarefaScalarWhereInput[]
  }

  export type familia_usuariosUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<familia_usuariosCreateWithoutUsuarioInput, familia_usuariosUncheckedCreateWithoutUsuarioInput> | familia_usuariosCreateWithoutUsuarioInput[] | familia_usuariosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: familia_usuariosCreateOrConnectWithoutUsuarioInput | familia_usuariosCreateOrConnectWithoutUsuarioInput[]
    upsert?: familia_usuariosUpsertWithWhereUniqueWithoutUsuarioInput | familia_usuariosUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: familia_usuariosCreateManyUsuarioInputEnvelope
    set?: familia_usuariosWhereUniqueInput | familia_usuariosWhereUniqueInput[]
    disconnect?: familia_usuariosWhereUniqueInput | familia_usuariosWhereUniqueInput[]
    delete?: familia_usuariosWhereUniqueInput | familia_usuariosWhereUniqueInput[]
    connect?: familia_usuariosWhereUniqueInput | familia_usuariosWhereUniqueInput[]
    update?: familia_usuariosUpdateWithWhereUniqueWithoutUsuarioInput | familia_usuariosUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: familia_usuariosUpdateManyWithWhereWithoutUsuarioInput | familia_usuariosUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: familia_usuariosScalarWhereInput | familia_usuariosScalarWhereInput[]
  }

  export type LembreteUncheckedUpdateManyWithoutUsuarioEnviouNestedInput = {
    create?: XOR<LembreteCreateWithoutUsuarioEnviouInput, LembreteUncheckedCreateWithoutUsuarioEnviouInput> | LembreteCreateWithoutUsuarioEnviouInput[] | LembreteUncheckedCreateWithoutUsuarioEnviouInput[]
    connectOrCreate?: LembreteCreateOrConnectWithoutUsuarioEnviouInput | LembreteCreateOrConnectWithoutUsuarioEnviouInput[]
    upsert?: LembreteUpsertWithWhereUniqueWithoutUsuarioEnviouInput | LembreteUpsertWithWhereUniqueWithoutUsuarioEnviouInput[]
    createMany?: LembreteCreateManyUsuarioEnviouInputEnvelope
    set?: LembreteWhereUniqueInput | LembreteWhereUniqueInput[]
    disconnect?: LembreteWhereUniqueInput | LembreteWhereUniqueInput[]
    delete?: LembreteWhereUniqueInput | LembreteWhereUniqueInput[]
    connect?: LembreteWhereUniqueInput | LembreteWhereUniqueInput[]
    update?: LembreteUpdateWithWhereUniqueWithoutUsuarioEnviouInput | LembreteUpdateWithWhereUniqueWithoutUsuarioEnviouInput[]
    updateMany?: LembreteUpdateManyWithWhereWithoutUsuarioEnviouInput | LembreteUpdateManyWithWhereWithoutUsuarioEnviouInput[]
    deleteMany?: LembreteScalarWhereInput | LembreteScalarWhereInput[]
  }

  export type ListaDeCompraUncheckedUpdateManyWithoutUsuarioEnviouNestedInput = {
    create?: XOR<ListaDeCompraCreateWithoutUsuarioEnviouInput, ListaDeCompraUncheckedCreateWithoutUsuarioEnviouInput> | ListaDeCompraCreateWithoutUsuarioEnviouInput[] | ListaDeCompraUncheckedCreateWithoutUsuarioEnviouInput[]
    connectOrCreate?: ListaDeCompraCreateOrConnectWithoutUsuarioEnviouInput | ListaDeCompraCreateOrConnectWithoutUsuarioEnviouInput[]
    upsert?: ListaDeCompraUpsertWithWhereUniqueWithoutUsuarioEnviouInput | ListaDeCompraUpsertWithWhereUniqueWithoutUsuarioEnviouInput[]
    createMany?: ListaDeCompraCreateManyUsuarioEnviouInputEnvelope
    set?: ListaDeCompraWhereUniqueInput | ListaDeCompraWhereUniqueInput[]
    disconnect?: ListaDeCompraWhereUniqueInput | ListaDeCompraWhereUniqueInput[]
    delete?: ListaDeCompraWhereUniqueInput | ListaDeCompraWhereUniqueInput[]
    connect?: ListaDeCompraWhereUniqueInput | ListaDeCompraWhereUniqueInput[]
    update?: ListaDeCompraUpdateWithWhereUniqueWithoutUsuarioEnviouInput | ListaDeCompraUpdateWithWhereUniqueWithoutUsuarioEnviouInput[]
    updateMany?: ListaDeCompraUpdateManyWithWhereWithoutUsuarioEnviouInput | ListaDeCompraUpdateManyWithWhereWithoutUsuarioEnviouInput[]
    deleteMany?: ListaDeCompraScalarWhereInput | ListaDeCompraScalarWhereInput[]
  }

  export type VeiculoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<VeiculoCreateWithoutUsuarioInput, VeiculoUncheckedCreateWithoutUsuarioInput> | VeiculoCreateWithoutUsuarioInput[] | VeiculoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VeiculoCreateOrConnectWithoutUsuarioInput | VeiculoCreateOrConnectWithoutUsuarioInput[]
    upsert?: VeiculoUpsertWithWhereUniqueWithoutUsuarioInput | VeiculoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: VeiculoCreateManyUsuarioInputEnvelope
    set?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    disconnect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    delete?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    connect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    update?: VeiculoUpdateWithWhereUniqueWithoutUsuarioInput | VeiculoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: VeiculoUpdateManyWithWhereWithoutUsuarioInput | VeiculoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: VeiculoScalarWhereInput | VeiculoScalarWhereInput[]
  }

  export type TarefaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<TarefaCreateWithoutUsuarioInput, TarefaUncheckedCreateWithoutUsuarioInput> | TarefaCreateWithoutUsuarioInput[] | TarefaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TarefaCreateOrConnectWithoutUsuarioInput | TarefaCreateOrConnectWithoutUsuarioInput[]
    upsert?: TarefaUpsertWithWhereUniqueWithoutUsuarioInput | TarefaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: TarefaCreateManyUsuarioInputEnvelope
    set?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    disconnect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    delete?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    connect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    update?: TarefaUpdateWithWhereUniqueWithoutUsuarioInput | TarefaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: TarefaUpdateManyWithWhereWithoutUsuarioInput | TarefaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: TarefaScalarWhereInput | TarefaScalarWhereInput[]
  }

  export type familia_usuariosCreateNestedManyWithoutFamiliaInput = {
    create?: XOR<familia_usuariosCreateWithoutFamiliaInput, familia_usuariosUncheckedCreateWithoutFamiliaInput> | familia_usuariosCreateWithoutFamiliaInput[] | familia_usuariosUncheckedCreateWithoutFamiliaInput[]
    connectOrCreate?: familia_usuariosCreateOrConnectWithoutFamiliaInput | familia_usuariosCreateOrConnectWithoutFamiliaInput[]
    createMany?: familia_usuariosCreateManyFamiliaInputEnvelope
    connect?: familia_usuariosWhereUniqueInput | familia_usuariosWhereUniqueInput[]
  }

  export type familia_usuariosUncheckedCreateNestedManyWithoutFamiliaInput = {
    create?: XOR<familia_usuariosCreateWithoutFamiliaInput, familia_usuariosUncheckedCreateWithoutFamiliaInput> | familia_usuariosCreateWithoutFamiliaInput[] | familia_usuariosUncheckedCreateWithoutFamiliaInput[]
    connectOrCreate?: familia_usuariosCreateOrConnectWithoutFamiliaInput | familia_usuariosCreateOrConnectWithoutFamiliaInput[]
    createMany?: familia_usuariosCreateManyFamiliaInputEnvelope
    connect?: familia_usuariosWhereUniqueInput | familia_usuariosWhereUniqueInput[]
  }

  export type familia_usuariosUpdateManyWithoutFamiliaNestedInput = {
    create?: XOR<familia_usuariosCreateWithoutFamiliaInput, familia_usuariosUncheckedCreateWithoutFamiliaInput> | familia_usuariosCreateWithoutFamiliaInput[] | familia_usuariosUncheckedCreateWithoutFamiliaInput[]
    connectOrCreate?: familia_usuariosCreateOrConnectWithoutFamiliaInput | familia_usuariosCreateOrConnectWithoutFamiliaInput[]
    upsert?: familia_usuariosUpsertWithWhereUniqueWithoutFamiliaInput | familia_usuariosUpsertWithWhereUniqueWithoutFamiliaInput[]
    createMany?: familia_usuariosCreateManyFamiliaInputEnvelope
    set?: familia_usuariosWhereUniqueInput | familia_usuariosWhereUniqueInput[]
    disconnect?: familia_usuariosWhereUniqueInput | familia_usuariosWhereUniqueInput[]
    delete?: familia_usuariosWhereUniqueInput | familia_usuariosWhereUniqueInput[]
    connect?: familia_usuariosWhereUniqueInput | familia_usuariosWhereUniqueInput[]
    update?: familia_usuariosUpdateWithWhereUniqueWithoutFamiliaInput | familia_usuariosUpdateWithWhereUniqueWithoutFamiliaInput[]
    updateMany?: familia_usuariosUpdateManyWithWhereWithoutFamiliaInput | familia_usuariosUpdateManyWithWhereWithoutFamiliaInput[]
    deleteMany?: familia_usuariosScalarWhereInput | familia_usuariosScalarWhereInput[]
  }

  export type familia_usuariosUncheckedUpdateManyWithoutFamiliaNestedInput = {
    create?: XOR<familia_usuariosCreateWithoutFamiliaInput, familia_usuariosUncheckedCreateWithoutFamiliaInput> | familia_usuariosCreateWithoutFamiliaInput[] | familia_usuariosUncheckedCreateWithoutFamiliaInput[]
    connectOrCreate?: familia_usuariosCreateOrConnectWithoutFamiliaInput | familia_usuariosCreateOrConnectWithoutFamiliaInput[]
    upsert?: familia_usuariosUpsertWithWhereUniqueWithoutFamiliaInput | familia_usuariosUpsertWithWhereUniqueWithoutFamiliaInput[]
    createMany?: familia_usuariosCreateManyFamiliaInputEnvelope
    set?: familia_usuariosWhereUniqueInput | familia_usuariosWhereUniqueInput[]
    disconnect?: familia_usuariosWhereUniqueInput | familia_usuariosWhereUniqueInput[]
    delete?: familia_usuariosWhereUniqueInput | familia_usuariosWhereUniqueInput[]
    connect?: familia_usuariosWhereUniqueInput | familia_usuariosWhereUniqueInput[]
    update?: familia_usuariosUpdateWithWhereUniqueWithoutFamiliaInput | familia_usuariosUpdateWithWhereUniqueWithoutFamiliaInput[]
    updateMany?: familia_usuariosUpdateManyWithWhereWithoutFamiliaInput | familia_usuariosUpdateManyWithWhereWithoutFamiliaInput[]
    deleteMany?: familia_usuariosScalarWhereInput | familia_usuariosScalarWhereInput[]
  }

  export type FamiliaCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<FamiliaCreateWithoutUsuariosInput, FamiliaUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: FamiliaCreateOrConnectWithoutUsuariosInput
    connect?: FamiliaWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutFamiliasInput = {
    create?: XOR<UsuarioCreateWithoutFamiliasInput, UsuarioUncheckedCreateWithoutFamiliasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFamiliasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EnumRotuloFieldUpdateOperationsInput = {
    set?: $Enums.Rotulo
  }

  export type FamiliaUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<FamiliaCreateWithoutUsuariosInput, FamiliaUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: FamiliaCreateOrConnectWithoutUsuariosInput
    upsert?: FamiliaUpsertWithoutUsuariosInput
    connect?: FamiliaWhereUniqueInput
    update?: XOR<XOR<FamiliaUpdateToOneWithWhereWithoutUsuariosInput, FamiliaUpdateWithoutUsuariosInput>, FamiliaUncheckedUpdateWithoutUsuariosInput>
  }

  export type UsuarioUpdateOneRequiredWithoutFamiliasNestedInput = {
    create?: XOR<UsuarioCreateWithoutFamiliasInput, UsuarioUncheckedCreateWithoutFamiliasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFamiliasInput
    upsert?: UsuarioUpsertWithoutFamiliasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutFamiliasInput, UsuarioUpdateWithoutFamiliasInput>, UsuarioUncheckedUpdateWithoutFamiliasInput>
  }

  export type UsuarioCreateNestedOneWithoutListasEnviadasInput = {
    create?: XOR<UsuarioCreateWithoutListasEnviadasInput, UsuarioUncheckedCreateWithoutListasEnviadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutListasEnviadasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ItemListaDeCompraCreateNestedManyWithoutListaInput = {
    create?: XOR<ItemListaDeCompraCreateWithoutListaInput, ItemListaDeCompraUncheckedCreateWithoutListaInput> | ItemListaDeCompraCreateWithoutListaInput[] | ItemListaDeCompraUncheckedCreateWithoutListaInput[]
    connectOrCreate?: ItemListaDeCompraCreateOrConnectWithoutListaInput | ItemListaDeCompraCreateOrConnectWithoutListaInput[]
    createMany?: ItemListaDeCompraCreateManyListaInputEnvelope
    connect?: ItemListaDeCompraWhereUniqueInput | ItemListaDeCompraWhereUniqueInput[]
  }

  export type LembreteCreateNestedManyWithoutListaDeCompraInput = {
    create?: XOR<LembreteCreateWithoutListaDeCompraInput, LembreteUncheckedCreateWithoutListaDeCompraInput> | LembreteCreateWithoutListaDeCompraInput[] | LembreteUncheckedCreateWithoutListaDeCompraInput[]
    connectOrCreate?: LembreteCreateOrConnectWithoutListaDeCompraInput | LembreteCreateOrConnectWithoutListaDeCompraInput[]
    createMany?: LembreteCreateManyListaDeCompraInputEnvelope
    connect?: LembreteWhereUniqueInput | LembreteWhereUniqueInput[]
  }

  export type AtividadeCreateNestedManyWithoutListaInput = {
    create?: XOR<AtividadeCreateWithoutListaInput, AtividadeUncheckedCreateWithoutListaInput> | AtividadeCreateWithoutListaInput[] | AtividadeUncheckedCreateWithoutListaInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutListaInput | AtividadeCreateOrConnectWithoutListaInput[]
    createMany?: AtividadeCreateManyListaInputEnvelope
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
  }

  export type ItemListaDeCompraUncheckedCreateNestedManyWithoutListaInput = {
    create?: XOR<ItemListaDeCompraCreateWithoutListaInput, ItemListaDeCompraUncheckedCreateWithoutListaInput> | ItemListaDeCompraCreateWithoutListaInput[] | ItemListaDeCompraUncheckedCreateWithoutListaInput[]
    connectOrCreate?: ItemListaDeCompraCreateOrConnectWithoutListaInput | ItemListaDeCompraCreateOrConnectWithoutListaInput[]
    createMany?: ItemListaDeCompraCreateManyListaInputEnvelope
    connect?: ItemListaDeCompraWhereUniqueInput | ItemListaDeCompraWhereUniqueInput[]
  }

  export type LembreteUncheckedCreateNestedManyWithoutListaDeCompraInput = {
    create?: XOR<LembreteCreateWithoutListaDeCompraInput, LembreteUncheckedCreateWithoutListaDeCompraInput> | LembreteCreateWithoutListaDeCompraInput[] | LembreteUncheckedCreateWithoutListaDeCompraInput[]
    connectOrCreate?: LembreteCreateOrConnectWithoutListaDeCompraInput | LembreteCreateOrConnectWithoutListaDeCompraInput[]
    createMany?: LembreteCreateManyListaDeCompraInputEnvelope
    connect?: LembreteWhereUniqueInput | LembreteWhereUniqueInput[]
  }

  export type AtividadeUncheckedCreateNestedManyWithoutListaInput = {
    create?: XOR<AtividadeCreateWithoutListaInput, AtividadeUncheckedCreateWithoutListaInput> | AtividadeCreateWithoutListaInput[] | AtividadeUncheckedCreateWithoutListaInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutListaInput | AtividadeCreateOrConnectWithoutListaInput[]
    createMany?: AtividadeCreateManyListaInputEnvelope
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UsuarioUpdateOneRequiredWithoutListasEnviadasNestedInput = {
    create?: XOR<UsuarioCreateWithoutListasEnviadasInput, UsuarioUncheckedCreateWithoutListasEnviadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutListasEnviadasInput
    upsert?: UsuarioUpsertWithoutListasEnviadasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutListasEnviadasInput, UsuarioUpdateWithoutListasEnviadasInput>, UsuarioUncheckedUpdateWithoutListasEnviadasInput>
  }

  export type ItemListaDeCompraUpdateManyWithoutListaNestedInput = {
    create?: XOR<ItemListaDeCompraCreateWithoutListaInput, ItemListaDeCompraUncheckedCreateWithoutListaInput> | ItemListaDeCompraCreateWithoutListaInput[] | ItemListaDeCompraUncheckedCreateWithoutListaInput[]
    connectOrCreate?: ItemListaDeCompraCreateOrConnectWithoutListaInput | ItemListaDeCompraCreateOrConnectWithoutListaInput[]
    upsert?: ItemListaDeCompraUpsertWithWhereUniqueWithoutListaInput | ItemListaDeCompraUpsertWithWhereUniqueWithoutListaInput[]
    createMany?: ItemListaDeCompraCreateManyListaInputEnvelope
    set?: ItemListaDeCompraWhereUniqueInput | ItemListaDeCompraWhereUniqueInput[]
    disconnect?: ItemListaDeCompraWhereUniqueInput | ItemListaDeCompraWhereUniqueInput[]
    delete?: ItemListaDeCompraWhereUniqueInput | ItemListaDeCompraWhereUniqueInput[]
    connect?: ItemListaDeCompraWhereUniqueInput | ItemListaDeCompraWhereUniqueInput[]
    update?: ItemListaDeCompraUpdateWithWhereUniqueWithoutListaInput | ItemListaDeCompraUpdateWithWhereUniqueWithoutListaInput[]
    updateMany?: ItemListaDeCompraUpdateManyWithWhereWithoutListaInput | ItemListaDeCompraUpdateManyWithWhereWithoutListaInput[]
    deleteMany?: ItemListaDeCompraScalarWhereInput | ItemListaDeCompraScalarWhereInput[]
  }

  export type LembreteUpdateManyWithoutListaDeCompraNestedInput = {
    create?: XOR<LembreteCreateWithoutListaDeCompraInput, LembreteUncheckedCreateWithoutListaDeCompraInput> | LembreteCreateWithoutListaDeCompraInput[] | LembreteUncheckedCreateWithoutListaDeCompraInput[]
    connectOrCreate?: LembreteCreateOrConnectWithoutListaDeCompraInput | LembreteCreateOrConnectWithoutListaDeCompraInput[]
    upsert?: LembreteUpsertWithWhereUniqueWithoutListaDeCompraInput | LembreteUpsertWithWhereUniqueWithoutListaDeCompraInput[]
    createMany?: LembreteCreateManyListaDeCompraInputEnvelope
    set?: LembreteWhereUniqueInput | LembreteWhereUniqueInput[]
    disconnect?: LembreteWhereUniqueInput | LembreteWhereUniqueInput[]
    delete?: LembreteWhereUniqueInput | LembreteWhereUniqueInput[]
    connect?: LembreteWhereUniqueInput | LembreteWhereUniqueInput[]
    update?: LembreteUpdateWithWhereUniqueWithoutListaDeCompraInput | LembreteUpdateWithWhereUniqueWithoutListaDeCompraInput[]
    updateMany?: LembreteUpdateManyWithWhereWithoutListaDeCompraInput | LembreteUpdateManyWithWhereWithoutListaDeCompraInput[]
    deleteMany?: LembreteScalarWhereInput | LembreteScalarWhereInput[]
  }

  export type AtividadeUpdateManyWithoutListaNestedInput = {
    create?: XOR<AtividadeCreateWithoutListaInput, AtividadeUncheckedCreateWithoutListaInput> | AtividadeCreateWithoutListaInput[] | AtividadeUncheckedCreateWithoutListaInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutListaInput | AtividadeCreateOrConnectWithoutListaInput[]
    upsert?: AtividadeUpsertWithWhereUniqueWithoutListaInput | AtividadeUpsertWithWhereUniqueWithoutListaInput[]
    createMany?: AtividadeCreateManyListaInputEnvelope
    set?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    disconnect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    delete?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    update?: AtividadeUpdateWithWhereUniqueWithoutListaInput | AtividadeUpdateWithWhereUniqueWithoutListaInput[]
    updateMany?: AtividadeUpdateManyWithWhereWithoutListaInput | AtividadeUpdateManyWithWhereWithoutListaInput[]
    deleteMany?: AtividadeScalarWhereInput | AtividadeScalarWhereInput[]
  }

  export type ItemListaDeCompraUncheckedUpdateManyWithoutListaNestedInput = {
    create?: XOR<ItemListaDeCompraCreateWithoutListaInput, ItemListaDeCompraUncheckedCreateWithoutListaInput> | ItemListaDeCompraCreateWithoutListaInput[] | ItemListaDeCompraUncheckedCreateWithoutListaInput[]
    connectOrCreate?: ItemListaDeCompraCreateOrConnectWithoutListaInput | ItemListaDeCompraCreateOrConnectWithoutListaInput[]
    upsert?: ItemListaDeCompraUpsertWithWhereUniqueWithoutListaInput | ItemListaDeCompraUpsertWithWhereUniqueWithoutListaInput[]
    createMany?: ItemListaDeCompraCreateManyListaInputEnvelope
    set?: ItemListaDeCompraWhereUniqueInput | ItemListaDeCompraWhereUniqueInput[]
    disconnect?: ItemListaDeCompraWhereUniqueInput | ItemListaDeCompraWhereUniqueInput[]
    delete?: ItemListaDeCompraWhereUniqueInput | ItemListaDeCompraWhereUniqueInput[]
    connect?: ItemListaDeCompraWhereUniqueInput | ItemListaDeCompraWhereUniqueInput[]
    update?: ItemListaDeCompraUpdateWithWhereUniqueWithoutListaInput | ItemListaDeCompraUpdateWithWhereUniqueWithoutListaInput[]
    updateMany?: ItemListaDeCompraUpdateManyWithWhereWithoutListaInput | ItemListaDeCompraUpdateManyWithWhereWithoutListaInput[]
    deleteMany?: ItemListaDeCompraScalarWhereInput | ItemListaDeCompraScalarWhereInput[]
  }

  export type LembreteUncheckedUpdateManyWithoutListaDeCompraNestedInput = {
    create?: XOR<LembreteCreateWithoutListaDeCompraInput, LembreteUncheckedCreateWithoutListaDeCompraInput> | LembreteCreateWithoutListaDeCompraInput[] | LembreteUncheckedCreateWithoutListaDeCompraInput[]
    connectOrCreate?: LembreteCreateOrConnectWithoutListaDeCompraInput | LembreteCreateOrConnectWithoutListaDeCompraInput[]
    upsert?: LembreteUpsertWithWhereUniqueWithoutListaDeCompraInput | LembreteUpsertWithWhereUniqueWithoutListaDeCompraInput[]
    createMany?: LembreteCreateManyListaDeCompraInputEnvelope
    set?: LembreteWhereUniqueInput | LembreteWhereUniqueInput[]
    disconnect?: LembreteWhereUniqueInput | LembreteWhereUniqueInput[]
    delete?: LembreteWhereUniqueInput | LembreteWhereUniqueInput[]
    connect?: LembreteWhereUniqueInput | LembreteWhereUniqueInput[]
    update?: LembreteUpdateWithWhereUniqueWithoutListaDeCompraInput | LembreteUpdateWithWhereUniqueWithoutListaDeCompraInput[]
    updateMany?: LembreteUpdateManyWithWhereWithoutListaDeCompraInput | LembreteUpdateManyWithWhereWithoutListaDeCompraInput[]
    deleteMany?: LembreteScalarWhereInput | LembreteScalarWhereInput[]
  }

  export type AtividadeUncheckedUpdateManyWithoutListaNestedInput = {
    create?: XOR<AtividadeCreateWithoutListaInput, AtividadeUncheckedCreateWithoutListaInput> | AtividadeCreateWithoutListaInput[] | AtividadeUncheckedCreateWithoutListaInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutListaInput | AtividadeCreateOrConnectWithoutListaInput[]
    upsert?: AtividadeUpsertWithWhereUniqueWithoutListaInput | AtividadeUpsertWithWhereUniqueWithoutListaInput[]
    createMany?: AtividadeCreateManyListaInputEnvelope
    set?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    disconnect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    delete?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    update?: AtividadeUpdateWithWhereUniqueWithoutListaInput | AtividadeUpdateWithWhereUniqueWithoutListaInput[]
    updateMany?: AtividadeUpdateManyWithWhereWithoutListaInput | AtividadeUpdateManyWithWhereWithoutListaInput[]
    deleteMany?: AtividadeScalarWhereInput | AtividadeScalarWhereInput[]
  }

  export type ListaDeCompraCreateNestedOneWithoutItensInput = {
    create?: XOR<ListaDeCompraCreateWithoutItensInput, ListaDeCompraUncheckedCreateWithoutItensInput>
    connectOrCreate?: ListaDeCompraCreateOrConnectWithoutItensInput
    connect?: ListaDeCompraWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ListaDeCompraUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<ListaDeCompraCreateWithoutItensInput, ListaDeCompraUncheckedCreateWithoutItensInput>
    connectOrCreate?: ListaDeCompraCreateOrConnectWithoutItensInput
    upsert?: ListaDeCompraUpsertWithoutItensInput
    connect?: ListaDeCompraWhereUniqueInput
    update?: XOR<XOR<ListaDeCompraUpdateToOneWithWhereWithoutItensInput, ListaDeCompraUpdateWithoutItensInput>, ListaDeCompraUncheckedUpdateWithoutItensInput>
  }

  export type UsuarioCreateNestedOneWithoutVeiculosInput = {
    create?: XOR<UsuarioCreateWithoutVeiculosInput, UsuarioUncheckedCreateWithoutVeiculosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutVeiculosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type LembreteCreateNestedManyWithoutVeiculoInput = {
    create?: XOR<LembreteCreateWithoutVeiculoInput, LembreteUncheckedCreateWithoutVeiculoInput> | LembreteCreateWithoutVeiculoInput[] | LembreteUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: LembreteCreateOrConnectWithoutVeiculoInput | LembreteCreateOrConnectWithoutVeiculoInput[]
    createMany?: LembreteCreateManyVeiculoInputEnvelope
    connect?: LembreteWhereUniqueInput | LembreteWhereUniqueInput[]
  }

  export type RegistroDeManutencaoCreateNestedManyWithoutVeiculoInput = {
    create?: XOR<RegistroDeManutencaoCreateWithoutVeiculoInput, RegistroDeManutencaoUncheckedCreateWithoutVeiculoInput> | RegistroDeManutencaoCreateWithoutVeiculoInput[] | RegistroDeManutencaoUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: RegistroDeManutencaoCreateOrConnectWithoutVeiculoInput | RegistroDeManutencaoCreateOrConnectWithoutVeiculoInput[]
    createMany?: RegistroDeManutencaoCreateManyVeiculoInputEnvelope
    connect?: RegistroDeManutencaoWhereUniqueInput | RegistroDeManutencaoWhereUniqueInput[]
  }

  export type AtividadeCreateNestedManyWithoutVeiculoInput = {
    create?: XOR<AtividadeCreateWithoutVeiculoInput, AtividadeUncheckedCreateWithoutVeiculoInput> | AtividadeCreateWithoutVeiculoInput[] | AtividadeUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutVeiculoInput | AtividadeCreateOrConnectWithoutVeiculoInput[]
    createMany?: AtividadeCreateManyVeiculoInputEnvelope
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
  }

  export type LembreteUncheckedCreateNestedManyWithoutVeiculoInput = {
    create?: XOR<LembreteCreateWithoutVeiculoInput, LembreteUncheckedCreateWithoutVeiculoInput> | LembreteCreateWithoutVeiculoInput[] | LembreteUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: LembreteCreateOrConnectWithoutVeiculoInput | LembreteCreateOrConnectWithoutVeiculoInput[]
    createMany?: LembreteCreateManyVeiculoInputEnvelope
    connect?: LembreteWhereUniqueInput | LembreteWhereUniqueInput[]
  }

  export type RegistroDeManutencaoUncheckedCreateNestedManyWithoutVeiculoInput = {
    create?: XOR<RegistroDeManutencaoCreateWithoutVeiculoInput, RegistroDeManutencaoUncheckedCreateWithoutVeiculoInput> | RegistroDeManutencaoCreateWithoutVeiculoInput[] | RegistroDeManutencaoUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: RegistroDeManutencaoCreateOrConnectWithoutVeiculoInput | RegistroDeManutencaoCreateOrConnectWithoutVeiculoInput[]
    createMany?: RegistroDeManutencaoCreateManyVeiculoInputEnvelope
    connect?: RegistroDeManutencaoWhereUniqueInput | RegistroDeManutencaoWhereUniqueInput[]
  }

  export type AtividadeUncheckedCreateNestedManyWithoutVeiculoInput = {
    create?: XOR<AtividadeCreateWithoutVeiculoInput, AtividadeUncheckedCreateWithoutVeiculoInput> | AtividadeCreateWithoutVeiculoInput[] | AtividadeUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutVeiculoInput | AtividadeCreateOrConnectWithoutVeiculoInput[]
    createMany?: AtividadeCreateManyVeiculoInputEnvelope
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutVeiculosNestedInput = {
    create?: XOR<UsuarioCreateWithoutVeiculosInput, UsuarioUncheckedCreateWithoutVeiculosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutVeiculosInput
    upsert?: UsuarioUpsertWithoutVeiculosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutVeiculosInput, UsuarioUpdateWithoutVeiculosInput>, UsuarioUncheckedUpdateWithoutVeiculosInput>
  }

  export type LembreteUpdateManyWithoutVeiculoNestedInput = {
    create?: XOR<LembreteCreateWithoutVeiculoInput, LembreteUncheckedCreateWithoutVeiculoInput> | LembreteCreateWithoutVeiculoInput[] | LembreteUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: LembreteCreateOrConnectWithoutVeiculoInput | LembreteCreateOrConnectWithoutVeiculoInput[]
    upsert?: LembreteUpsertWithWhereUniqueWithoutVeiculoInput | LembreteUpsertWithWhereUniqueWithoutVeiculoInput[]
    createMany?: LembreteCreateManyVeiculoInputEnvelope
    set?: LembreteWhereUniqueInput | LembreteWhereUniqueInput[]
    disconnect?: LembreteWhereUniqueInput | LembreteWhereUniqueInput[]
    delete?: LembreteWhereUniqueInput | LembreteWhereUniqueInput[]
    connect?: LembreteWhereUniqueInput | LembreteWhereUniqueInput[]
    update?: LembreteUpdateWithWhereUniqueWithoutVeiculoInput | LembreteUpdateWithWhereUniqueWithoutVeiculoInput[]
    updateMany?: LembreteUpdateManyWithWhereWithoutVeiculoInput | LembreteUpdateManyWithWhereWithoutVeiculoInput[]
    deleteMany?: LembreteScalarWhereInput | LembreteScalarWhereInput[]
  }

  export type RegistroDeManutencaoUpdateManyWithoutVeiculoNestedInput = {
    create?: XOR<RegistroDeManutencaoCreateWithoutVeiculoInput, RegistroDeManutencaoUncheckedCreateWithoutVeiculoInput> | RegistroDeManutencaoCreateWithoutVeiculoInput[] | RegistroDeManutencaoUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: RegistroDeManutencaoCreateOrConnectWithoutVeiculoInput | RegistroDeManutencaoCreateOrConnectWithoutVeiculoInput[]
    upsert?: RegistroDeManutencaoUpsertWithWhereUniqueWithoutVeiculoInput | RegistroDeManutencaoUpsertWithWhereUniqueWithoutVeiculoInput[]
    createMany?: RegistroDeManutencaoCreateManyVeiculoInputEnvelope
    set?: RegistroDeManutencaoWhereUniqueInput | RegistroDeManutencaoWhereUniqueInput[]
    disconnect?: RegistroDeManutencaoWhereUniqueInput | RegistroDeManutencaoWhereUniqueInput[]
    delete?: RegistroDeManutencaoWhereUniqueInput | RegistroDeManutencaoWhereUniqueInput[]
    connect?: RegistroDeManutencaoWhereUniqueInput | RegistroDeManutencaoWhereUniqueInput[]
    update?: RegistroDeManutencaoUpdateWithWhereUniqueWithoutVeiculoInput | RegistroDeManutencaoUpdateWithWhereUniqueWithoutVeiculoInput[]
    updateMany?: RegistroDeManutencaoUpdateManyWithWhereWithoutVeiculoInput | RegistroDeManutencaoUpdateManyWithWhereWithoutVeiculoInput[]
    deleteMany?: RegistroDeManutencaoScalarWhereInput | RegistroDeManutencaoScalarWhereInput[]
  }

  export type AtividadeUpdateManyWithoutVeiculoNestedInput = {
    create?: XOR<AtividadeCreateWithoutVeiculoInput, AtividadeUncheckedCreateWithoutVeiculoInput> | AtividadeCreateWithoutVeiculoInput[] | AtividadeUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutVeiculoInput | AtividadeCreateOrConnectWithoutVeiculoInput[]
    upsert?: AtividadeUpsertWithWhereUniqueWithoutVeiculoInput | AtividadeUpsertWithWhereUniqueWithoutVeiculoInput[]
    createMany?: AtividadeCreateManyVeiculoInputEnvelope
    set?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    disconnect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    delete?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    update?: AtividadeUpdateWithWhereUniqueWithoutVeiculoInput | AtividadeUpdateWithWhereUniqueWithoutVeiculoInput[]
    updateMany?: AtividadeUpdateManyWithWhereWithoutVeiculoInput | AtividadeUpdateManyWithWhereWithoutVeiculoInput[]
    deleteMany?: AtividadeScalarWhereInput | AtividadeScalarWhereInput[]
  }

  export type LembreteUncheckedUpdateManyWithoutVeiculoNestedInput = {
    create?: XOR<LembreteCreateWithoutVeiculoInput, LembreteUncheckedCreateWithoutVeiculoInput> | LembreteCreateWithoutVeiculoInput[] | LembreteUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: LembreteCreateOrConnectWithoutVeiculoInput | LembreteCreateOrConnectWithoutVeiculoInput[]
    upsert?: LembreteUpsertWithWhereUniqueWithoutVeiculoInput | LembreteUpsertWithWhereUniqueWithoutVeiculoInput[]
    createMany?: LembreteCreateManyVeiculoInputEnvelope
    set?: LembreteWhereUniqueInput | LembreteWhereUniqueInput[]
    disconnect?: LembreteWhereUniqueInput | LembreteWhereUniqueInput[]
    delete?: LembreteWhereUniqueInput | LembreteWhereUniqueInput[]
    connect?: LembreteWhereUniqueInput | LembreteWhereUniqueInput[]
    update?: LembreteUpdateWithWhereUniqueWithoutVeiculoInput | LembreteUpdateWithWhereUniqueWithoutVeiculoInput[]
    updateMany?: LembreteUpdateManyWithWhereWithoutVeiculoInput | LembreteUpdateManyWithWhereWithoutVeiculoInput[]
    deleteMany?: LembreteScalarWhereInput | LembreteScalarWhereInput[]
  }

  export type RegistroDeManutencaoUncheckedUpdateManyWithoutVeiculoNestedInput = {
    create?: XOR<RegistroDeManutencaoCreateWithoutVeiculoInput, RegistroDeManutencaoUncheckedCreateWithoutVeiculoInput> | RegistroDeManutencaoCreateWithoutVeiculoInput[] | RegistroDeManutencaoUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: RegistroDeManutencaoCreateOrConnectWithoutVeiculoInput | RegistroDeManutencaoCreateOrConnectWithoutVeiculoInput[]
    upsert?: RegistroDeManutencaoUpsertWithWhereUniqueWithoutVeiculoInput | RegistroDeManutencaoUpsertWithWhereUniqueWithoutVeiculoInput[]
    createMany?: RegistroDeManutencaoCreateManyVeiculoInputEnvelope
    set?: RegistroDeManutencaoWhereUniqueInput | RegistroDeManutencaoWhereUniqueInput[]
    disconnect?: RegistroDeManutencaoWhereUniqueInput | RegistroDeManutencaoWhereUniqueInput[]
    delete?: RegistroDeManutencaoWhereUniqueInput | RegistroDeManutencaoWhereUniqueInput[]
    connect?: RegistroDeManutencaoWhereUniqueInput | RegistroDeManutencaoWhereUniqueInput[]
    update?: RegistroDeManutencaoUpdateWithWhereUniqueWithoutVeiculoInput | RegistroDeManutencaoUpdateWithWhereUniqueWithoutVeiculoInput[]
    updateMany?: RegistroDeManutencaoUpdateManyWithWhereWithoutVeiculoInput | RegistroDeManutencaoUpdateManyWithWhereWithoutVeiculoInput[]
    deleteMany?: RegistroDeManutencaoScalarWhereInput | RegistroDeManutencaoScalarWhereInput[]
  }

  export type AtividadeUncheckedUpdateManyWithoutVeiculoNestedInput = {
    create?: XOR<AtividadeCreateWithoutVeiculoInput, AtividadeUncheckedCreateWithoutVeiculoInput> | AtividadeCreateWithoutVeiculoInput[] | AtividadeUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutVeiculoInput | AtividadeCreateOrConnectWithoutVeiculoInput[]
    upsert?: AtividadeUpsertWithWhereUniqueWithoutVeiculoInput | AtividadeUpsertWithWhereUniqueWithoutVeiculoInput[]
    createMany?: AtividadeCreateManyVeiculoInputEnvelope
    set?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    disconnect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    delete?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    update?: AtividadeUpdateWithWhereUniqueWithoutVeiculoInput | AtividadeUpdateWithWhereUniqueWithoutVeiculoInput[]
    updateMany?: AtividadeUpdateManyWithWhereWithoutVeiculoInput | AtividadeUpdateManyWithWhereWithoutVeiculoInput[]
    deleteMany?: AtividadeScalarWhereInput | AtividadeScalarWhereInput[]
  }

  export type VeiculoCreateNestedOneWithoutManutencoesInput = {
    create?: XOR<VeiculoCreateWithoutManutencoesInput, VeiculoUncheckedCreateWithoutManutencoesInput>
    connectOrCreate?: VeiculoCreateOrConnectWithoutManutencoesInput
    connect?: VeiculoWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VeiculoUpdateOneRequiredWithoutManutencoesNestedInput = {
    create?: XOR<VeiculoCreateWithoutManutencoesInput, VeiculoUncheckedCreateWithoutManutencoesInput>
    connectOrCreate?: VeiculoCreateOrConnectWithoutManutencoesInput
    upsert?: VeiculoUpsertWithoutManutencoesInput
    connect?: VeiculoWhereUniqueInput
    update?: XOR<XOR<VeiculoUpdateToOneWithWhereWithoutManutencoesInput, VeiculoUpdateWithoutManutencoesInput>, VeiculoUncheckedUpdateWithoutManutencoesInput>
  }

  export type ListaDeCompraCreateNestedOneWithoutLembretesInput = {
    create?: XOR<ListaDeCompraCreateWithoutLembretesInput, ListaDeCompraUncheckedCreateWithoutLembretesInput>
    connectOrCreate?: ListaDeCompraCreateOrConnectWithoutLembretesInput
    connect?: ListaDeCompraWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutLembretesEnviadosInput = {
    create?: XOR<UsuarioCreateWithoutLembretesEnviadosInput, UsuarioUncheckedCreateWithoutLembretesEnviadosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutLembretesEnviadosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type VeiculoCreateNestedOneWithoutLembreteInput = {
    create?: XOR<VeiculoCreateWithoutLembreteInput, VeiculoUncheckedCreateWithoutLembreteInput>
    connectOrCreate?: VeiculoCreateOrConnectWithoutLembreteInput
    connect?: VeiculoWhereUniqueInput
  }

  export type AtividadeCreateNestedManyWithoutLembreteInput = {
    create?: XOR<AtividadeCreateWithoutLembreteInput, AtividadeUncheckedCreateWithoutLembreteInput> | AtividadeCreateWithoutLembreteInput[] | AtividadeUncheckedCreateWithoutLembreteInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutLembreteInput | AtividadeCreateOrConnectWithoutLembreteInput[]
    createMany?: AtividadeCreateManyLembreteInputEnvelope
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
  }

  export type AtividadeUncheckedCreateNestedManyWithoutLembreteInput = {
    create?: XOR<AtividadeCreateWithoutLembreteInput, AtividadeUncheckedCreateWithoutLembreteInput> | AtividadeCreateWithoutLembreteInput[] | AtividadeUncheckedCreateWithoutLembreteInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutLembreteInput | AtividadeCreateOrConnectWithoutLembreteInput[]
    createMany?: AtividadeCreateManyLembreteInputEnvelope
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
  }

  export type ListaDeCompraUpdateOneRequiredWithoutLembretesNestedInput = {
    create?: XOR<ListaDeCompraCreateWithoutLembretesInput, ListaDeCompraUncheckedCreateWithoutLembretesInput>
    connectOrCreate?: ListaDeCompraCreateOrConnectWithoutLembretesInput
    upsert?: ListaDeCompraUpsertWithoutLembretesInput
    connect?: ListaDeCompraWhereUniqueInput
    update?: XOR<XOR<ListaDeCompraUpdateToOneWithWhereWithoutLembretesInput, ListaDeCompraUpdateWithoutLembretesInput>, ListaDeCompraUncheckedUpdateWithoutLembretesInput>
  }

  export type UsuarioUpdateOneRequiredWithoutLembretesEnviadosNestedInput = {
    create?: XOR<UsuarioCreateWithoutLembretesEnviadosInput, UsuarioUncheckedCreateWithoutLembretesEnviadosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutLembretesEnviadosInput
    upsert?: UsuarioUpsertWithoutLembretesEnviadosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutLembretesEnviadosInput, UsuarioUpdateWithoutLembretesEnviadosInput>, UsuarioUncheckedUpdateWithoutLembretesEnviadosInput>
  }

  export type VeiculoUpdateOneRequiredWithoutLembreteNestedInput = {
    create?: XOR<VeiculoCreateWithoutLembreteInput, VeiculoUncheckedCreateWithoutLembreteInput>
    connectOrCreate?: VeiculoCreateOrConnectWithoutLembreteInput
    upsert?: VeiculoUpsertWithoutLembreteInput
    connect?: VeiculoWhereUniqueInput
    update?: XOR<XOR<VeiculoUpdateToOneWithWhereWithoutLembreteInput, VeiculoUpdateWithoutLembreteInput>, VeiculoUncheckedUpdateWithoutLembreteInput>
  }

  export type AtividadeUpdateManyWithoutLembreteNestedInput = {
    create?: XOR<AtividadeCreateWithoutLembreteInput, AtividadeUncheckedCreateWithoutLembreteInput> | AtividadeCreateWithoutLembreteInput[] | AtividadeUncheckedCreateWithoutLembreteInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutLembreteInput | AtividadeCreateOrConnectWithoutLembreteInput[]
    upsert?: AtividadeUpsertWithWhereUniqueWithoutLembreteInput | AtividadeUpsertWithWhereUniqueWithoutLembreteInput[]
    createMany?: AtividadeCreateManyLembreteInputEnvelope
    set?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    disconnect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    delete?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    update?: AtividadeUpdateWithWhereUniqueWithoutLembreteInput | AtividadeUpdateWithWhereUniqueWithoutLembreteInput[]
    updateMany?: AtividadeUpdateManyWithWhereWithoutLembreteInput | AtividadeUpdateManyWithWhereWithoutLembreteInput[]
    deleteMany?: AtividadeScalarWhereInput | AtividadeScalarWhereInput[]
  }

  export type AtividadeUncheckedUpdateManyWithoutLembreteNestedInput = {
    create?: XOR<AtividadeCreateWithoutLembreteInput, AtividadeUncheckedCreateWithoutLembreteInput> | AtividadeCreateWithoutLembreteInput[] | AtividadeUncheckedCreateWithoutLembreteInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutLembreteInput | AtividadeCreateOrConnectWithoutLembreteInput[]
    upsert?: AtividadeUpsertWithWhereUniqueWithoutLembreteInput | AtividadeUpsertWithWhereUniqueWithoutLembreteInput[]
    createMany?: AtividadeCreateManyLembreteInputEnvelope
    set?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    disconnect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    delete?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    update?: AtividadeUpdateWithWhereUniqueWithoutLembreteInput | AtividadeUpdateWithWhereUniqueWithoutLembreteInput[]
    updateMany?: AtividadeUpdateManyWithWhereWithoutLembreteInput | AtividadeUpdateManyWithWhereWithoutLembreteInput[]
    deleteMany?: AtividadeScalarWhereInput | AtividadeScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutTarefasInput = {
    create?: XOR<UsuarioCreateWithoutTarefasInput, UsuarioUncheckedCreateWithoutTarefasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTarefasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type AtividadeCreateNestedManyWithoutTarefaInput = {
    create?: XOR<AtividadeCreateWithoutTarefaInput, AtividadeUncheckedCreateWithoutTarefaInput> | AtividadeCreateWithoutTarefaInput[] | AtividadeUncheckedCreateWithoutTarefaInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutTarefaInput | AtividadeCreateOrConnectWithoutTarefaInput[]
    createMany?: AtividadeCreateManyTarefaInputEnvelope
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
  }

  export type AtividadeUncheckedCreateNestedManyWithoutTarefaInput = {
    create?: XOR<AtividadeCreateWithoutTarefaInput, AtividadeUncheckedCreateWithoutTarefaInput> | AtividadeCreateWithoutTarefaInput[] | AtividadeUncheckedCreateWithoutTarefaInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutTarefaInput | AtividadeCreateOrConnectWithoutTarefaInput[]
    createMany?: AtividadeCreateManyTarefaInputEnvelope
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutTarefasNestedInput = {
    create?: XOR<UsuarioCreateWithoutTarefasInput, UsuarioUncheckedCreateWithoutTarefasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTarefasInput
    upsert?: UsuarioUpsertWithoutTarefasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutTarefasInput, UsuarioUpdateWithoutTarefasInput>, UsuarioUncheckedUpdateWithoutTarefasInput>
  }

  export type AtividadeUpdateManyWithoutTarefaNestedInput = {
    create?: XOR<AtividadeCreateWithoutTarefaInput, AtividadeUncheckedCreateWithoutTarefaInput> | AtividadeCreateWithoutTarefaInput[] | AtividadeUncheckedCreateWithoutTarefaInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutTarefaInput | AtividadeCreateOrConnectWithoutTarefaInput[]
    upsert?: AtividadeUpsertWithWhereUniqueWithoutTarefaInput | AtividadeUpsertWithWhereUniqueWithoutTarefaInput[]
    createMany?: AtividadeCreateManyTarefaInputEnvelope
    set?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    disconnect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    delete?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    update?: AtividadeUpdateWithWhereUniqueWithoutTarefaInput | AtividadeUpdateWithWhereUniqueWithoutTarefaInput[]
    updateMany?: AtividadeUpdateManyWithWhereWithoutTarefaInput | AtividadeUpdateManyWithWhereWithoutTarefaInput[]
    deleteMany?: AtividadeScalarWhereInput | AtividadeScalarWhereInput[]
  }

  export type AtividadeUncheckedUpdateManyWithoutTarefaNestedInput = {
    create?: XOR<AtividadeCreateWithoutTarefaInput, AtividadeUncheckedCreateWithoutTarefaInput> | AtividadeCreateWithoutTarefaInput[] | AtividadeUncheckedCreateWithoutTarefaInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutTarefaInput | AtividadeCreateOrConnectWithoutTarefaInput[]
    upsert?: AtividadeUpsertWithWhereUniqueWithoutTarefaInput | AtividadeUpsertWithWhereUniqueWithoutTarefaInput[]
    createMany?: AtividadeCreateManyTarefaInputEnvelope
    set?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    disconnect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    delete?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    update?: AtividadeUpdateWithWhereUniqueWithoutTarefaInput | AtividadeUpdateWithWhereUniqueWithoutTarefaInput[]
    updateMany?: AtividadeUpdateManyWithWhereWithoutTarefaInput | AtividadeUpdateManyWithWhereWithoutTarefaInput[]
    deleteMany?: AtividadeScalarWhereInput | AtividadeScalarWhereInput[]
  }

  export type TarefaCreateNestedOneWithoutAtividadesInput = {
    create?: XOR<TarefaCreateWithoutAtividadesInput, TarefaUncheckedCreateWithoutAtividadesInput>
    connectOrCreate?: TarefaCreateOrConnectWithoutAtividadesInput
    connect?: TarefaWhereUniqueInput
  }

  export type ListaDeCompraCreateNestedOneWithoutAtividadesInput = {
    create?: XOR<ListaDeCompraCreateWithoutAtividadesInput, ListaDeCompraUncheckedCreateWithoutAtividadesInput>
    connectOrCreate?: ListaDeCompraCreateOrConnectWithoutAtividadesInput
    connect?: ListaDeCompraWhereUniqueInput
  }

  export type LembreteCreateNestedOneWithoutAtividadesInput = {
    create?: XOR<LembreteCreateWithoutAtividadesInput, LembreteUncheckedCreateWithoutAtividadesInput>
    connectOrCreate?: LembreteCreateOrConnectWithoutAtividadesInput
    connect?: LembreteWhereUniqueInput
  }

  export type VeiculoCreateNestedOneWithoutAtividadesInput = {
    create?: XOR<VeiculoCreateWithoutAtividadesInput, VeiculoUncheckedCreateWithoutAtividadesInput>
    connectOrCreate?: VeiculoCreateOrConnectWithoutAtividadesInput
    connect?: VeiculoWhereUniqueInput
  }

  export type EnumTipoAtividadeFieldUpdateOperationsInput = {
    set?: $Enums.TipoAtividade
  }

  export type EnumAcaoAtividadeFieldUpdateOperationsInput = {
    set?: $Enums.AcaoAtividade
  }

  export type TarefaUpdateOneWithoutAtividadesNestedInput = {
    create?: XOR<TarefaCreateWithoutAtividadesInput, TarefaUncheckedCreateWithoutAtividadesInput>
    connectOrCreate?: TarefaCreateOrConnectWithoutAtividadesInput
    upsert?: TarefaUpsertWithoutAtividadesInput
    disconnect?: TarefaWhereInput | boolean
    delete?: TarefaWhereInput | boolean
    connect?: TarefaWhereUniqueInput
    update?: XOR<XOR<TarefaUpdateToOneWithWhereWithoutAtividadesInput, TarefaUpdateWithoutAtividadesInput>, TarefaUncheckedUpdateWithoutAtividadesInput>
  }

  export type ListaDeCompraUpdateOneWithoutAtividadesNestedInput = {
    create?: XOR<ListaDeCompraCreateWithoutAtividadesInput, ListaDeCompraUncheckedCreateWithoutAtividadesInput>
    connectOrCreate?: ListaDeCompraCreateOrConnectWithoutAtividadesInput
    upsert?: ListaDeCompraUpsertWithoutAtividadesInput
    disconnect?: ListaDeCompraWhereInput | boolean
    delete?: ListaDeCompraWhereInput | boolean
    connect?: ListaDeCompraWhereUniqueInput
    update?: XOR<XOR<ListaDeCompraUpdateToOneWithWhereWithoutAtividadesInput, ListaDeCompraUpdateWithoutAtividadesInput>, ListaDeCompraUncheckedUpdateWithoutAtividadesInput>
  }

  export type LembreteUpdateOneWithoutAtividadesNestedInput = {
    create?: XOR<LembreteCreateWithoutAtividadesInput, LembreteUncheckedCreateWithoutAtividadesInput>
    connectOrCreate?: LembreteCreateOrConnectWithoutAtividadesInput
    upsert?: LembreteUpsertWithoutAtividadesInput
    disconnect?: LembreteWhereInput | boolean
    delete?: LembreteWhereInput | boolean
    connect?: LembreteWhereUniqueInput
    update?: XOR<XOR<LembreteUpdateToOneWithWhereWithoutAtividadesInput, LembreteUpdateWithoutAtividadesInput>, LembreteUncheckedUpdateWithoutAtividadesInput>
  }

  export type VeiculoUpdateOneWithoutAtividadesNestedInput = {
    create?: XOR<VeiculoCreateWithoutAtividadesInput, VeiculoUncheckedCreateWithoutAtividadesInput>
    connectOrCreate?: VeiculoCreateOrConnectWithoutAtividadesInput
    upsert?: VeiculoUpsertWithoutAtividadesInput
    disconnect?: VeiculoWhereInput | boolean
    delete?: VeiculoWhereInput | boolean
    connect?: VeiculoWhereUniqueInput
    update?: XOR<XOR<VeiculoUpdateToOneWithWhereWithoutAtividadesInput, VeiculoUpdateWithoutAtividadesInput>, VeiculoUncheckedUpdateWithoutAtividadesInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type NestedEnumRotuloFilter<$PrismaModel = never> = {
    equals?: $Enums.Rotulo | EnumRotuloFieldRefInput<$PrismaModel>
    in?: $Enums.Rotulo[] | ListEnumRotuloFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rotulo[] | ListEnumRotuloFieldRefInput<$PrismaModel>
    not?: NestedEnumRotuloFilter<$PrismaModel> | $Enums.Rotulo
  }

  export type NestedEnumRotuloWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rotulo | EnumRotuloFieldRefInput<$PrismaModel>
    in?: $Enums.Rotulo[] | ListEnumRotuloFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rotulo[] | ListEnumRotuloFieldRefInput<$PrismaModel>
    not?: NestedEnumRotuloWithAggregatesFilter<$PrismaModel> | $Enums.Rotulo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRotuloFilter<$PrismaModel>
    _max?: NestedEnumRotuloFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumTipoAtividadeFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAtividade | EnumTipoAtividadeFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAtividade[] | ListEnumTipoAtividadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoAtividade[] | ListEnumTipoAtividadeFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoAtividadeFilter<$PrismaModel> | $Enums.TipoAtividade
  }

  export type NestedEnumAcaoAtividadeFilter<$PrismaModel = never> = {
    equals?: $Enums.AcaoAtividade | EnumAcaoAtividadeFieldRefInput<$PrismaModel>
    in?: $Enums.AcaoAtividade[] | ListEnumAcaoAtividadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AcaoAtividade[] | ListEnumAcaoAtividadeFieldRefInput<$PrismaModel>
    not?: NestedEnumAcaoAtividadeFilter<$PrismaModel> | $Enums.AcaoAtividade
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumTipoAtividadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAtividade | EnumTipoAtividadeFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAtividade[] | ListEnumTipoAtividadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoAtividade[] | ListEnumTipoAtividadeFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoAtividadeWithAggregatesFilter<$PrismaModel> | $Enums.TipoAtividade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoAtividadeFilter<$PrismaModel>
    _max?: NestedEnumTipoAtividadeFilter<$PrismaModel>
  }

  export type NestedEnumAcaoAtividadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AcaoAtividade | EnumAcaoAtividadeFieldRefInput<$PrismaModel>
    in?: $Enums.AcaoAtividade[] | ListEnumAcaoAtividadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AcaoAtividade[] | ListEnumAcaoAtividadeFieldRefInput<$PrismaModel>
    not?: NestedEnumAcaoAtividadeWithAggregatesFilter<$PrismaModel> | $Enums.AcaoAtividade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAcaoAtividadeFilter<$PrismaModel>
    _max?: NestedEnumAcaoAtividadeFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type familia_usuariosCreateWithoutUsuarioInput = {
    rotulo?: $Enums.Rotulo
    familia: FamiliaCreateNestedOneWithoutUsuariosInput
  }

  export type familia_usuariosUncheckedCreateWithoutUsuarioInput = {
    id_familia: string
    rotulo?: $Enums.Rotulo
  }

  export type familia_usuariosCreateOrConnectWithoutUsuarioInput = {
    where: familia_usuariosWhereUniqueInput
    create: XOR<familia_usuariosCreateWithoutUsuarioInput, familia_usuariosUncheckedCreateWithoutUsuarioInput>
  }

  export type familia_usuariosCreateManyUsuarioInputEnvelope = {
    data: familia_usuariosCreateManyUsuarioInput | familia_usuariosCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type LembreteCreateWithoutUsuarioEnviouInput = {
    id?: string
    descricao: string
    dataHora?: Date | string
    status?: boolean
    listaDeCompra: ListaDeCompraCreateNestedOneWithoutLembretesInput
    veiculo: VeiculoCreateNestedOneWithoutLembreteInput
    atividades?: AtividadeCreateNestedManyWithoutLembreteInput
  }

  export type LembreteUncheckedCreateWithoutUsuarioEnviouInput = {
    id?: string
    descricao: string
    dataHora?: Date | string
    status?: boolean
    listaDeCompraId: string
    veiculoId: string
    atividades?: AtividadeUncheckedCreateNestedManyWithoutLembreteInput
  }

  export type LembreteCreateOrConnectWithoutUsuarioEnviouInput = {
    where: LembreteWhereUniqueInput
    create: XOR<LembreteCreateWithoutUsuarioEnviouInput, LembreteUncheckedCreateWithoutUsuarioEnviouInput>
  }

  export type LembreteCreateManyUsuarioEnviouInputEnvelope = {
    data: LembreteCreateManyUsuarioEnviouInput | LembreteCreateManyUsuarioEnviouInput[]
    skipDuplicates?: boolean
  }

  export type ListaDeCompraCreateWithoutUsuarioEnviouInput = {
    id?: string
    tipo: string
    status?: boolean
    itens?: ItemListaDeCompraCreateNestedManyWithoutListaInput
    lembretes?: LembreteCreateNestedManyWithoutListaDeCompraInput
    atividades?: AtividadeCreateNestedManyWithoutListaInput
  }

  export type ListaDeCompraUncheckedCreateWithoutUsuarioEnviouInput = {
    id?: string
    tipo: string
    status?: boolean
    itens?: ItemListaDeCompraUncheckedCreateNestedManyWithoutListaInput
    lembretes?: LembreteUncheckedCreateNestedManyWithoutListaDeCompraInput
    atividades?: AtividadeUncheckedCreateNestedManyWithoutListaInput
  }

  export type ListaDeCompraCreateOrConnectWithoutUsuarioEnviouInput = {
    where: ListaDeCompraWhereUniqueInput
    create: XOR<ListaDeCompraCreateWithoutUsuarioEnviouInput, ListaDeCompraUncheckedCreateWithoutUsuarioEnviouInput>
  }

  export type ListaDeCompraCreateManyUsuarioEnviouInputEnvelope = {
    data: ListaDeCompraCreateManyUsuarioEnviouInput | ListaDeCompraCreateManyUsuarioEnviouInput[]
    skipDuplicates?: boolean
  }

  export type VeiculoCreateWithoutUsuarioInput = {
    id?: string
    marca: string
    modelo: string
    ano: number
    placa: string
    Lembrete?: LembreteCreateNestedManyWithoutVeiculoInput
    manutencoes?: RegistroDeManutencaoCreateNestedManyWithoutVeiculoInput
    atividades?: AtividadeCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculoUncheckedCreateWithoutUsuarioInput = {
    id?: string
    marca: string
    modelo: string
    ano: number
    placa: string
    Lembrete?: LembreteUncheckedCreateNestedManyWithoutVeiculoInput
    manutencoes?: RegistroDeManutencaoUncheckedCreateNestedManyWithoutVeiculoInput
    atividades?: AtividadeUncheckedCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculoCreateOrConnectWithoutUsuarioInput = {
    where: VeiculoWhereUniqueInput
    create: XOR<VeiculoCreateWithoutUsuarioInput, VeiculoUncheckedCreateWithoutUsuarioInput>
  }

  export type VeiculoCreateManyUsuarioInputEnvelope = {
    data: VeiculoCreateManyUsuarioInput | VeiculoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type TarefaCreateWithoutUsuarioInput = {
    id?: string
    descricao: string
    status?: boolean
    atividades?: AtividadeCreateNestedManyWithoutTarefaInput
  }

  export type TarefaUncheckedCreateWithoutUsuarioInput = {
    id?: string
    descricao: string
    status?: boolean
    atividades?: AtividadeUncheckedCreateNestedManyWithoutTarefaInput
  }

  export type TarefaCreateOrConnectWithoutUsuarioInput = {
    where: TarefaWhereUniqueInput
    create: XOR<TarefaCreateWithoutUsuarioInput, TarefaUncheckedCreateWithoutUsuarioInput>
  }

  export type TarefaCreateManyUsuarioInputEnvelope = {
    data: TarefaCreateManyUsuarioInput | TarefaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type familia_usuariosUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: familia_usuariosWhereUniqueInput
    update: XOR<familia_usuariosUpdateWithoutUsuarioInput, familia_usuariosUncheckedUpdateWithoutUsuarioInput>
    create: XOR<familia_usuariosCreateWithoutUsuarioInput, familia_usuariosUncheckedCreateWithoutUsuarioInput>
  }

  export type familia_usuariosUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: familia_usuariosWhereUniqueInput
    data: XOR<familia_usuariosUpdateWithoutUsuarioInput, familia_usuariosUncheckedUpdateWithoutUsuarioInput>
  }

  export type familia_usuariosUpdateManyWithWhereWithoutUsuarioInput = {
    where: familia_usuariosScalarWhereInput
    data: XOR<familia_usuariosUpdateManyMutationInput, familia_usuariosUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type familia_usuariosScalarWhereInput = {
    AND?: familia_usuariosScalarWhereInput | familia_usuariosScalarWhereInput[]
    OR?: familia_usuariosScalarWhereInput[]
    NOT?: familia_usuariosScalarWhereInput | familia_usuariosScalarWhereInput[]
    id_usuario?: UuidFilter<"familia_usuarios"> | string
    id_familia?: UuidFilter<"familia_usuarios"> | string
    rotulo?: EnumRotuloFilter<"familia_usuarios"> | $Enums.Rotulo
  }

  export type LembreteUpsertWithWhereUniqueWithoutUsuarioEnviouInput = {
    where: LembreteWhereUniqueInput
    update: XOR<LembreteUpdateWithoutUsuarioEnviouInput, LembreteUncheckedUpdateWithoutUsuarioEnviouInput>
    create: XOR<LembreteCreateWithoutUsuarioEnviouInput, LembreteUncheckedCreateWithoutUsuarioEnviouInput>
  }

  export type LembreteUpdateWithWhereUniqueWithoutUsuarioEnviouInput = {
    where: LembreteWhereUniqueInput
    data: XOR<LembreteUpdateWithoutUsuarioEnviouInput, LembreteUncheckedUpdateWithoutUsuarioEnviouInput>
  }

  export type LembreteUpdateManyWithWhereWithoutUsuarioEnviouInput = {
    where: LembreteScalarWhereInput
    data: XOR<LembreteUpdateManyMutationInput, LembreteUncheckedUpdateManyWithoutUsuarioEnviouInput>
  }

  export type LembreteScalarWhereInput = {
    AND?: LembreteScalarWhereInput | LembreteScalarWhereInput[]
    OR?: LembreteScalarWhereInput[]
    NOT?: LembreteScalarWhereInput | LembreteScalarWhereInput[]
    id?: UuidFilter<"Lembrete"> | string
    descricao?: StringFilter<"Lembrete"> | string
    dataHora?: DateTimeFilter<"Lembrete"> | Date | string
    status?: BoolFilter<"Lembrete"> | boolean
    usuarioIdEnviou?: UuidFilter<"Lembrete"> | string
    listaDeCompraId?: UuidFilter<"Lembrete"> | string
    veiculoId?: UuidFilter<"Lembrete"> | string
  }

  export type ListaDeCompraUpsertWithWhereUniqueWithoutUsuarioEnviouInput = {
    where: ListaDeCompraWhereUniqueInput
    update: XOR<ListaDeCompraUpdateWithoutUsuarioEnviouInput, ListaDeCompraUncheckedUpdateWithoutUsuarioEnviouInput>
    create: XOR<ListaDeCompraCreateWithoutUsuarioEnviouInput, ListaDeCompraUncheckedCreateWithoutUsuarioEnviouInput>
  }

  export type ListaDeCompraUpdateWithWhereUniqueWithoutUsuarioEnviouInput = {
    where: ListaDeCompraWhereUniqueInput
    data: XOR<ListaDeCompraUpdateWithoutUsuarioEnviouInput, ListaDeCompraUncheckedUpdateWithoutUsuarioEnviouInput>
  }

  export type ListaDeCompraUpdateManyWithWhereWithoutUsuarioEnviouInput = {
    where: ListaDeCompraScalarWhereInput
    data: XOR<ListaDeCompraUpdateManyMutationInput, ListaDeCompraUncheckedUpdateManyWithoutUsuarioEnviouInput>
  }

  export type ListaDeCompraScalarWhereInput = {
    AND?: ListaDeCompraScalarWhereInput | ListaDeCompraScalarWhereInput[]
    OR?: ListaDeCompraScalarWhereInput[]
    NOT?: ListaDeCompraScalarWhereInput | ListaDeCompraScalarWhereInput[]
    id?: UuidFilter<"ListaDeCompra"> | string
    tipo?: StringFilter<"ListaDeCompra"> | string
    usuarioIdEnviou?: UuidFilter<"ListaDeCompra"> | string
    status?: BoolFilter<"ListaDeCompra"> | boolean
  }

  export type VeiculoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: VeiculoWhereUniqueInput
    update: XOR<VeiculoUpdateWithoutUsuarioInput, VeiculoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<VeiculoCreateWithoutUsuarioInput, VeiculoUncheckedCreateWithoutUsuarioInput>
  }

  export type VeiculoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: VeiculoWhereUniqueInput
    data: XOR<VeiculoUpdateWithoutUsuarioInput, VeiculoUncheckedUpdateWithoutUsuarioInput>
  }

  export type VeiculoUpdateManyWithWhereWithoutUsuarioInput = {
    where: VeiculoScalarWhereInput
    data: XOR<VeiculoUpdateManyMutationInput, VeiculoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type VeiculoScalarWhereInput = {
    AND?: VeiculoScalarWhereInput | VeiculoScalarWhereInput[]
    OR?: VeiculoScalarWhereInput[]
    NOT?: VeiculoScalarWhereInput | VeiculoScalarWhereInput[]
    id?: UuidFilter<"Veiculo"> | string
    marca?: StringFilter<"Veiculo"> | string
    modelo?: StringFilter<"Veiculo"> | string
    ano?: IntFilter<"Veiculo"> | number
    placa?: StringFilter<"Veiculo"> | string
    usuarioId?: UuidFilter<"Veiculo"> | string
  }

  export type TarefaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: TarefaWhereUniqueInput
    update: XOR<TarefaUpdateWithoutUsuarioInput, TarefaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<TarefaCreateWithoutUsuarioInput, TarefaUncheckedCreateWithoutUsuarioInput>
  }

  export type TarefaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: TarefaWhereUniqueInput
    data: XOR<TarefaUpdateWithoutUsuarioInput, TarefaUncheckedUpdateWithoutUsuarioInput>
  }

  export type TarefaUpdateManyWithWhereWithoutUsuarioInput = {
    where: TarefaScalarWhereInput
    data: XOR<TarefaUpdateManyMutationInput, TarefaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type TarefaScalarWhereInput = {
    AND?: TarefaScalarWhereInput | TarefaScalarWhereInput[]
    OR?: TarefaScalarWhereInput[]
    NOT?: TarefaScalarWhereInput | TarefaScalarWhereInput[]
    id?: UuidFilter<"Tarefa"> | string
    descricao?: StringFilter<"Tarefa"> | string
    status?: BoolFilter<"Tarefa"> | boolean
    usuarioId?: UuidFilter<"Tarefa"> | string
  }

  export type familia_usuariosCreateWithoutFamiliaInput = {
    rotulo?: $Enums.Rotulo
    usuario: UsuarioCreateNestedOneWithoutFamiliasInput
  }

  export type familia_usuariosUncheckedCreateWithoutFamiliaInput = {
    id_usuario: string
    rotulo?: $Enums.Rotulo
  }

  export type familia_usuariosCreateOrConnectWithoutFamiliaInput = {
    where: familia_usuariosWhereUniqueInput
    create: XOR<familia_usuariosCreateWithoutFamiliaInput, familia_usuariosUncheckedCreateWithoutFamiliaInput>
  }

  export type familia_usuariosCreateManyFamiliaInputEnvelope = {
    data: familia_usuariosCreateManyFamiliaInput | familia_usuariosCreateManyFamiliaInput[]
    skipDuplicates?: boolean
  }

  export type familia_usuariosUpsertWithWhereUniqueWithoutFamiliaInput = {
    where: familia_usuariosWhereUniqueInput
    update: XOR<familia_usuariosUpdateWithoutFamiliaInput, familia_usuariosUncheckedUpdateWithoutFamiliaInput>
    create: XOR<familia_usuariosCreateWithoutFamiliaInput, familia_usuariosUncheckedCreateWithoutFamiliaInput>
  }

  export type familia_usuariosUpdateWithWhereUniqueWithoutFamiliaInput = {
    where: familia_usuariosWhereUniqueInput
    data: XOR<familia_usuariosUpdateWithoutFamiliaInput, familia_usuariosUncheckedUpdateWithoutFamiliaInput>
  }

  export type familia_usuariosUpdateManyWithWhereWithoutFamiliaInput = {
    where: familia_usuariosScalarWhereInput
    data: XOR<familia_usuariosUpdateManyMutationInput, familia_usuariosUncheckedUpdateManyWithoutFamiliaInput>
  }

  export type FamiliaCreateWithoutUsuariosInput = {
    id?: string
    nome: string
    usuarioId: string
  }

  export type FamiliaUncheckedCreateWithoutUsuariosInput = {
    id?: string
    nome: string
    usuarioId: string
  }

  export type FamiliaCreateOrConnectWithoutUsuariosInput = {
    where: FamiliaWhereUniqueInput
    create: XOR<FamiliaCreateWithoutUsuariosInput, FamiliaUncheckedCreateWithoutUsuariosInput>
  }

  export type UsuarioCreateWithoutFamiliasInput = {
    id?: string
    name: string
    email: string
    password: string
    lembretesEnviados?: LembreteCreateNestedManyWithoutUsuarioEnviouInput
    listasEnviadas?: ListaDeCompraCreateNestedManyWithoutUsuarioEnviouInput
    veiculos?: VeiculoCreateNestedManyWithoutUsuarioInput
    tarefas?: TarefaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutFamiliasInput = {
    id?: string
    name: string
    email: string
    password: string
    lembretesEnviados?: LembreteUncheckedCreateNestedManyWithoutUsuarioEnviouInput
    listasEnviadas?: ListaDeCompraUncheckedCreateNestedManyWithoutUsuarioEnviouInput
    veiculos?: VeiculoUncheckedCreateNestedManyWithoutUsuarioInput
    tarefas?: TarefaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutFamiliasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutFamiliasInput, UsuarioUncheckedCreateWithoutFamiliasInput>
  }

  export type FamiliaUpsertWithoutUsuariosInput = {
    update: XOR<FamiliaUpdateWithoutUsuariosInput, FamiliaUncheckedUpdateWithoutUsuariosInput>
    create: XOR<FamiliaCreateWithoutUsuariosInput, FamiliaUncheckedCreateWithoutUsuariosInput>
    where?: FamiliaWhereInput
  }

  export type FamiliaUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: FamiliaWhereInput
    data: XOR<FamiliaUpdateWithoutUsuariosInput, FamiliaUncheckedUpdateWithoutUsuariosInput>
  }

  export type FamiliaUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type FamiliaUncheckedUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUpsertWithoutFamiliasInput = {
    update: XOR<UsuarioUpdateWithoutFamiliasInput, UsuarioUncheckedUpdateWithoutFamiliasInput>
    create: XOR<UsuarioCreateWithoutFamiliasInput, UsuarioUncheckedCreateWithoutFamiliasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutFamiliasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutFamiliasInput, UsuarioUncheckedUpdateWithoutFamiliasInput>
  }

  export type UsuarioUpdateWithoutFamiliasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lembretesEnviados?: LembreteUpdateManyWithoutUsuarioEnviouNestedInput
    listasEnviadas?: ListaDeCompraUpdateManyWithoutUsuarioEnviouNestedInput
    veiculos?: VeiculoUpdateManyWithoutUsuarioNestedInput
    tarefas?: TarefaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutFamiliasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lembretesEnviados?: LembreteUncheckedUpdateManyWithoutUsuarioEnviouNestedInput
    listasEnviadas?: ListaDeCompraUncheckedUpdateManyWithoutUsuarioEnviouNestedInput
    veiculos?: VeiculoUncheckedUpdateManyWithoutUsuarioNestedInput
    tarefas?: TarefaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateWithoutListasEnviadasInput = {
    id?: string
    name: string
    email: string
    password: string
    familias?: familia_usuariosCreateNestedManyWithoutUsuarioInput
    lembretesEnviados?: LembreteCreateNestedManyWithoutUsuarioEnviouInput
    veiculos?: VeiculoCreateNestedManyWithoutUsuarioInput
    tarefas?: TarefaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutListasEnviadasInput = {
    id?: string
    name: string
    email: string
    password: string
    familias?: familia_usuariosUncheckedCreateNestedManyWithoutUsuarioInput
    lembretesEnviados?: LembreteUncheckedCreateNestedManyWithoutUsuarioEnviouInput
    veiculos?: VeiculoUncheckedCreateNestedManyWithoutUsuarioInput
    tarefas?: TarefaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutListasEnviadasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutListasEnviadasInput, UsuarioUncheckedCreateWithoutListasEnviadasInput>
  }

  export type ItemListaDeCompraCreateWithoutListaInput = {
    id?: string
    descricao: string
    quantidade: number
    comprado?: boolean
  }

  export type ItemListaDeCompraUncheckedCreateWithoutListaInput = {
    id?: string
    descricao: string
    quantidade: number
    comprado?: boolean
  }

  export type ItemListaDeCompraCreateOrConnectWithoutListaInput = {
    where: ItemListaDeCompraWhereUniqueInput
    create: XOR<ItemListaDeCompraCreateWithoutListaInput, ItemListaDeCompraUncheckedCreateWithoutListaInput>
  }

  export type ItemListaDeCompraCreateManyListaInputEnvelope = {
    data: ItemListaDeCompraCreateManyListaInput | ItemListaDeCompraCreateManyListaInput[]
    skipDuplicates?: boolean
  }

  export type LembreteCreateWithoutListaDeCompraInput = {
    id?: string
    descricao: string
    dataHora?: Date | string
    status?: boolean
    usuarioEnviou: UsuarioCreateNestedOneWithoutLembretesEnviadosInput
    veiculo: VeiculoCreateNestedOneWithoutLembreteInput
    atividades?: AtividadeCreateNestedManyWithoutLembreteInput
  }

  export type LembreteUncheckedCreateWithoutListaDeCompraInput = {
    id?: string
    descricao: string
    dataHora?: Date | string
    status?: boolean
    usuarioIdEnviou: string
    veiculoId: string
    atividades?: AtividadeUncheckedCreateNestedManyWithoutLembreteInput
  }

  export type LembreteCreateOrConnectWithoutListaDeCompraInput = {
    where: LembreteWhereUniqueInput
    create: XOR<LembreteCreateWithoutListaDeCompraInput, LembreteUncheckedCreateWithoutListaDeCompraInput>
  }

  export type LembreteCreateManyListaDeCompraInputEnvelope = {
    data: LembreteCreateManyListaDeCompraInput | LembreteCreateManyListaDeCompraInput[]
    skipDuplicates?: boolean
  }

  export type AtividadeCreateWithoutListaInput = {
    id?: string
    tipo: $Enums.TipoAtividade
    acao: $Enums.AcaoAtividade
    datHora?: Date | string
    tarefa?: TarefaCreateNestedOneWithoutAtividadesInput
    lembrete?: LembreteCreateNestedOneWithoutAtividadesInput
    veiculo?: VeiculoCreateNestedOneWithoutAtividadesInput
  }

  export type AtividadeUncheckedCreateWithoutListaInput = {
    id?: string
    tipo: $Enums.TipoAtividade
    acao: $Enums.AcaoAtividade
    datHora?: Date | string
    tarefaId?: string | null
    lembreteId?: string | null
    veiculoId?: string | null
  }

  export type AtividadeCreateOrConnectWithoutListaInput = {
    where: AtividadeWhereUniqueInput
    create: XOR<AtividadeCreateWithoutListaInput, AtividadeUncheckedCreateWithoutListaInput>
  }

  export type AtividadeCreateManyListaInputEnvelope = {
    data: AtividadeCreateManyListaInput | AtividadeCreateManyListaInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutListasEnviadasInput = {
    update: XOR<UsuarioUpdateWithoutListasEnviadasInput, UsuarioUncheckedUpdateWithoutListasEnviadasInput>
    create: XOR<UsuarioCreateWithoutListasEnviadasInput, UsuarioUncheckedCreateWithoutListasEnviadasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutListasEnviadasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutListasEnviadasInput, UsuarioUncheckedUpdateWithoutListasEnviadasInput>
  }

  export type UsuarioUpdateWithoutListasEnviadasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    familias?: familia_usuariosUpdateManyWithoutUsuarioNestedInput
    lembretesEnviados?: LembreteUpdateManyWithoutUsuarioEnviouNestedInput
    veiculos?: VeiculoUpdateManyWithoutUsuarioNestedInput
    tarefas?: TarefaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutListasEnviadasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    familias?: familia_usuariosUncheckedUpdateManyWithoutUsuarioNestedInput
    lembretesEnviados?: LembreteUncheckedUpdateManyWithoutUsuarioEnviouNestedInput
    veiculos?: VeiculoUncheckedUpdateManyWithoutUsuarioNestedInput
    tarefas?: TarefaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ItemListaDeCompraUpsertWithWhereUniqueWithoutListaInput = {
    where: ItemListaDeCompraWhereUniqueInput
    update: XOR<ItemListaDeCompraUpdateWithoutListaInput, ItemListaDeCompraUncheckedUpdateWithoutListaInput>
    create: XOR<ItemListaDeCompraCreateWithoutListaInput, ItemListaDeCompraUncheckedCreateWithoutListaInput>
  }

  export type ItemListaDeCompraUpdateWithWhereUniqueWithoutListaInput = {
    where: ItemListaDeCompraWhereUniqueInput
    data: XOR<ItemListaDeCompraUpdateWithoutListaInput, ItemListaDeCompraUncheckedUpdateWithoutListaInput>
  }

  export type ItemListaDeCompraUpdateManyWithWhereWithoutListaInput = {
    where: ItemListaDeCompraScalarWhereInput
    data: XOR<ItemListaDeCompraUpdateManyMutationInput, ItemListaDeCompraUncheckedUpdateManyWithoutListaInput>
  }

  export type ItemListaDeCompraScalarWhereInput = {
    AND?: ItemListaDeCompraScalarWhereInput | ItemListaDeCompraScalarWhereInput[]
    OR?: ItemListaDeCompraScalarWhereInput[]
    NOT?: ItemListaDeCompraScalarWhereInput | ItemListaDeCompraScalarWhereInput[]
    id?: UuidFilter<"ItemListaDeCompra"> | string
    descricao?: StringFilter<"ItemListaDeCompra"> | string
    quantidade?: IntFilter<"ItemListaDeCompra"> | number
    comprado?: BoolFilter<"ItemListaDeCompra"> | boolean
    listaId?: UuidFilter<"ItemListaDeCompra"> | string
  }

  export type LembreteUpsertWithWhereUniqueWithoutListaDeCompraInput = {
    where: LembreteWhereUniqueInput
    update: XOR<LembreteUpdateWithoutListaDeCompraInput, LembreteUncheckedUpdateWithoutListaDeCompraInput>
    create: XOR<LembreteCreateWithoutListaDeCompraInput, LembreteUncheckedCreateWithoutListaDeCompraInput>
  }

  export type LembreteUpdateWithWhereUniqueWithoutListaDeCompraInput = {
    where: LembreteWhereUniqueInput
    data: XOR<LembreteUpdateWithoutListaDeCompraInput, LembreteUncheckedUpdateWithoutListaDeCompraInput>
  }

  export type LembreteUpdateManyWithWhereWithoutListaDeCompraInput = {
    where: LembreteScalarWhereInput
    data: XOR<LembreteUpdateManyMutationInput, LembreteUncheckedUpdateManyWithoutListaDeCompraInput>
  }

  export type AtividadeUpsertWithWhereUniqueWithoutListaInput = {
    where: AtividadeWhereUniqueInput
    update: XOR<AtividadeUpdateWithoutListaInput, AtividadeUncheckedUpdateWithoutListaInput>
    create: XOR<AtividadeCreateWithoutListaInput, AtividadeUncheckedCreateWithoutListaInput>
  }

  export type AtividadeUpdateWithWhereUniqueWithoutListaInput = {
    where: AtividadeWhereUniqueInput
    data: XOR<AtividadeUpdateWithoutListaInput, AtividadeUncheckedUpdateWithoutListaInput>
  }

  export type AtividadeUpdateManyWithWhereWithoutListaInput = {
    where: AtividadeScalarWhereInput
    data: XOR<AtividadeUpdateManyMutationInput, AtividadeUncheckedUpdateManyWithoutListaInput>
  }

  export type AtividadeScalarWhereInput = {
    AND?: AtividadeScalarWhereInput | AtividadeScalarWhereInput[]
    OR?: AtividadeScalarWhereInput[]
    NOT?: AtividadeScalarWhereInput | AtividadeScalarWhereInput[]
    id?: UuidFilter<"Atividade"> | string
    tipo?: EnumTipoAtividadeFilter<"Atividade"> | $Enums.TipoAtividade
    acao?: EnumAcaoAtividadeFilter<"Atividade"> | $Enums.AcaoAtividade
    datHora?: DateTimeFilter<"Atividade"> | Date | string
    tarefaId?: UuidNullableFilter<"Atividade"> | string | null
    listaDeCompraId?: UuidNullableFilter<"Atividade"> | string | null
    lembreteId?: UuidNullableFilter<"Atividade"> | string | null
    veiculoId?: UuidNullableFilter<"Atividade"> | string | null
  }

  export type ListaDeCompraCreateWithoutItensInput = {
    id?: string
    tipo: string
    status?: boolean
    usuarioEnviou: UsuarioCreateNestedOneWithoutListasEnviadasInput
    lembretes?: LembreteCreateNestedManyWithoutListaDeCompraInput
    atividades?: AtividadeCreateNestedManyWithoutListaInput
  }

  export type ListaDeCompraUncheckedCreateWithoutItensInput = {
    id?: string
    tipo: string
    usuarioIdEnviou: string
    status?: boolean
    lembretes?: LembreteUncheckedCreateNestedManyWithoutListaDeCompraInput
    atividades?: AtividadeUncheckedCreateNestedManyWithoutListaInput
  }

  export type ListaDeCompraCreateOrConnectWithoutItensInput = {
    where: ListaDeCompraWhereUniqueInput
    create: XOR<ListaDeCompraCreateWithoutItensInput, ListaDeCompraUncheckedCreateWithoutItensInput>
  }

  export type ListaDeCompraUpsertWithoutItensInput = {
    update: XOR<ListaDeCompraUpdateWithoutItensInput, ListaDeCompraUncheckedUpdateWithoutItensInput>
    create: XOR<ListaDeCompraCreateWithoutItensInput, ListaDeCompraUncheckedCreateWithoutItensInput>
    where?: ListaDeCompraWhereInput
  }

  export type ListaDeCompraUpdateToOneWithWhereWithoutItensInput = {
    where?: ListaDeCompraWhereInput
    data: XOR<ListaDeCompraUpdateWithoutItensInput, ListaDeCompraUncheckedUpdateWithoutItensInput>
  }

  export type ListaDeCompraUpdateWithoutItensInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    usuarioEnviou?: UsuarioUpdateOneRequiredWithoutListasEnviadasNestedInput
    lembretes?: LembreteUpdateManyWithoutListaDeCompraNestedInput
    atividades?: AtividadeUpdateManyWithoutListaNestedInput
  }

  export type ListaDeCompraUncheckedUpdateWithoutItensInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    usuarioIdEnviou?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    lembretes?: LembreteUncheckedUpdateManyWithoutListaDeCompraNestedInput
    atividades?: AtividadeUncheckedUpdateManyWithoutListaNestedInput
  }

  export type UsuarioCreateWithoutVeiculosInput = {
    id?: string
    name: string
    email: string
    password: string
    familias?: familia_usuariosCreateNestedManyWithoutUsuarioInput
    lembretesEnviados?: LembreteCreateNestedManyWithoutUsuarioEnviouInput
    listasEnviadas?: ListaDeCompraCreateNestedManyWithoutUsuarioEnviouInput
    tarefas?: TarefaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutVeiculosInput = {
    id?: string
    name: string
    email: string
    password: string
    familias?: familia_usuariosUncheckedCreateNestedManyWithoutUsuarioInput
    lembretesEnviados?: LembreteUncheckedCreateNestedManyWithoutUsuarioEnviouInput
    listasEnviadas?: ListaDeCompraUncheckedCreateNestedManyWithoutUsuarioEnviouInput
    tarefas?: TarefaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutVeiculosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutVeiculosInput, UsuarioUncheckedCreateWithoutVeiculosInput>
  }

  export type LembreteCreateWithoutVeiculoInput = {
    id?: string
    descricao: string
    dataHora?: Date | string
    status?: boolean
    listaDeCompra: ListaDeCompraCreateNestedOneWithoutLembretesInput
    usuarioEnviou: UsuarioCreateNestedOneWithoutLembretesEnviadosInput
    atividades?: AtividadeCreateNestedManyWithoutLembreteInput
  }

  export type LembreteUncheckedCreateWithoutVeiculoInput = {
    id?: string
    descricao: string
    dataHora?: Date | string
    status?: boolean
    usuarioIdEnviou: string
    listaDeCompraId: string
    atividades?: AtividadeUncheckedCreateNestedManyWithoutLembreteInput
  }

  export type LembreteCreateOrConnectWithoutVeiculoInput = {
    where: LembreteWhereUniqueInput
    create: XOR<LembreteCreateWithoutVeiculoInput, LembreteUncheckedCreateWithoutVeiculoInput>
  }

  export type LembreteCreateManyVeiculoInputEnvelope = {
    data: LembreteCreateManyVeiculoInput | LembreteCreateManyVeiculoInput[]
    skipDuplicates?: boolean
  }

  export type RegistroDeManutencaoCreateWithoutVeiculoInput = {
    id?: string
    descricao?: string | null
    data: Date | string
    valor?: number | null
  }

  export type RegistroDeManutencaoUncheckedCreateWithoutVeiculoInput = {
    id?: string
    descricao?: string | null
    data: Date | string
    valor?: number | null
  }

  export type RegistroDeManutencaoCreateOrConnectWithoutVeiculoInput = {
    where: RegistroDeManutencaoWhereUniqueInput
    create: XOR<RegistroDeManutencaoCreateWithoutVeiculoInput, RegistroDeManutencaoUncheckedCreateWithoutVeiculoInput>
  }

  export type RegistroDeManutencaoCreateManyVeiculoInputEnvelope = {
    data: RegistroDeManutencaoCreateManyVeiculoInput | RegistroDeManutencaoCreateManyVeiculoInput[]
    skipDuplicates?: boolean
  }

  export type AtividadeCreateWithoutVeiculoInput = {
    id?: string
    tipo: $Enums.TipoAtividade
    acao: $Enums.AcaoAtividade
    datHora?: Date | string
    tarefa?: TarefaCreateNestedOneWithoutAtividadesInput
    lista?: ListaDeCompraCreateNestedOneWithoutAtividadesInput
    lembrete?: LembreteCreateNestedOneWithoutAtividadesInput
  }

  export type AtividadeUncheckedCreateWithoutVeiculoInput = {
    id?: string
    tipo: $Enums.TipoAtividade
    acao: $Enums.AcaoAtividade
    datHora?: Date | string
    tarefaId?: string | null
    listaDeCompraId?: string | null
    lembreteId?: string | null
  }

  export type AtividadeCreateOrConnectWithoutVeiculoInput = {
    where: AtividadeWhereUniqueInput
    create: XOR<AtividadeCreateWithoutVeiculoInput, AtividadeUncheckedCreateWithoutVeiculoInput>
  }

  export type AtividadeCreateManyVeiculoInputEnvelope = {
    data: AtividadeCreateManyVeiculoInput | AtividadeCreateManyVeiculoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutVeiculosInput = {
    update: XOR<UsuarioUpdateWithoutVeiculosInput, UsuarioUncheckedUpdateWithoutVeiculosInput>
    create: XOR<UsuarioCreateWithoutVeiculosInput, UsuarioUncheckedCreateWithoutVeiculosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutVeiculosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutVeiculosInput, UsuarioUncheckedUpdateWithoutVeiculosInput>
  }

  export type UsuarioUpdateWithoutVeiculosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    familias?: familia_usuariosUpdateManyWithoutUsuarioNestedInput
    lembretesEnviados?: LembreteUpdateManyWithoutUsuarioEnviouNestedInput
    listasEnviadas?: ListaDeCompraUpdateManyWithoutUsuarioEnviouNestedInput
    tarefas?: TarefaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutVeiculosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    familias?: familia_usuariosUncheckedUpdateManyWithoutUsuarioNestedInput
    lembretesEnviados?: LembreteUncheckedUpdateManyWithoutUsuarioEnviouNestedInput
    listasEnviadas?: ListaDeCompraUncheckedUpdateManyWithoutUsuarioEnviouNestedInput
    tarefas?: TarefaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type LembreteUpsertWithWhereUniqueWithoutVeiculoInput = {
    where: LembreteWhereUniqueInput
    update: XOR<LembreteUpdateWithoutVeiculoInput, LembreteUncheckedUpdateWithoutVeiculoInput>
    create: XOR<LembreteCreateWithoutVeiculoInput, LembreteUncheckedCreateWithoutVeiculoInput>
  }

  export type LembreteUpdateWithWhereUniqueWithoutVeiculoInput = {
    where: LembreteWhereUniqueInput
    data: XOR<LembreteUpdateWithoutVeiculoInput, LembreteUncheckedUpdateWithoutVeiculoInput>
  }

  export type LembreteUpdateManyWithWhereWithoutVeiculoInput = {
    where: LembreteScalarWhereInput
    data: XOR<LembreteUpdateManyMutationInput, LembreteUncheckedUpdateManyWithoutVeiculoInput>
  }

  export type RegistroDeManutencaoUpsertWithWhereUniqueWithoutVeiculoInput = {
    where: RegistroDeManutencaoWhereUniqueInput
    update: XOR<RegistroDeManutencaoUpdateWithoutVeiculoInput, RegistroDeManutencaoUncheckedUpdateWithoutVeiculoInput>
    create: XOR<RegistroDeManutencaoCreateWithoutVeiculoInput, RegistroDeManutencaoUncheckedCreateWithoutVeiculoInput>
  }

  export type RegistroDeManutencaoUpdateWithWhereUniqueWithoutVeiculoInput = {
    where: RegistroDeManutencaoWhereUniqueInput
    data: XOR<RegistroDeManutencaoUpdateWithoutVeiculoInput, RegistroDeManutencaoUncheckedUpdateWithoutVeiculoInput>
  }

  export type RegistroDeManutencaoUpdateManyWithWhereWithoutVeiculoInput = {
    where: RegistroDeManutencaoScalarWhereInput
    data: XOR<RegistroDeManutencaoUpdateManyMutationInput, RegistroDeManutencaoUncheckedUpdateManyWithoutVeiculoInput>
  }

  export type RegistroDeManutencaoScalarWhereInput = {
    AND?: RegistroDeManutencaoScalarWhereInput | RegistroDeManutencaoScalarWhereInput[]
    OR?: RegistroDeManutencaoScalarWhereInput[]
    NOT?: RegistroDeManutencaoScalarWhereInput | RegistroDeManutencaoScalarWhereInput[]
    id?: UuidFilter<"RegistroDeManutencao"> | string
    descricao?: StringNullableFilter<"RegistroDeManutencao"> | string | null
    data?: DateTimeFilter<"RegistroDeManutencao"> | Date | string
    valor?: FloatNullableFilter<"RegistroDeManutencao"> | number | null
    veiculoId?: UuidFilter<"RegistroDeManutencao"> | string
  }

  export type AtividadeUpsertWithWhereUniqueWithoutVeiculoInput = {
    where: AtividadeWhereUniqueInput
    update: XOR<AtividadeUpdateWithoutVeiculoInput, AtividadeUncheckedUpdateWithoutVeiculoInput>
    create: XOR<AtividadeCreateWithoutVeiculoInput, AtividadeUncheckedCreateWithoutVeiculoInput>
  }

  export type AtividadeUpdateWithWhereUniqueWithoutVeiculoInput = {
    where: AtividadeWhereUniqueInput
    data: XOR<AtividadeUpdateWithoutVeiculoInput, AtividadeUncheckedUpdateWithoutVeiculoInput>
  }

  export type AtividadeUpdateManyWithWhereWithoutVeiculoInput = {
    where: AtividadeScalarWhereInput
    data: XOR<AtividadeUpdateManyMutationInput, AtividadeUncheckedUpdateManyWithoutVeiculoInput>
  }

  export type VeiculoCreateWithoutManutencoesInput = {
    id?: string
    marca: string
    modelo: string
    ano: number
    placa: string
    usuario: UsuarioCreateNestedOneWithoutVeiculosInput
    Lembrete?: LembreteCreateNestedManyWithoutVeiculoInput
    atividades?: AtividadeCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculoUncheckedCreateWithoutManutencoesInput = {
    id?: string
    marca: string
    modelo: string
    ano: number
    placa: string
    usuarioId: string
    Lembrete?: LembreteUncheckedCreateNestedManyWithoutVeiculoInput
    atividades?: AtividadeUncheckedCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculoCreateOrConnectWithoutManutencoesInput = {
    where: VeiculoWhereUniqueInput
    create: XOR<VeiculoCreateWithoutManutencoesInput, VeiculoUncheckedCreateWithoutManutencoesInput>
  }

  export type VeiculoUpsertWithoutManutencoesInput = {
    update: XOR<VeiculoUpdateWithoutManutencoesInput, VeiculoUncheckedUpdateWithoutManutencoesInput>
    create: XOR<VeiculoCreateWithoutManutencoesInput, VeiculoUncheckedCreateWithoutManutencoesInput>
    where?: VeiculoWhereInput
  }

  export type VeiculoUpdateToOneWithWhereWithoutManutencoesInput = {
    where?: VeiculoWhereInput
    data: XOR<VeiculoUpdateWithoutManutencoesInput, VeiculoUncheckedUpdateWithoutManutencoesInput>
  }

  export type VeiculoUpdateWithoutManutencoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutVeiculosNestedInput
    Lembrete?: LembreteUpdateManyWithoutVeiculoNestedInput
    atividades?: AtividadeUpdateManyWithoutVeiculoNestedInput
  }

  export type VeiculoUncheckedUpdateWithoutManutencoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    Lembrete?: LembreteUncheckedUpdateManyWithoutVeiculoNestedInput
    atividades?: AtividadeUncheckedUpdateManyWithoutVeiculoNestedInput
  }

  export type ListaDeCompraCreateWithoutLembretesInput = {
    id?: string
    tipo: string
    status?: boolean
    usuarioEnviou: UsuarioCreateNestedOneWithoutListasEnviadasInput
    itens?: ItemListaDeCompraCreateNestedManyWithoutListaInput
    atividades?: AtividadeCreateNestedManyWithoutListaInput
  }

  export type ListaDeCompraUncheckedCreateWithoutLembretesInput = {
    id?: string
    tipo: string
    usuarioIdEnviou: string
    status?: boolean
    itens?: ItemListaDeCompraUncheckedCreateNestedManyWithoutListaInput
    atividades?: AtividadeUncheckedCreateNestedManyWithoutListaInput
  }

  export type ListaDeCompraCreateOrConnectWithoutLembretesInput = {
    where: ListaDeCompraWhereUniqueInput
    create: XOR<ListaDeCompraCreateWithoutLembretesInput, ListaDeCompraUncheckedCreateWithoutLembretesInput>
  }

  export type UsuarioCreateWithoutLembretesEnviadosInput = {
    id?: string
    name: string
    email: string
    password: string
    familias?: familia_usuariosCreateNestedManyWithoutUsuarioInput
    listasEnviadas?: ListaDeCompraCreateNestedManyWithoutUsuarioEnviouInput
    veiculos?: VeiculoCreateNestedManyWithoutUsuarioInput
    tarefas?: TarefaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutLembretesEnviadosInput = {
    id?: string
    name: string
    email: string
    password: string
    familias?: familia_usuariosUncheckedCreateNestedManyWithoutUsuarioInput
    listasEnviadas?: ListaDeCompraUncheckedCreateNestedManyWithoutUsuarioEnviouInput
    veiculos?: VeiculoUncheckedCreateNestedManyWithoutUsuarioInput
    tarefas?: TarefaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutLembretesEnviadosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutLembretesEnviadosInput, UsuarioUncheckedCreateWithoutLembretesEnviadosInput>
  }

  export type VeiculoCreateWithoutLembreteInput = {
    id?: string
    marca: string
    modelo: string
    ano: number
    placa: string
    usuario: UsuarioCreateNestedOneWithoutVeiculosInput
    manutencoes?: RegistroDeManutencaoCreateNestedManyWithoutVeiculoInput
    atividades?: AtividadeCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculoUncheckedCreateWithoutLembreteInput = {
    id?: string
    marca: string
    modelo: string
    ano: number
    placa: string
    usuarioId: string
    manutencoes?: RegistroDeManutencaoUncheckedCreateNestedManyWithoutVeiculoInput
    atividades?: AtividadeUncheckedCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculoCreateOrConnectWithoutLembreteInput = {
    where: VeiculoWhereUniqueInput
    create: XOR<VeiculoCreateWithoutLembreteInput, VeiculoUncheckedCreateWithoutLembreteInput>
  }

  export type AtividadeCreateWithoutLembreteInput = {
    id?: string
    tipo: $Enums.TipoAtividade
    acao: $Enums.AcaoAtividade
    datHora?: Date | string
    tarefa?: TarefaCreateNestedOneWithoutAtividadesInput
    lista?: ListaDeCompraCreateNestedOneWithoutAtividadesInput
    veiculo?: VeiculoCreateNestedOneWithoutAtividadesInput
  }

  export type AtividadeUncheckedCreateWithoutLembreteInput = {
    id?: string
    tipo: $Enums.TipoAtividade
    acao: $Enums.AcaoAtividade
    datHora?: Date | string
    tarefaId?: string | null
    listaDeCompraId?: string | null
    veiculoId?: string | null
  }

  export type AtividadeCreateOrConnectWithoutLembreteInput = {
    where: AtividadeWhereUniqueInput
    create: XOR<AtividadeCreateWithoutLembreteInput, AtividadeUncheckedCreateWithoutLembreteInput>
  }

  export type AtividadeCreateManyLembreteInputEnvelope = {
    data: AtividadeCreateManyLembreteInput | AtividadeCreateManyLembreteInput[]
    skipDuplicates?: boolean
  }

  export type ListaDeCompraUpsertWithoutLembretesInput = {
    update: XOR<ListaDeCompraUpdateWithoutLembretesInput, ListaDeCompraUncheckedUpdateWithoutLembretesInput>
    create: XOR<ListaDeCompraCreateWithoutLembretesInput, ListaDeCompraUncheckedCreateWithoutLembretesInput>
    where?: ListaDeCompraWhereInput
  }

  export type ListaDeCompraUpdateToOneWithWhereWithoutLembretesInput = {
    where?: ListaDeCompraWhereInput
    data: XOR<ListaDeCompraUpdateWithoutLembretesInput, ListaDeCompraUncheckedUpdateWithoutLembretesInput>
  }

  export type ListaDeCompraUpdateWithoutLembretesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    usuarioEnviou?: UsuarioUpdateOneRequiredWithoutListasEnviadasNestedInput
    itens?: ItemListaDeCompraUpdateManyWithoutListaNestedInput
    atividades?: AtividadeUpdateManyWithoutListaNestedInput
  }

  export type ListaDeCompraUncheckedUpdateWithoutLembretesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    usuarioIdEnviou?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    itens?: ItemListaDeCompraUncheckedUpdateManyWithoutListaNestedInput
    atividades?: AtividadeUncheckedUpdateManyWithoutListaNestedInput
  }

  export type UsuarioUpsertWithoutLembretesEnviadosInput = {
    update: XOR<UsuarioUpdateWithoutLembretesEnviadosInput, UsuarioUncheckedUpdateWithoutLembretesEnviadosInput>
    create: XOR<UsuarioCreateWithoutLembretesEnviadosInput, UsuarioUncheckedCreateWithoutLembretesEnviadosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutLembretesEnviadosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutLembretesEnviadosInput, UsuarioUncheckedUpdateWithoutLembretesEnviadosInput>
  }

  export type UsuarioUpdateWithoutLembretesEnviadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    familias?: familia_usuariosUpdateManyWithoutUsuarioNestedInput
    listasEnviadas?: ListaDeCompraUpdateManyWithoutUsuarioEnviouNestedInput
    veiculos?: VeiculoUpdateManyWithoutUsuarioNestedInput
    tarefas?: TarefaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutLembretesEnviadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    familias?: familia_usuariosUncheckedUpdateManyWithoutUsuarioNestedInput
    listasEnviadas?: ListaDeCompraUncheckedUpdateManyWithoutUsuarioEnviouNestedInput
    veiculos?: VeiculoUncheckedUpdateManyWithoutUsuarioNestedInput
    tarefas?: TarefaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type VeiculoUpsertWithoutLembreteInput = {
    update: XOR<VeiculoUpdateWithoutLembreteInput, VeiculoUncheckedUpdateWithoutLembreteInput>
    create: XOR<VeiculoCreateWithoutLembreteInput, VeiculoUncheckedCreateWithoutLembreteInput>
    where?: VeiculoWhereInput
  }

  export type VeiculoUpdateToOneWithWhereWithoutLembreteInput = {
    where?: VeiculoWhereInput
    data: XOR<VeiculoUpdateWithoutLembreteInput, VeiculoUncheckedUpdateWithoutLembreteInput>
  }

  export type VeiculoUpdateWithoutLembreteInput = {
    id?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutVeiculosNestedInput
    manutencoes?: RegistroDeManutencaoUpdateManyWithoutVeiculoNestedInput
    atividades?: AtividadeUpdateManyWithoutVeiculoNestedInput
  }

  export type VeiculoUncheckedUpdateWithoutLembreteInput = {
    id?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    manutencoes?: RegistroDeManutencaoUncheckedUpdateManyWithoutVeiculoNestedInput
    atividades?: AtividadeUncheckedUpdateManyWithoutVeiculoNestedInput
  }

  export type AtividadeUpsertWithWhereUniqueWithoutLembreteInput = {
    where: AtividadeWhereUniqueInput
    update: XOR<AtividadeUpdateWithoutLembreteInput, AtividadeUncheckedUpdateWithoutLembreteInput>
    create: XOR<AtividadeCreateWithoutLembreteInput, AtividadeUncheckedCreateWithoutLembreteInput>
  }

  export type AtividadeUpdateWithWhereUniqueWithoutLembreteInput = {
    where: AtividadeWhereUniqueInput
    data: XOR<AtividadeUpdateWithoutLembreteInput, AtividadeUncheckedUpdateWithoutLembreteInput>
  }

  export type AtividadeUpdateManyWithWhereWithoutLembreteInput = {
    where: AtividadeScalarWhereInput
    data: XOR<AtividadeUpdateManyMutationInput, AtividadeUncheckedUpdateManyWithoutLembreteInput>
  }

  export type UsuarioCreateWithoutTarefasInput = {
    id?: string
    name: string
    email: string
    password: string
    familias?: familia_usuariosCreateNestedManyWithoutUsuarioInput
    lembretesEnviados?: LembreteCreateNestedManyWithoutUsuarioEnviouInput
    listasEnviadas?: ListaDeCompraCreateNestedManyWithoutUsuarioEnviouInput
    veiculos?: VeiculoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutTarefasInput = {
    id?: string
    name: string
    email: string
    password: string
    familias?: familia_usuariosUncheckedCreateNestedManyWithoutUsuarioInput
    lembretesEnviados?: LembreteUncheckedCreateNestedManyWithoutUsuarioEnviouInput
    listasEnviadas?: ListaDeCompraUncheckedCreateNestedManyWithoutUsuarioEnviouInput
    veiculos?: VeiculoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutTarefasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutTarefasInput, UsuarioUncheckedCreateWithoutTarefasInput>
  }

  export type AtividadeCreateWithoutTarefaInput = {
    id?: string
    tipo: $Enums.TipoAtividade
    acao: $Enums.AcaoAtividade
    datHora?: Date | string
    lista?: ListaDeCompraCreateNestedOneWithoutAtividadesInput
    lembrete?: LembreteCreateNestedOneWithoutAtividadesInput
    veiculo?: VeiculoCreateNestedOneWithoutAtividadesInput
  }

  export type AtividadeUncheckedCreateWithoutTarefaInput = {
    id?: string
    tipo: $Enums.TipoAtividade
    acao: $Enums.AcaoAtividade
    datHora?: Date | string
    listaDeCompraId?: string | null
    lembreteId?: string | null
    veiculoId?: string | null
  }

  export type AtividadeCreateOrConnectWithoutTarefaInput = {
    where: AtividadeWhereUniqueInput
    create: XOR<AtividadeCreateWithoutTarefaInput, AtividadeUncheckedCreateWithoutTarefaInput>
  }

  export type AtividadeCreateManyTarefaInputEnvelope = {
    data: AtividadeCreateManyTarefaInput | AtividadeCreateManyTarefaInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutTarefasInput = {
    update: XOR<UsuarioUpdateWithoutTarefasInput, UsuarioUncheckedUpdateWithoutTarefasInput>
    create: XOR<UsuarioCreateWithoutTarefasInput, UsuarioUncheckedCreateWithoutTarefasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutTarefasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutTarefasInput, UsuarioUncheckedUpdateWithoutTarefasInput>
  }

  export type UsuarioUpdateWithoutTarefasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    familias?: familia_usuariosUpdateManyWithoutUsuarioNestedInput
    lembretesEnviados?: LembreteUpdateManyWithoutUsuarioEnviouNestedInput
    listasEnviadas?: ListaDeCompraUpdateManyWithoutUsuarioEnviouNestedInput
    veiculos?: VeiculoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutTarefasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    familias?: familia_usuariosUncheckedUpdateManyWithoutUsuarioNestedInput
    lembretesEnviados?: LembreteUncheckedUpdateManyWithoutUsuarioEnviouNestedInput
    listasEnviadas?: ListaDeCompraUncheckedUpdateManyWithoutUsuarioEnviouNestedInput
    veiculos?: VeiculoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type AtividadeUpsertWithWhereUniqueWithoutTarefaInput = {
    where: AtividadeWhereUniqueInput
    update: XOR<AtividadeUpdateWithoutTarefaInput, AtividadeUncheckedUpdateWithoutTarefaInput>
    create: XOR<AtividadeCreateWithoutTarefaInput, AtividadeUncheckedCreateWithoutTarefaInput>
  }

  export type AtividadeUpdateWithWhereUniqueWithoutTarefaInput = {
    where: AtividadeWhereUniqueInput
    data: XOR<AtividadeUpdateWithoutTarefaInput, AtividadeUncheckedUpdateWithoutTarefaInput>
  }

  export type AtividadeUpdateManyWithWhereWithoutTarefaInput = {
    where: AtividadeScalarWhereInput
    data: XOR<AtividadeUpdateManyMutationInput, AtividadeUncheckedUpdateManyWithoutTarefaInput>
  }

  export type TarefaCreateWithoutAtividadesInput = {
    id?: string
    descricao: string
    status?: boolean
    usuario: UsuarioCreateNestedOneWithoutTarefasInput
  }

  export type TarefaUncheckedCreateWithoutAtividadesInput = {
    id?: string
    descricao: string
    status?: boolean
    usuarioId: string
  }

  export type TarefaCreateOrConnectWithoutAtividadesInput = {
    where: TarefaWhereUniqueInput
    create: XOR<TarefaCreateWithoutAtividadesInput, TarefaUncheckedCreateWithoutAtividadesInput>
  }

  export type ListaDeCompraCreateWithoutAtividadesInput = {
    id?: string
    tipo: string
    status?: boolean
    usuarioEnviou: UsuarioCreateNestedOneWithoutListasEnviadasInput
    itens?: ItemListaDeCompraCreateNestedManyWithoutListaInput
    lembretes?: LembreteCreateNestedManyWithoutListaDeCompraInput
  }

  export type ListaDeCompraUncheckedCreateWithoutAtividadesInput = {
    id?: string
    tipo: string
    usuarioIdEnviou: string
    status?: boolean
    itens?: ItemListaDeCompraUncheckedCreateNestedManyWithoutListaInput
    lembretes?: LembreteUncheckedCreateNestedManyWithoutListaDeCompraInput
  }

  export type ListaDeCompraCreateOrConnectWithoutAtividadesInput = {
    where: ListaDeCompraWhereUniqueInput
    create: XOR<ListaDeCompraCreateWithoutAtividadesInput, ListaDeCompraUncheckedCreateWithoutAtividadesInput>
  }

  export type LembreteCreateWithoutAtividadesInput = {
    id?: string
    descricao: string
    dataHora?: Date | string
    status?: boolean
    listaDeCompra: ListaDeCompraCreateNestedOneWithoutLembretesInput
    usuarioEnviou: UsuarioCreateNestedOneWithoutLembretesEnviadosInput
    veiculo: VeiculoCreateNestedOneWithoutLembreteInput
  }

  export type LembreteUncheckedCreateWithoutAtividadesInput = {
    id?: string
    descricao: string
    dataHora?: Date | string
    status?: boolean
    usuarioIdEnviou: string
    listaDeCompraId: string
    veiculoId: string
  }

  export type LembreteCreateOrConnectWithoutAtividadesInput = {
    where: LembreteWhereUniqueInput
    create: XOR<LembreteCreateWithoutAtividadesInput, LembreteUncheckedCreateWithoutAtividadesInput>
  }

  export type VeiculoCreateWithoutAtividadesInput = {
    id?: string
    marca: string
    modelo: string
    ano: number
    placa: string
    usuario: UsuarioCreateNestedOneWithoutVeiculosInput
    Lembrete?: LembreteCreateNestedManyWithoutVeiculoInput
    manutencoes?: RegistroDeManutencaoCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculoUncheckedCreateWithoutAtividadesInput = {
    id?: string
    marca: string
    modelo: string
    ano: number
    placa: string
    usuarioId: string
    Lembrete?: LembreteUncheckedCreateNestedManyWithoutVeiculoInput
    manutencoes?: RegistroDeManutencaoUncheckedCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculoCreateOrConnectWithoutAtividadesInput = {
    where: VeiculoWhereUniqueInput
    create: XOR<VeiculoCreateWithoutAtividadesInput, VeiculoUncheckedCreateWithoutAtividadesInput>
  }

  export type TarefaUpsertWithoutAtividadesInput = {
    update: XOR<TarefaUpdateWithoutAtividadesInput, TarefaUncheckedUpdateWithoutAtividadesInput>
    create: XOR<TarefaCreateWithoutAtividadesInput, TarefaUncheckedCreateWithoutAtividadesInput>
    where?: TarefaWhereInput
  }

  export type TarefaUpdateToOneWithWhereWithoutAtividadesInput = {
    where?: TarefaWhereInput
    data: XOR<TarefaUpdateWithoutAtividadesInput, TarefaUncheckedUpdateWithoutAtividadesInput>
  }

  export type TarefaUpdateWithoutAtividadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    usuario?: UsuarioUpdateOneRequiredWithoutTarefasNestedInput
  }

  export type TarefaUncheckedUpdateWithoutAtividadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type ListaDeCompraUpsertWithoutAtividadesInput = {
    update: XOR<ListaDeCompraUpdateWithoutAtividadesInput, ListaDeCompraUncheckedUpdateWithoutAtividadesInput>
    create: XOR<ListaDeCompraCreateWithoutAtividadesInput, ListaDeCompraUncheckedCreateWithoutAtividadesInput>
    where?: ListaDeCompraWhereInput
  }

  export type ListaDeCompraUpdateToOneWithWhereWithoutAtividadesInput = {
    where?: ListaDeCompraWhereInput
    data: XOR<ListaDeCompraUpdateWithoutAtividadesInput, ListaDeCompraUncheckedUpdateWithoutAtividadesInput>
  }

  export type ListaDeCompraUpdateWithoutAtividadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    usuarioEnviou?: UsuarioUpdateOneRequiredWithoutListasEnviadasNestedInput
    itens?: ItemListaDeCompraUpdateManyWithoutListaNestedInput
    lembretes?: LembreteUpdateManyWithoutListaDeCompraNestedInput
  }

  export type ListaDeCompraUncheckedUpdateWithoutAtividadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    usuarioIdEnviou?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    itens?: ItemListaDeCompraUncheckedUpdateManyWithoutListaNestedInput
    lembretes?: LembreteUncheckedUpdateManyWithoutListaDeCompraNestedInput
  }

  export type LembreteUpsertWithoutAtividadesInput = {
    update: XOR<LembreteUpdateWithoutAtividadesInput, LembreteUncheckedUpdateWithoutAtividadesInput>
    create: XOR<LembreteCreateWithoutAtividadesInput, LembreteUncheckedCreateWithoutAtividadesInput>
    where?: LembreteWhereInput
  }

  export type LembreteUpdateToOneWithWhereWithoutAtividadesInput = {
    where?: LembreteWhereInput
    data: XOR<LembreteUpdateWithoutAtividadesInput, LembreteUncheckedUpdateWithoutAtividadesInput>
  }

  export type LembreteUpdateWithoutAtividadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    listaDeCompra?: ListaDeCompraUpdateOneRequiredWithoutLembretesNestedInput
    usuarioEnviou?: UsuarioUpdateOneRequiredWithoutLembretesEnviadosNestedInput
    veiculo?: VeiculoUpdateOneRequiredWithoutLembreteNestedInput
  }

  export type LembreteUncheckedUpdateWithoutAtividadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    usuarioIdEnviou?: StringFieldUpdateOperationsInput | string
    listaDeCompraId?: StringFieldUpdateOperationsInput | string
    veiculoId?: StringFieldUpdateOperationsInput | string
  }

  export type VeiculoUpsertWithoutAtividadesInput = {
    update: XOR<VeiculoUpdateWithoutAtividadesInput, VeiculoUncheckedUpdateWithoutAtividadesInput>
    create: XOR<VeiculoCreateWithoutAtividadesInput, VeiculoUncheckedCreateWithoutAtividadesInput>
    where?: VeiculoWhereInput
  }

  export type VeiculoUpdateToOneWithWhereWithoutAtividadesInput = {
    where?: VeiculoWhereInput
    data: XOR<VeiculoUpdateWithoutAtividadesInput, VeiculoUncheckedUpdateWithoutAtividadesInput>
  }

  export type VeiculoUpdateWithoutAtividadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutVeiculosNestedInput
    Lembrete?: LembreteUpdateManyWithoutVeiculoNestedInput
    manutencoes?: RegistroDeManutencaoUpdateManyWithoutVeiculoNestedInput
  }

  export type VeiculoUncheckedUpdateWithoutAtividadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    Lembrete?: LembreteUncheckedUpdateManyWithoutVeiculoNestedInput
    manutencoes?: RegistroDeManutencaoUncheckedUpdateManyWithoutVeiculoNestedInput
  }

  export type familia_usuariosCreateManyUsuarioInput = {
    id_familia: string
    rotulo?: $Enums.Rotulo
  }

  export type LembreteCreateManyUsuarioEnviouInput = {
    id?: string
    descricao: string
    dataHora?: Date | string
    status?: boolean
    listaDeCompraId: string
    veiculoId: string
  }

  export type ListaDeCompraCreateManyUsuarioEnviouInput = {
    id?: string
    tipo: string
    status?: boolean
  }

  export type VeiculoCreateManyUsuarioInput = {
    id?: string
    marca: string
    modelo: string
    ano: number
    placa: string
  }

  export type TarefaCreateManyUsuarioInput = {
    id?: string
    descricao: string
    status?: boolean
  }

  export type familia_usuariosUpdateWithoutUsuarioInput = {
    rotulo?: EnumRotuloFieldUpdateOperationsInput | $Enums.Rotulo
    familia?: FamiliaUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type familia_usuariosUncheckedUpdateWithoutUsuarioInput = {
    id_familia?: StringFieldUpdateOperationsInput | string
    rotulo?: EnumRotuloFieldUpdateOperationsInput | $Enums.Rotulo
  }

  export type familia_usuariosUncheckedUpdateManyWithoutUsuarioInput = {
    id_familia?: StringFieldUpdateOperationsInput | string
    rotulo?: EnumRotuloFieldUpdateOperationsInput | $Enums.Rotulo
  }

  export type LembreteUpdateWithoutUsuarioEnviouInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    listaDeCompra?: ListaDeCompraUpdateOneRequiredWithoutLembretesNestedInput
    veiculo?: VeiculoUpdateOneRequiredWithoutLembreteNestedInput
    atividades?: AtividadeUpdateManyWithoutLembreteNestedInput
  }

  export type LembreteUncheckedUpdateWithoutUsuarioEnviouInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    listaDeCompraId?: StringFieldUpdateOperationsInput | string
    veiculoId?: StringFieldUpdateOperationsInput | string
    atividades?: AtividadeUncheckedUpdateManyWithoutLembreteNestedInput
  }

  export type LembreteUncheckedUpdateManyWithoutUsuarioEnviouInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    listaDeCompraId?: StringFieldUpdateOperationsInput | string
    veiculoId?: StringFieldUpdateOperationsInput | string
  }

  export type ListaDeCompraUpdateWithoutUsuarioEnviouInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    itens?: ItemListaDeCompraUpdateManyWithoutListaNestedInput
    lembretes?: LembreteUpdateManyWithoutListaDeCompraNestedInput
    atividades?: AtividadeUpdateManyWithoutListaNestedInput
  }

  export type ListaDeCompraUncheckedUpdateWithoutUsuarioEnviouInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    itens?: ItemListaDeCompraUncheckedUpdateManyWithoutListaNestedInput
    lembretes?: LembreteUncheckedUpdateManyWithoutListaDeCompraNestedInput
    atividades?: AtividadeUncheckedUpdateManyWithoutListaNestedInput
  }

  export type ListaDeCompraUncheckedUpdateManyWithoutUsuarioEnviouInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VeiculoUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    Lembrete?: LembreteUpdateManyWithoutVeiculoNestedInput
    manutencoes?: RegistroDeManutencaoUpdateManyWithoutVeiculoNestedInput
    atividades?: AtividadeUpdateManyWithoutVeiculoNestedInput
  }

  export type VeiculoUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    Lembrete?: LembreteUncheckedUpdateManyWithoutVeiculoNestedInput
    manutencoes?: RegistroDeManutencaoUncheckedUpdateManyWithoutVeiculoNestedInput
    atividades?: AtividadeUncheckedUpdateManyWithoutVeiculoNestedInput
  }

  export type VeiculoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
  }

  export type TarefaUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    atividades?: AtividadeUpdateManyWithoutTarefaNestedInput
  }

  export type TarefaUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    atividades?: AtividadeUncheckedUpdateManyWithoutTarefaNestedInput
  }

  export type TarefaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type familia_usuariosCreateManyFamiliaInput = {
    id_usuario: string
    rotulo?: $Enums.Rotulo
  }

  export type familia_usuariosUpdateWithoutFamiliaInput = {
    rotulo?: EnumRotuloFieldUpdateOperationsInput | $Enums.Rotulo
    usuario?: UsuarioUpdateOneRequiredWithoutFamiliasNestedInput
  }

  export type familia_usuariosUncheckedUpdateWithoutFamiliaInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    rotulo?: EnumRotuloFieldUpdateOperationsInput | $Enums.Rotulo
  }

  export type familia_usuariosUncheckedUpdateManyWithoutFamiliaInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    rotulo?: EnumRotuloFieldUpdateOperationsInput | $Enums.Rotulo
  }

  export type ItemListaDeCompraCreateManyListaInput = {
    id?: string
    descricao: string
    quantidade: number
    comprado?: boolean
  }

  export type LembreteCreateManyListaDeCompraInput = {
    id?: string
    descricao: string
    dataHora?: Date | string
    status?: boolean
    usuarioIdEnviou: string
    veiculoId: string
  }

  export type AtividadeCreateManyListaInput = {
    id?: string
    tipo: $Enums.TipoAtividade
    acao: $Enums.AcaoAtividade
    datHora?: Date | string
    tarefaId?: string | null
    lembreteId?: string | null
    veiculoId?: string | null
  }

  export type ItemListaDeCompraUpdateWithoutListaInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    comprado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ItemListaDeCompraUncheckedUpdateWithoutListaInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    comprado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ItemListaDeCompraUncheckedUpdateManyWithoutListaInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    comprado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LembreteUpdateWithoutListaDeCompraInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    usuarioEnviou?: UsuarioUpdateOneRequiredWithoutLembretesEnviadosNestedInput
    veiculo?: VeiculoUpdateOneRequiredWithoutLembreteNestedInput
    atividades?: AtividadeUpdateManyWithoutLembreteNestedInput
  }

  export type LembreteUncheckedUpdateWithoutListaDeCompraInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    usuarioIdEnviou?: StringFieldUpdateOperationsInput | string
    veiculoId?: StringFieldUpdateOperationsInput | string
    atividades?: AtividadeUncheckedUpdateManyWithoutLembreteNestedInput
  }

  export type LembreteUncheckedUpdateManyWithoutListaDeCompraInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    usuarioIdEnviou?: StringFieldUpdateOperationsInput | string
    veiculoId?: StringFieldUpdateOperationsInput | string
  }

  export type AtividadeUpdateWithoutListaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoAtividadeFieldUpdateOperationsInput | $Enums.TipoAtividade
    acao?: EnumAcaoAtividadeFieldUpdateOperationsInput | $Enums.AcaoAtividade
    datHora?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefa?: TarefaUpdateOneWithoutAtividadesNestedInput
    lembrete?: LembreteUpdateOneWithoutAtividadesNestedInput
    veiculo?: VeiculoUpdateOneWithoutAtividadesNestedInput
  }

  export type AtividadeUncheckedUpdateWithoutListaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoAtividadeFieldUpdateOperationsInput | $Enums.TipoAtividade
    acao?: EnumAcaoAtividadeFieldUpdateOperationsInput | $Enums.AcaoAtividade
    datHora?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefaId?: NullableStringFieldUpdateOperationsInput | string | null
    lembreteId?: NullableStringFieldUpdateOperationsInput | string | null
    veiculoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AtividadeUncheckedUpdateManyWithoutListaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoAtividadeFieldUpdateOperationsInput | $Enums.TipoAtividade
    acao?: EnumAcaoAtividadeFieldUpdateOperationsInput | $Enums.AcaoAtividade
    datHora?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefaId?: NullableStringFieldUpdateOperationsInput | string | null
    lembreteId?: NullableStringFieldUpdateOperationsInput | string | null
    veiculoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LembreteCreateManyVeiculoInput = {
    id?: string
    descricao: string
    dataHora?: Date | string
    status?: boolean
    usuarioIdEnviou: string
    listaDeCompraId: string
  }

  export type RegistroDeManutencaoCreateManyVeiculoInput = {
    id?: string
    descricao?: string | null
    data: Date | string
    valor?: number | null
  }

  export type AtividadeCreateManyVeiculoInput = {
    id?: string
    tipo: $Enums.TipoAtividade
    acao: $Enums.AcaoAtividade
    datHora?: Date | string
    tarefaId?: string | null
    listaDeCompraId?: string | null
    lembreteId?: string | null
  }

  export type LembreteUpdateWithoutVeiculoInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    listaDeCompra?: ListaDeCompraUpdateOneRequiredWithoutLembretesNestedInput
    usuarioEnviou?: UsuarioUpdateOneRequiredWithoutLembretesEnviadosNestedInput
    atividades?: AtividadeUpdateManyWithoutLembreteNestedInput
  }

  export type LembreteUncheckedUpdateWithoutVeiculoInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    usuarioIdEnviou?: StringFieldUpdateOperationsInput | string
    listaDeCompraId?: StringFieldUpdateOperationsInput | string
    atividades?: AtividadeUncheckedUpdateManyWithoutLembreteNestedInput
  }

  export type LembreteUncheckedUpdateManyWithoutVeiculoInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    usuarioIdEnviou?: StringFieldUpdateOperationsInput | string
    listaDeCompraId?: StringFieldUpdateOperationsInput | string
  }

  export type RegistroDeManutencaoUpdateWithoutVeiculoInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type RegistroDeManutencaoUncheckedUpdateWithoutVeiculoInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type RegistroDeManutencaoUncheckedUpdateManyWithoutVeiculoInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AtividadeUpdateWithoutVeiculoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoAtividadeFieldUpdateOperationsInput | $Enums.TipoAtividade
    acao?: EnumAcaoAtividadeFieldUpdateOperationsInput | $Enums.AcaoAtividade
    datHora?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefa?: TarefaUpdateOneWithoutAtividadesNestedInput
    lista?: ListaDeCompraUpdateOneWithoutAtividadesNestedInput
    lembrete?: LembreteUpdateOneWithoutAtividadesNestedInput
  }

  export type AtividadeUncheckedUpdateWithoutVeiculoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoAtividadeFieldUpdateOperationsInput | $Enums.TipoAtividade
    acao?: EnumAcaoAtividadeFieldUpdateOperationsInput | $Enums.AcaoAtividade
    datHora?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefaId?: NullableStringFieldUpdateOperationsInput | string | null
    listaDeCompraId?: NullableStringFieldUpdateOperationsInput | string | null
    lembreteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AtividadeUncheckedUpdateManyWithoutVeiculoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoAtividadeFieldUpdateOperationsInput | $Enums.TipoAtividade
    acao?: EnumAcaoAtividadeFieldUpdateOperationsInput | $Enums.AcaoAtividade
    datHora?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefaId?: NullableStringFieldUpdateOperationsInput | string | null
    listaDeCompraId?: NullableStringFieldUpdateOperationsInput | string | null
    lembreteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AtividadeCreateManyLembreteInput = {
    id?: string
    tipo: $Enums.TipoAtividade
    acao: $Enums.AcaoAtividade
    datHora?: Date | string
    tarefaId?: string | null
    listaDeCompraId?: string | null
    veiculoId?: string | null
  }

  export type AtividadeUpdateWithoutLembreteInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoAtividadeFieldUpdateOperationsInput | $Enums.TipoAtividade
    acao?: EnumAcaoAtividadeFieldUpdateOperationsInput | $Enums.AcaoAtividade
    datHora?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefa?: TarefaUpdateOneWithoutAtividadesNestedInput
    lista?: ListaDeCompraUpdateOneWithoutAtividadesNestedInput
    veiculo?: VeiculoUpdateOneWithoutAtividadesNestedInput
  }

  export type AtividadeUncheckedUpdateWithoutLembreteInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoAtividadeFieldUpdateOperationsInput | $Enums.TipoAtividade
    acao?: EnumAcaoAtividadeFieldUpdateOperationsInput | $Enums.AcaoAtividade
    datHora?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefaId?: NullableStringFieldUpdateOperationsInput | string | null
    listaDeCompraId?: NullableStringFieldUpdateOperationsInput | string | null
    veiculoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AtividadeUncheckedUpdateManyWithoutLembreteInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoAtividadeFieldUpdateOperationsInput | $Enums.TipoAtividade
    acao?: EnumAcaoAtividadeFieldUpdateOperationsInput | $Enums.AcaoAtividade
    datHora?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefaId?: NullableStringFieldUpdateOperationsInput | string | null
    listaDeCompraId?: NullableStringFieldUpdateOperationsInput | string | null
    veiculoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AtividadeCreateManyTarefaInput = {
    id?: string
    tipo: $Enums.TipoAtividade
    acao: $Enums.AcaoAtividade
    datHora?: Date | string
    listaDeCompraId?: string | null
    lembreteId?: string | null
    veiculoId?: string | null
  }

  export type AtividadeUpdateWithoutTarefaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoAtividadeFieldUpdateOperationsInput | $Enums.TipoAtividade
    acao?: EnumAcaoAtividadeFieldUpdateOperationsInput | $Enums.AcaoAtividade
    datHora?: DateTimeFieldUpdateOperationsInput | Date | string
    lista?: ListaDeCompraUpdateOneWithoutAtividadesNestedInput
    lembrete?: LembreteUpdateOneWithoutAtividadesNestedInput
    veiculo?: VeiculoUpdateOneWithoutAtividadesNestedInput
  }

  export type AtividadeUncheckedUpdateWithoutTarefaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoAtividadeFieldUpdateOperationsInput | $Enums.TipoAtividade
    acao?: EnumAcaoAtividadeFieldUpdateOperationsInput | $Enums.AcaoAtividade
    datHora?: DateTimeFieldUpdateOperationsInput | Date | string
    listaDeCompraId?: NullableStringFieldUpdateOperationsInput | string | null
    lembreteId?: NullableStringFieldUpdateOperationsInput | string | null
    veiculoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AtividadeUncheckedUpdateManyWithoutTarefaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoAtividadeFieldUpdateOperationsInput | $Enums.TipoAtividade
    acao?: EnumAcaoAtividadeFieldUpdateOperationsInput | $Enums.AcaoAtividade
    datHora?: DateTimeFieldUpdateOperationsInput | Date | string
    listaDeCompraId?: NullableStringFieldUpdateOperationsInput | string | null
    lembreteId?: NullableStringFieldUpdateOperationsInput | string | null
    veiculoId?: NullableStringFieldUpdateOperationsInput | string | null
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
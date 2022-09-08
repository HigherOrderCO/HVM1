/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function __wbg_runtime_free(a: number): void;
export function __wbg_reduced_free(a: number): void;
export function reduced_get_norm(a: number, b: number): void;
export function reduced_get_cost(a: number, b: number): void;
export function reduced_get_size(a: number, b: number): void;
export function reduced_get_time(a: number, b: number): void;
export function runtime_new(a: number): number;
export function runtime_from_code_with_size(a: number, b: number, c: number, d: number): void;
export function runtime_from_code(a: number, b: number, c: number): void;
export function runtime_define(a: number, b: number, c: number): void;
export function runtime_alloc_code(a: number, b: number, c: number, d: number): void;
export function runtime_at(a: number, b: number, c: number, d: number): void;
export function runtime_reduce(a: number, b: number, c: number): void;
export function runtime_normalize(a: number, b: number, c: number): void;
export function runtime_eval_to_loc(a: number, b: number, c: number, d: number): void;
export function runtime_eval(a: number, b: number, c: number, d: number): void;
export function runtime_show(a: number, b: number, c: number, d: number): void;
export function runtime_show_linear(a: number, b: number, c: number, d: number): void;
export function runtime_get_name(a: number, b: number, c: number, d: number): void;
export function runtime_get_arity(a: number, b: number, c: number, d: number): void;
export function runtime_get_id(a: number, b: number, c: number, d: number): void;
export function runtime_DP1(a: number): void;
export function runtime_ARG(a: number): void;
export function runtime_ERA(a: number): void;
export function runtime_APP(a: number): void;
export function runtime_SUP(a: number): void;
export function runtime_CTR(a: number): void;
export function runtime_FUN(a: number): void;
export function runtime_ADD(a: number): void;
export function runtime_MUL(a: number): void;
export function runtime_AND(a: number): void;
export function runtime_LTN(a: number): void;
export function runtime_LTE(a: number): void;
export function runtime_EQL(a: number): void;
export function runtime_GTE(a: number): void;
export function runtime_GTN(a: number): void;
export function runtime_NEQ(a: number): void;
export function runtime_get_tag(a: number, b: number, c: number): void;
export function runtime_get_ext(a: number, b: number, c: number): void;
export function runtime_get_val(a: number, b: number, c: number): void;
export function runtime_get_num(a: number, b: number, c: number): void;
export function runtime_get_loc(a: number, b: number, c: number, d: number, e: number): void;
export function runtime_Var(a: number, b: number, c: number): void;
export function runtime_Dp0(a: number, b: number, c: number, d: number, e: number): void;
export function runtime_Dp1(a: number, b: number, c: number, d: number, e: number): void;
export function runtime_Arg(a: number, b: number, c: number): void;
export function runtime_Era(a: number): void;
export function runtime_Lam(a: number, b: number, c: number): void;
export function runtime_App(a: number, b: number, c: number): void;
export function runtime_Par(a: number, b: number, c: number, d: number, e: number): void;
export function runtime_Op2(a: number, b: number, c: number, d: number, e: number): void;
export function runtime_Num(a: number, b: number, c: number): void;
export function runtime_Ctr(a: number, b: number, c: number, d: number, e: number): void;
export function runtime_Fun(a: number, b: number, c: number, d: number, e: number): void;
export function runtime_link(a: number, b: number, c: number, d: number, e: number, f: number): void;
export function runtime_alloc(a: number, b: number, c: number, d: number): void;
export function runtime_clear(a: number, b: number, c: number, d: number, e: number): void;
export function runtime_collect(a: number, b: number, c: number): void;
export function runtime_normalize_code(a: number, b: number, c: number, d: number): void;
export function runtime_DP0(a: number): void;
export function runtime_SUB(a: number): void;
export function runtime_VAR(a: number): void;
export function runtime_DIV(a: number): void;
export function runtime_MOD(a: number): void;
export function runtime_LAM(a: number): void;
export function runtime_OR(a: number): void;
export function runtime_XOR(a: number): void;
export function runtime_SHL(a: number): void;
export function runtime_SHR(a: number): void;
export function runtime_OP2(a: number): void;
export function runtime_NUM(a: number): void;
export function runtime_CELLS_PER_KB(): number;
export function runtime_CELLS_PER_MB(): number;
export function runtime_CELLS_PER_GB(): number;
export function runtime_get_rewrites(a: number, b: number): void;
export function __wbindgen_add_to_stack_pointer(a: number): number;
export function __wbindgen_free(a: number, b: number): void;
export function __wbindgen_malloc(a: number): number;
export function __wbindgen_realloc(a: number, b: number, c: number): number;

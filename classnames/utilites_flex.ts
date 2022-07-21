import {
  spaceSplit, stringsMap,
  SIZES_LIST
} from './lib'

// https://getbootstrap.com/docs/5.2/utilities/flex/
const [_, FLEX_, _REVERSE, CONTENT_, ALIGN_, ORDER_, SELF_, ITEMS_, JUSTIFY_] =
  spaceSplit('- flex- -reverse content- align- order- self- items- justify-')

const DIRS = spaceSplit('fill wrap nowrap row column')
DIRS.push(DIRS[1] + _REVERSE, DIRS[3] + _REVERSE, DIRS[4] + _REVERSE)
export const [
  FLEX_FILL,
  FLEX_WRAP,
  FLEX_NOWRAP,
  FLEX_ROW,
  FLEX_COLUMN,
  FLEX_WRAP_REVERSE,
  FLEX_ROW_REVERSE,
  FLEX_COLUMN_REVERSE,
] = stringsMap(DIRS, (v) => FLEX_ + v)
export const [
  FLEX_SM_FILL,
  FLEX_SM_WRAP,
  FLEX_SM_NOWRAP,
  FLEX_SM_ROW,
  FLEX_SM_COLUMN,
  FLEX_SM_WRAP_REVERSE,
  FLEX_SM_ROW_REVERSE,
  FLEX_SM_COLUMN_REVERSE,
] = stringsMap(DIRS, (v) => FLEX_ + SIZES_LIST[0] + _ + v)
export const [
  FLEX_MD_FILL,
  FLEX_MD_WRAP,
  FLEX_MD_NOWRAP,
  FLEX_MD_ROW,
  FLEX_MD_COLUMN,
  FLEX_MD_WRAP_REVERSE,
  FLEX_MD_ROW_REVERSE,
  FLEX_MD_COLUMN_REVERSE,
] = stringsMap(DIRS, (v) => FLEX_ + SIZES_LIST[1] + _ + v)
export const [
  FLEX_LG_FILL,
  FLEX_LG_WRAP,
  FLEX_LG_NOWRAP,
  FLEX_LG_ROW,
  FLEX_LG_COLUMN,
  FLEX_LG_WRAP_REVERSE,
  FLEX_LG_ROW_REVERSE,
  FLEX_LG_COLUMN_REVERSE,
] = stringsMap(DIRS, (v) => FLEX_ + SIZES_LIST[2] + _ + v)
export const [
  FLEX_XL_FILL,
  FLEX_XL_WRAP,
  FLEX_XL_NOWRAP,
  FLEX_XL_ROW,
  FLEX_XL_COLUMN,
  FLEX_XL_WRAP_REVERSE,
  FLEX_XL_ROW_REVERSE,
  FLEX_XL_COLUMN_REVERSE,
] = stringsMap(DIRS, (v) => FLEX_ + SIZES_LIST[3] + _ + v)
export const [
  FLEX_XXL_FILL,
  FLEX_XXL_WRAP,
  FLEX_XXL_NOWRAP,
  FLEX_XXL_ROW,
  FLEX_XXL_COLUMN,
  FLEX_XXL_WRAP_REVERSE,
  FLEX_XXL_ROW_REVERSE,
  FLEX_XXL_COLUMN_REVERSE,
] = stringsMap(DIRS, (v) => FLEX_ + SIZES_LIST[4] + _ + v)

const _N01_ = spaceSplit('0 1')
const GROWS = stringsMap(_N01_, (v) => 'grow-' + v)
const SHRINKS = stringsMap(_N01_, (v) => 'shrink-' + v)
export const [
  FLEX_GROW_0,
  FLEX_GROW_1,
] = stringsMap(GROWS, (v) => FLEX_ + v)
export const [
  FLEX_SM_GROW_0,
  FLEX_SM_GROW_1,
] = stringsMap(GROWS, (v) => FLEX_ + SIZES_LIST[0] + _ + v)
export const [
  FLEX_MD_GROW_0,
  FLEX_MD_GROW_1,
] = stringsMap(GROWS, (v) => FLEX_ + SIZES_LIST[1] + _ + v)
export const [
  FLEX_LG_GROW_0,
  FLEX_LG_GROW_1,
] = stringsMap(GROWS, (v) => FLEX_ + SIZES_LIST[2] + _ + v)
export const [
  FLEX_XL_GROW_0,
  FLEX_XL_GROW_1,
] = stringsMap(GROWS, (v) => FLEX_ + SIZES_LIST[3] + _ + v)
export const [
  FLEX_XXL_GROW_0,
  FLEX_XXL_GROW_1,
] = stringsMap(GROWS, (v) => FLEX_ + SIZES_LIST[4] + _ + v)

export const [
  FLEX_SHRINK_0,
  FLEX_SHRINK_1,
] = stringsMap(SHRINKS, (v) => FLEX_ + v)
export const [
  FLEX_SM_SHRINK_0,
  FLEX_SM_SHRINK_1,
] = stringsMap(SHRINKS, (v) => FLEX_ + SIZES_LIST[0] + _ + v)
export const [
  FLEX_MD_SHRINK_0,
  FLEX_MD_SHRINK_1,
] = stringsMap(SHRINKS, (v) => FLEX_ + SIZES_LIST[1] + _ + v)
export const [
  FLEX_LG_SHRINK_0,
  FLEX_LG_SHRINK_1,
] = stringsMap(SHRINKS, (v) => FLEX_ + SIZES_LIST[2] + _ + v)
export const [
  FLEX_XL_SHRINK_0,
  FLEX_XL_SHRINK_1,
] = stringsMap(SHRINKS, (v) => FLEX_ + SIZES_LIST[3] + _ + v)
export const [
  FLEX_XXL_SHRINK_0,
  FLEX_XXL_SHRINK_1,
] = stringsMap(SHRINKS, (v) => FLEX_ + SIZES_LIST[4] + _ + v)

const JC = spaceSplit('start end center between around evenly')
export const [
  JUSTIFY_CONTENT_START,
  JUSTIFY_CONTENT_END,
  JUSTIFY_CONTENT_CENTER,
  JUSTIFY_CONTENT_BETWEEN,
  JUSTIFY_CONTENT_AROUND,
  JUSTIFY_CONTENT_EVENLY,
] = stringsMap(JC, (v) => JUSTIFY_ + CONTENT_ + v)
export const [
  JUSTIFY_CONTENT_SM_START,
  JUSTIFY_CONTENT_SM_END,
  JUSTIFY_CONTENT_SM_CENTER,
  JUSTIFY_CONTENT_SM_BETWEEN,
  JUSTIFY_CONTENT_SM_AROUND,
  JUSTIFY_CONTENT_SM_EVENLY,
] = stringsMap(JC, (v) => JUSTIFY_ + CONTENT_ + SIZES_LIST[0] + _ + v)
export const [
  JUSTIFY_CONTENT_MD_START,
  JUSTIFY_CONTENT_MD_END,
  JUSTIFY_CONTENT_MD_CENTER,
  JUSTIFY_CONTENT_MD_BETWEEN,
  JUSTIFY_CONTENT_MD_AROUND,
  JUSTIFY_CONTENT_MD_EVENLY,
] = stringsMap(JC, (v) => JUSTIFY_ + CONTENT_ + SIZES_LIST[1] + _ + v)
export const [
  JUSTIFY_CONTENT_LG_START,
  JUSTIFY_CONTENT_LG_END,
  JUSTIFY_CONTENT_LG_CENTER,
  JUSTIFY_CONTENT_LG_BETWEEN,
  JUSTIFY_CONTENT_LG_AROUND,
  JUSTIFY_CONTENT_LG_EVENLY,
] = stringsMap(JC, (v) => JUSTIFY_ + CONTENT_ + SIZES_LIST[2] + _ + v)
export const [
  JUSTIFY_CONTENT_XL_START,
  JUSTIFY_CONTENT_XL_END,
  JUSTIFY_CONTENT_XL_CENTER,
  JUSTIFY_CONTENT_XL_BETWEEN,
  JUSTIFY_CONTENT_XL_AROUND,
  JUSTIFY_CONTENT_XL_EVENLY,
] = stringsMap(JC, (v) => JUSTIFY_ + CONTENT_ + SIZES_LIST[3] + _ + v)
export const [
  JUSTIFY_CONTENT_XXL_START,
  JUSTIFY_CONTENT_XXL_END,
  JUSTIFY_CONTENT_XXL_CENTER,
  JUSTIFY_CONTENT_XXL_BETWEEN,
  JUSTIFY_CONTENT_XXL_AROUND,
  JUSTIFY_CONTENT_XXL_EVENLY,
] = stringsMap(JC, (v) => JUSTIFY_ + CONTENT_ + SIZES_LIST[4] + _ + v)

const AI = spaceSplit('start end center baseline stretch auto')
export const [
  ALIGN_ITEMS_START,
  ALIGN_ITEMS_END,
  ALIGN_ITEMS_CENTER,
  ALIGN_ITEMS_BASELINE,
  ALIGN_ITEMS_STRETCH,
] = stringsMap(AI, (v) => ALIGN_ + ITEMS_ + v)
export const [
  ALIGN_ITEMS_SM_START,
  ALIGN_ITEMS_SM_END,
  ALIGN_ITEMS_SM_CENTER,
  ALIGN_ITEMS_SM_BASELINE,
  ALIGN_ITEMS_SM_STRETCH,
] = stringsMap(AI, (v) => ALIGN_ + ITEMS_ + SIZES_LIST[0] + _ + v)
export const [
  ALIGN_ITEMS_MD_START,
  ALIGN_ITEMS_MD_END,
  ALIGN_ITEMS_MD_CENTER,
  ALIGN_ITEMS_MD_BASELINE,
  ALIGN_ITEMS_MD_STRETCH,
] = stringsMap(AI, (v) => ALIGN_ + ITEMS_ + SIZES_LIST[1] + _ + v)
export const [
  ALIGN_ITEMS_LG_START,
  ALIGN_ITEMS_LG_END,
  ALIGN_ITEMS_LG_CENTER,
  ALIGN_ITEMS_LG_BASELINE,
  ALIGN_ITEMS_LG_STRETCH,
] = stringsMap(AI, (v) => ALIGN_ + ITEMS_ + SIZES_LIST[2] + _ + v)
export const [
  ALIGN_ITEMS_XL_START,
  ALIGN_ITEMS_XL_END,
  ALIGN_ITEMS_XL_CENTER,
  ALIGN_ITEMS_XL_BASELINE,
  ALIGN_ITEMS_XL_STRETCH,
] = stringsMap(AI, (v) => ALIGN_ + ITEMS_ + SIZES_LIST[3] + _ + v)
export const [
  ALIGN_ITEMS_XXL_START,
  ALIGN_ITEMS_XXL_END,
  ALIGN_ITEMS_XXL_CENTER,
  ALIGN_ITEMS_XXL_BASELINE,
  ALIGN_ITEMS_XXL_STRETCH,
] = stringsMap(AI, (v) => ALIGN_ + ITEMS_ + SIZES_LIST[4] + _ + v)

const AC = spaceSplit('start end center between around stretch')
export const [
  ALIGN_CONTENT_START,
  ALIGN_CONTENT_END,
  ALIGN_CONTENT_CENTER,
  ALIGN_CONTENT_BETWEEN,
  ALIGN_CONTENT_AROUND,
  ALIGN_CONTENT_STRETCH,
] = stringsMap(AC, (v) => ALIGN_ + CONTENT_ + v)
export const [
  ALIGN_CONTENT_SM_START,
  ALIGN_CONTENT_SM_END,
  ALIGN_CONTENT_SM_CENTER,
  ALIGN_CONTENT_SM_BETWEEN,
  ALIGN_CONTENT_SM_AROUND,
  ALIGN_CONTENT_SM_STRETCH,
] = stringsMap(AC, (v) => ALIGN_ + CONTENT_ + SIZES_LIST[0] + _ + v)
export const [
  ALIGN_CONTENT_MD_START,
  ALIGN_CONTENT_MD_END,
  ALIGN_CONTENT_MD_CENTER,
  ALIGN_CONTENT_MD_BETWEEN,
  ALIGN_CONTENT_MD_AROUND,
  ALIGN_CONTENT_MD_STRETCH,
] = stringsMap(AC, (v) => ALIGN_ + CONTENT_ + SIZES_LIST[1] + _ + v)
export const [
  ALIGN_CONTENT_LG_START,
  ALIGN_CONTENT_LG_END,
  ALIGN_CONTENT_LG_CENTER,
  ALIGN_CONTENT_LG_BETWEEN,
  ALIGN_CONTENT_LG_AROUND,
  ALIGN_CONTENT_LG_STRETCH,
] = stringsMap(AC, (v) => ALIGN_ + CONTENT_ + SIZES_LIST[2] + _ + v)
export const [
  ALIGN_CONTENT_XL_START,
  ALIGN_CONTENT_XL_END,
  ALIGN_CONTENT_XL_CENTER,
  ALIGN_CONTENT_XL_BETWEEN,
  ALIGN_CONTENT_XL_AROUND,
  ALIGN_CONTENT_XL_STRETCH,
] = stringsMap(AC, (v) => ALIGN_ + CONTENT_ + SIZES_LIST[3] + _ + v)
export const [
  ALIGN_CONTENT_XXL_START,
  ALIGN_CONTENT_XXL_END,
  ALIGN_CONTENT_XXL_CENTER,
  ALIGN_CONTENT_XXL_BETWEEN,
  ALIGN_CONTENT_XXL_AROUND,
  ALIGN_CONTENT_XXL_STRETCH,
] = stringsMap(AC, (v) => ALIGN_ + CONTENT_ + SIZES_LIST[4] + _ + v)

export const [
  ALIGN_SELF_START,
  ALIGN_SELF_END,
  ALIGN_SELF_CENTER,
  ALIGN_SELF_BASELINE,
  ALIGN_SELF_STRETCH,
  ALIGN_SELF_AUTO,
] = stringsMap(AI, (v) => ALIGN_ + SELF_ + v)
export const [
  ALIGN_SELF_SM_START,
  ALIGN_SELF_SM_END,
  ALIGN_SELF_SM_CENTER,
  ALIGN_SELF_SM_BASELINE,
  ALIGN_SELF_SM_STRETCH,
  ALIGN_SELF_SM_AUTO,
] = stringsMap(AI, (v) => ALIGN_ + SELF_ + SIZES_LIST[0] + _ + v)
export const [
  ALIGN_SELF_MD_START,
  ALIGN_SELF_MD_END,
  ALIGN_SELF_MD_CENTER,
  ALIGN_SELF_MD_BASELINE,
  ALIGN_SELF_MD_STRETCH,
  ALIGN_SELF_MD_AUTO,
] = stringsMap(AI, (v) => ALIGN_ + SELF_ + SIZES_LIST[1] + _ + v)
export const [
  ALIGN_SELF_LG_START,
  ALIGN_SELF_LG_END,
  ALIGN_SELF_LG_CENTER,
  ALIGN_SELF_LG_BASELINE,
  ALIGN_SELF_LG_STRETCH,
  ALIGN_SELF_LG_AUTO,
] = stringsMap(AI, (v) => ALIGN_ + SELF_ + SIZES_LIST[2] + _ + v)
export const [
  ALIGN_SELF_XL_START,
  ALIGN_SELF_XL_END,
  ALIGN_SELF_XL_CENTER,
  ALIGN_SELF_XL_BASELINE,
  ALIGN_SELF_XL_STRETCH,
  ALIGN_SELF_XL_AUTO,
] = stringsMap(AI, (v) => ALIGN_ + SELF_ + SIZES_LIST[3] + _ + v)
export const [
  ALIGN_SELF_XXL_START,
  ALIGN_SELF_XXL_END,
  ALIGN_SELF_XXL_CENTER,
  ALIGN_SELF_XXL_BASELINE,
  ALIGN_SELF_XXL_STRETCH,
  ALIGN_SELF_XXL_AUTO,
] = stringsMap(AI, (v) => ALIGN_ + SELF_ + SIZES_LIST[4] + _ + v)

const ORDERS = spaceSplit('first 0 1 2 3 4 5 last')
export const [
  ORDER_FIRST,
  ORDER_0,
  ORDER_1,
  ORDER_2,
  ORDER_3,
  ORDER_4,
  ORDER_5,
  ORDER_LAST,
] = stringsMap(ORDERS, (v) => ORDER_ + v)
export const [
  ORDER_SM_FIRST,
  ORDER_SM_0,
  ORDER_SM_1,
  ORDER_SM_2,
  ORDER_SM_3,
  ORDER_SM_4,
  ORDER_SM_5,
  ORDER_SM_LAST,
] = stringsMap(ORDERS, (v) => ORDER_ + SIZES_LIST[0] + _ + v)
export const [
  ORDER_MD_FIRST,
  ORDER_MD_0,
  ORDER_MD_1,
  ORDER_MD_2,
  ORDER_MD_3,
  ORDER_MD_4,
  ORDER_MD_5,
  ORDER_MD_LAST,
] = stringsMap(ORDERS, (v) => ORDER_ + SIZES_LIST[1] + _ + v)
export const [
  ORDER_LG_FIRST,
  ORDER_LG_0,
  ORDER_LG_1,
  ORDER_LG_2,
  ORDER_LG_3,
  ORDER_LG_4,
  ORDER_LG_5,
  ORDER_LG_LAST,
] = stringsMap(ORDERS, (v) => ORDER_ + SIZES_LIST[2] + _ + v)
export const [
  ORDER_XL_FIRST,
  ORDER_XL_0,
  ORDER_XL_1,
  ORDER_XL_2,
  ORDER_XL_3,
  ORDER_XL_4,
  ORDER_XL_5,
  ORDER_XL_LAST,
] = stringsMap(ORDERS, (v) => ORDER_ + SIZES_LIST[3] + _ + v)
export const [
  ORDER_XXL_FIRST,
  ORDER_XXL_0,
  ORDER_XXL_1,
  ORDER_XXL_2,
  ORDER_XXL_3,
  ORDER_XXL_4,
  ORDER_XXL_5,
  ORDER_XXL_LAST,
] = stringsMap(ORDERS, (v) => ORDER_ + SIZES_LIST[4] + _ + v)
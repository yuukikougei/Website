/**
 * アプリケーション内で使用するデータ定数
 * @description 画像パス、プロジェクト情報、会社情報などを一元管理します
 */

/**
 * 画像パス生成のヘルパー関数
 */
const getImagePath = (filename: string): string => {
  return import.meta.env.BASE_URL + `images/${filename}`;
};

/**
 * プロジェクト画像の定数
 */
export const PROJECT_IMAGES = {
  PRJ_001: getImagePath("PRJ_001.JPG"),
  PRJ_002: getImagePath("PRJ_002.JPG"),
  PRJ_003: getImagePath("PRJ_003.JPG"),
  PRJ_004: getImagePath("PRJ_004.JPG"),
  LOGO: getImagePath("LOGO.JPG"),
} as const;

/**
 * ホームページのスライドショー用画像リスト
 */
export const SLIDESHOW_IMAGES = [
  PROJECT_IMAGES.PRJ_001,
  PROJECT_IMAGES.PRJ_002,
  PROJECT_IMAGES.PRJ_003,
  PROJECT_IMAGES.PRJ_004,
] as const;

/**
 * プロジェクト情報の型定義
 */
export interface ProjectInfo {
  readonly id: number;
  readonly name: string;
  readonly image: string;
}

/**
 * 施工事例のプロジェクトデータ
 */
export const PROJECTS: readonly ProjectInfo[] = [
  {
    id: 1,
    name: "プロジェクト A",
    image: PROJECT_IMAGES.PRJ_001,
  },
  {
    id: 2,
    name: "プロジェクト B",
    image: PROJECT_IMAGES.PRJ_002,
  },
  {
    id: 3,
    name: "プロジェクト C",
    image: PROJECT_IMAGES.PRJ_003,
  },
  {
    id: 4,
    name: "プロジェクト D",
    image: PROJECT_IMAGES.PRJ_004,
  },
] as const;

/**
 * 会社情報の型定義
 */
export interface CompanyInfo {
  readonly name: string;
  readonly representative: string;
  readonly address: string;
  readonly phone: string;
  readonly fax: string;
  readonly businessContent: string;
}

/**
 * 会社情報データ
 */
export const COMPANY_INFO: CompanyInfo = {
  name: "ゆうき工芸",
  representative: "伊東",
  address: "〒 851-0301 長崎県長崎市深堀町 6 丁目 432 番地",
  phone: "095-832-3871",
  fax: "095-832-3872",
  businessContent: "船舶内装工事、オーダー家具製作",
} as const;
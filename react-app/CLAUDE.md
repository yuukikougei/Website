# プロジェクト基本情報

このプロジェクトは React + TypeScript + Vite で構築されたポートフォリオサイトです。

## 技術スタック
- **フロントエンド**: React 19、TypeScript、Vite
- **ルーティング**: React Router DOM
- **スタイリング**: CSS
- **リンタ**: ESLint with TypeScript support
- **デプロイ**: GitHub Pages (gh-pages)

# 共通コマンド

- `npm run dev`: 開発サーバー起動
- `npm run build`: プロジェクトのビルド実行 (TypeScript コンパイル + Vite ビルド)
- `npm run preview`: ビルド結果のプレビュー
- `npm run lint`: ESLint による静的解析実行
- `npm run deploy`: GitHub Pages へのデプロイ

# プロジェクト構造

```
react-app/
├── src/
│   ├── components/     # 共通コンポーネント (Header, Footer)
│   ├── pages/         # ページコンポーネント (HomePage, ServicesPage等)
│   ├── constants/     # 定数定義 (URLs等)
│   ├── assets/        # 静的ファイル
│   ├── App.tsx        # メインアプリケーション
│   └── main.tsx       # エントリーポイント
├── public/            # パブリックファイル
└── dist/              # ビルド出力先
```

# コードスタイル

- **ES6+ モジュール構文**（import/export）を使用
- **TypeScript** の型安全性を活用
- **関数コンポーネント** + **React Hooks** パターン
- **分割代入** を積極活用
- **camelCase** でJavaScript/TypeScript変数・関数名を統一
- **PascalCase** でReactコンポーネント名を統一
- **kebab-case** でCSSクラス名を統一

# TypeScript設定

- **strict** モードが有効
- **noUnusedLocals** および **noUnusedParameters** で未使用変数をチェック
- **jsx**: "react-jsx" (新しいJSX Transform)
- **target**: ES2022、**module**: ESNext

# ワークフロー

1. 開発時は `npm run dev` で開発サーバーを起動
2. 変更完了後は必ず `npm run lint` で静的解析を実行
3. ビルド前に `npm run build` でTypeScriptエラーを確認
4. デプロイは `npm run deploy` でGitHub Pagesに自動デプロイ

# GitHub Pages設定

- **base**: "/Website/" (vite.config.ts で設定)
- **homepage**: "http://yuukikougei.github.io/Website" (package.json で設定)
- **デプロイブランチ**: gh-pages
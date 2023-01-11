module.exports = {
  collectCoverage: false, // テストのカバレッジ情報出力  テストが遅くなる可能性
  globals: {}, // 全テスト環境で使用できるグローバル変数の配列を指定
  testEnvironment: 'node', // テスト実行時に使用されるテスト環境
  testPathIgnorePatterns: ['/node_modules/'], // テストスキップ対象を正規表現パターンの配列で指定
  verbose: true, // テスト結果の個別レポート出力
};

// https://doc.ebichu.cc/jest/docs/ja/configuration.html

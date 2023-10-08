module.exports = {
  "extends": ["taro/react"],
  "rules": {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "extends": ["taro/react"],
      // 在这里添加仅对.ts和.tsx文件生效的规则
      "rules": {
        // 添加特定于.ts和.tsx文件的规则
      }
    }
  ]
}

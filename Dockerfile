FROM node:22
# node.jsのバージョン指定
WORKDIR /review
# reviewという作業ディレクトリ作成

COPY . .
# 現在のディレクトリのファイルをコンテナの/reviewディレクトリにコピー
WORKDIR /review/next-app
# next-appディレクトリに移動
RUN npm install
# パッケージをインストール
CMD ["npm", "run", "dev"]
# コンテナ起動時にnpm run devを実行
EXPOSE 3000
# ポート3000を開放

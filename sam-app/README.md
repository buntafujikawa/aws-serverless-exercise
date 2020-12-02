# sam-app

https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html

```
# 雛形の作成
$ sam init

# ビルド
$ sam build

# ローカルで実行
$ sam local invoke

# 初回は設定を行ってからデプロイ
$ sam deploy --guided

# 2回目以降のデプロイ
$ sam deploy

# APIの呼び出しを含めた動作確認
$ sam local start-api

# リソースの削除
$ aws cloudformation delete-stack --stack-name sam-app
```

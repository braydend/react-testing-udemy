To remove extra properties added when testing (e.g. `data-test`) for production, follow the following steps:
- `npm i -D babel-plugin-react-remove-properties`
- `npm eject`
- Edit `package.json` to add the following under `"babel"`:
```
"env": {
      "production": {
        "plugins": [
          ["react-remove-properties", {"properties": ["data-test"]}]
        ]
      }
    },
```
- `npm run build`
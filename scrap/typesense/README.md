
```
docker pull typesense/typesense:0.20.0

export TYPESENSE_API_KEY=xyz
mkdir ./tmp/typesense-data
docker run -p 8108:8108 -v $(pwd)/tmp/typesense-data:/data typesense/typesense:0.20.0 \
  --data-dir /data --api-key=$TYPESENSE_API_KEY 

export TYPESENSE_HOST=http://localhost:8108
curl ${TYPESENSE_HOST}/health

curl "${TYPESENSE_HOST}/collections" \
      -X POST \
      -H "Content-Type: application/json" \
      -H "X-TYPESENSE-API-KEY: ${TYPESENSE_API_KEY}" -d '{
        "name": "emojis",
        "fields": [
          {"name": "char", "type": "string" },
          {"name": "name", "type": "string" },
          {"name": "codes", "type": "string" },

          {"name": "category", "type": "string", "facet": true },
          {"name": "group", "type": "string", "facet": true },
          {"name": "subgroup", "type": "string", "facet": true }
        ]
      }'

TYPESENSE_HOST=${TYPESENSE_HOST} TYPESENSE_API_KEY=${TYPESENSE_API_KEY} bash adding_emoji.sh

curl -H "X-TYPESENSE-API-KEY: ${TYPESENSE_API_KEY}" \
"${TYPESENSE_HOST}/collections/emojis/documents/search\
?q=smile&query_by=name"

curl -H "X-TYPESENSE-API-KEY: ${TYPESENSE_API_KEY}" \
"${TYPESENSE_HOST}/collections/emojis/documents/search\
?q=smile&query_by=name&facet_by=category"
```
#!/bin/bash
input="./tmp/emoji.jsonl"
while IFS= read -r line
do
  curl "${TYPESENSE_HOST}/collections/emojis/documents" \
        -X POST \
        -H "Content-Type: application/json" \
        -H "X-TYPESENSE-API-KEY: ${TYPESENSE_API_KEY}" \
        -d "$line"
done < "$input"
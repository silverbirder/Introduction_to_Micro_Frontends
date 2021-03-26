# B {#id1}

```javascript
var foo = function(num) {
    return num + num;
}
```

## C {#id1}

```uml
@startuml

	Class Stage
	Class Timeout {
		+constructor:function(cfg)
		+timeout:function(ctx)
		+overdue:function(ctx)
		+stage: Stage
	}
 	Stage <|-- Timeout

@enduml
```

![Sample](../../assets/images/drawio/sample.png)
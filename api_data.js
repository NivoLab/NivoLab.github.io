define({ "api": [
  {
    "type": "GET",
    "url": "/business",
    "title": "Get user business",
    "name": "GetBusiness",
    "group": "Business",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api-token",
            "description": "<p>header, body or query param *</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Business id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Business name</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "legal",
            "description": "<p>Is a legal business or not?</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nationalId",
            "description": "<p>National identity of the Business user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>Business mobile, contains country code. +989031231232</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Business email address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Business address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Business country</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>Business province</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>Business city</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": "<p>Business currency</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "logoImg",
            "description": "<p>Business logo image as base64</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "telephones",
            "description": "<p>Business telephones</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"id\": \"1006-072e4f63f57e47acbe382ec39fd0b537\",\n       \"name\": \"Bizliy\",\n       \"address\": \"somewhere\",\n       \"mobile\": \"+9809035465652\",\n       \"telephones\": [\n           \"22116548\"\n       ],\n       \"email\": \"test@gmail.com\",\n       \"nationalId\": \"001101100\",\n       \"legal\": false,\n       \"country\": \"ایران\",\n       \"province\": \"تهران\",\n       \"city\": \"تهران\",\n       \"currency\": \"تومان\",\n       \"logoImg:\": \"data:image/png;base64...\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/controller/business.controller.ts",
    "groupTitle": "Business"
  },
  {
    "type": "POST",
    "url": "/customer",
    "title": "Create customer",
    "name": "CreateCustomer",
    "group": "Customer",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api-token",
            "description": "<p>header, body or query param *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Customer name *</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "legal",
            "description": "<p>Is customer legal or not? حقیقی یا حقوقی</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nationalId",
            "description": "<p>Customer national id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "economicId",
            "description": "<p>Customer economicId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "registrationId",
            "description": "<p>Customer business registration</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>Customer mobile</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Customer email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Customer address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Customer description</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "tags",
            "description": "<p>List of customer tags</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"test_customer\",\n    \"legal\": true,\n    \"nationalId\": \"123123123123\",\n    \"economicId\": \"3213213343521\",\n    \"registrationId\": \"435132512351234\",\n    \"mobile\": \"+989031231232\",\n    \"email\": \"test@gmail.com\",\n    \"address\": \"somewhere\",\n    \"description\": \"description for customer\",\n    \"tags\": [\n        \"tag2\",\n        \"tag1\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\t{\n\t    \"message\": \"ok\",\n\t    \"customer\": {\n\t        \"_id\": \"1011-3091e7505fdb463b8445536d6b9835c2\",\n\t        \"name\": \"test_customer\",\n\t        \"nationalId\": \"123123123123\",\n\t        \"economicId\": \"3213213343521\",\n\t        \"mobile\": {\n\t            \"country\": \"+98\",\n\t            \"number\": \"9031231232\"\n\t        },\n\t        \"email\": \"test@gmail.com\",\n\t        \"registrationId\": \"435132512351234\",\n\t        \"address\": \"somewhere\",\n\t        \"description\": \"description for customer\",\n\t        \"legal\": true,\n\t        \"tagIds\": [\n\t            \"1014-a3fa8c6946734faa93068934dac2c6fb\",\n\t            \"1014-d38a01f9039d49a4af93fe6b8bd932db\"\n\t        ]\n\t    }\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/controller/customer.controller.ts",
    "groupTitle": "Customer"
  },
  {
    "type": "GET",
    "url": "/customer",
    "title": "Get customers list",
    "name": "GetCustomers",
    "group": "Customer",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api-token",
            "description": "<p>header, body or query param *</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "customers",
            "description": "<p>List of customers</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customers.id",
            "description": "<p>Customer id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customers.name",
            "description": "<p>Customer name</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "customers.legal",
            "description": "<p>Is a legal customer or not? حقیقی یا حقوقی</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customers.nationalId",
            "description": "<p>National identity of the customer</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customers.economicId",
            "description": "<p>Customer economic id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customers.registrationId",
            "description": "<p>Customer business registration id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customers.mobile",
            "description": "<p>Customer mobile, contains country code. +989031231232</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customers.email",
            "description": "<p>Customer email address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customers.address",
            "description": "<p>Customer address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customers.description",
            "description": "<p>Customer description</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "customers.tags",
            "description": "<p>List of customer tags</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\t{\n\t\t\"customers\": [\n\t\t\t{\n\t\t\t\t\"id\": \"1011-1c71331bc4204227af6145c4da37848d\",\n\t\t\t\t\"name\": \"test_customer\",\n\t\t\t\t\"legal\": true,\n\t\t\t\t\"nationalId\": \"123123123123\",\n\t\t\t\t\"economicId\": \"3213213343521\",\n\t\t\t\t\"mobile\": \"+989031231232\",\n\t\t\t\t\"email\": \"test@gmail.com\",\n\t\t\t\t\"address\": \"somewhere\",\n\t\t\t\t\"description\": \"description for customer\",\n\t\t\t\t\"tags\": [\n\t\t\t\t\t\"tag2\",\n\t\t\t\t\t\"tag1\"\n\t\t\t\t]\n\t\t\t},\n\t\t]\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/controller/customer.controller.ts",
    "groupTitle": "Customer"
  },
  {
    "type": "POST",
    "url": "/product",
    "title": "Create product",
    "name": "CreateProduct",
    "group": "Product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api-token",
            "description": "<p>header, body or query param *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Product name *</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "available",
            "description": "<p>Is product available for sale or not?</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "barcodes",
            "description": "<p>List of barcodes</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Product code</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "initialQuantity",
            "description": "<p>Product initial available count</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "purchasePrice",
            "description": "<p>Product purchase price</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "salePrice",
            "description": "<p>Product sale price</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tax",
            "description": "<p>Product tax percentage based on year 1396, 1397, 1398, 1399 which municipal is 0.03 and vat is 0.06, total 0.09.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Product category</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Product image as base64</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "tags",
            "description": "<p>List of product tags</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"name\": \"test_product\",\n\t\"barcodes\": [\n\t\t\"123\",\n\t\t\"321\"\n\t],\n\t\"initialQuantity\": 12,\n\t\"code\": \"sample_code\",\n\t\"purchasePrice\": 20000,\n\t\"salePrice\": 25000,\n\t\"taxYear\": 1397, // 1396, 1397, 1398, 1399\n\t\"category\": \"sample_category\",\n\t\"image\": \"data:image/png;base64...\",\n\t\"tags\": [\n\t\t\"tag1\",\n\t\t\"tag2\"\n\t],\n\t\"type\": \"PRODUCT\" // SERVICE\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\t{\n\t\t\"message\": \"ok\",\n\t\t\"product\": {\n\t\t\t\"_id\": \"1009-6506499e4ffe4700a8227c2cd4defa17\",\n\t\t\t\"barcodes\": [\n\t\t\t\t\"123\",\n\t\t\t\t\"321\"\n\t\t\t],\n\t\t\t\"categoryId\": \"1010-a727123192274fd9812bf06b4b3803ec\",\n\t\t\t\"image\": \"data:image/png;base64...\",\n\t\t\t\"code\": \"sample_code\",\n\t\t\t\"initialQuantity\": 12,\n\t\t\t\"name\": \"test_product\",\n\t\t\t\"purchasePrice\": 20000,\n\t\t\t\"salePrice\": 25000,\n\t\t\t\"tagIds\": [\n\t\t\t\t\"1014-d38a01f9039d49a4af93fe6b8bd932db\",\n\t\t\t\t\"1014-a3fa8c6946734faa93068934dac2c6fb\"\n\t\t\t],\n\t\t\t\"taxId\": \"1004-97standard\",\n\t\t\t\"type\": \"SERVICE\"\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/controller/product.controller.ts",
    "groupTitle": "Product"
  },
  {
    "type": "GET",
    "url": "/product",
    "title": "Get product list",
    "name": "GetProduct",
    "group": "Product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api-token",
            "description": "<p>header, body or query param *</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "products",
            "description": "<p>List of products</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.id",
            "description": "<p>Product id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.name",
            "description": "<p>Product name</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "products.available",
            "description": "<p>Is product available for sale or not?</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "products.barcodes",
            "description": "<p>List of barcodes</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.code",
            "description": "<p>Product code</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "products.initialQuantity",
            "description": "<p>Product initial available count</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "products.purchasePrice",
            "description": "<p>Product purchase price</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "products.salePrice",
            "description": "<p>Product sale price</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "products.tax",
            "description": "<p>Product tax percentage</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "products.price",
            "description": "<p>Product sale price with additional tax</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.category",
            "description": "<p>Product category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.image",
            "description": "<p>Product image as base64</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "products.tags",
            "description": "<p>List of product tags</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\t{\n\t\t\"products\": [\n\t\t\t{\n\t\t\t\t\"id\": \"1009-4cf696a963fa4a4d82d2a9d123963daa\",\n\t\t\t\t\"name\": \"sample product\",\n\t\t\t\t\"available\": true,\n\t\t\t\t\"barcodes\": [\n\t\t\t\t\t\"barcode1\",\n\t\t\t\t\t\"barcode2\"\n\t\t\t\t],\n\t\t\t\t\"code\": \"sample_code\",\n\t\t\t\t\"initialQuantity\": 5,\n\t\t\t\t\"purchasePrice\": 12000,\n\t\t\t\t\"salePrice\": 32000,\n\t\t\t\t\"tax\": 0.09,\n\t\t\t\t\"price\": 34880,\n\t\t\t\t\"image\": \"data:image/png;base64...\"\n\t\t\t\t\"category\": \"sample_category\",\n\t\t\t\t\"tags\": [\n\t\t\t\t\t\"tag 1\",\n\t\t\t\t\t\"tag 2\"\n\t\t\t\t]\n\t\t\t}\n\t\t]\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/controller/product.controller.ts",
    "groupTitle": "Product"
  }
] });

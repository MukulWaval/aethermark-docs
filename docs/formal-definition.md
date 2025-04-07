---
sidebar_position: 2
title: "Formal Definition"
---

```ebnf title="Syntax"

document = { block } ;

block = leaf_block | container_block ;

leaf_block =
      thematic_break
    | atx_heading
    | setex_heading
    | indented_code_block
    | fenced_code_block
    | html_block
    | link_reference_definition
    | paragraph
    | blank_line
    | table ;

container_block =
      block_quote
    | list_item
    | list ;

thematic_break =
    [ space ] , [ space ] , [ space ] ,
    (
        "-" , { whitespace } , "-" , { whitespace } , "-" , { whitespace } , { "-" , { whitespace } }
      | "_" , { whitespace } , "_" , { whitespace } , "_" , { whitespace } , { "_" , { whitespace } }
      | "*" , { whitespace } , "*" , { whitespace } , "*" , { whitespace } , { "*" , { whitespace } }
    ) ,
    newline ;

atx_heading =
    [ space ] , [ space ] , [ space ] ,
    "#" , [ "#" ] , [ "#" ] , [ "#" ] , [ "#" ] , [ "#" ] ,
    (
        newline
      | (
            whitespace , { whitespace } ,
            inline ,
            [ whitespace , { "#" } ] ,
            newline
        )
    ) ;

whitespace = space | tab ;
newline = [ "\n" ] , [ "\r" ] ;
space = " " ;
tab = "\t" ;
```

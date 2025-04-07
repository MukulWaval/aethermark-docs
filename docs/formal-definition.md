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

setex_heading =
    [ space ] , [ space ] , [ space ] ,
    paragraph_line ,
    { newline , [ space ] , [ space ] , [ space ] , paragraph_line } ,
    newline ,
    [ space ] , [ space ] , [ space ] ,
    ( setext_underline ) ,
    newline ;

setext_underline =
    "=" , { "=" } | "-" , { "-" } ;

indented_code_block =
    indented_chunk ,
    { { blank_line } , { indented_chunk } } ,
    newline ;

indented_chunk =
    indented_line , { newline , indented_line } ;

indented_line =
    space , space , space , space , { space } ,
    ( { charecter } ) ;

blank_line =
    [ space ] , [ space ] , [ space ] , [ space ] , { space } , newline ;

paragraph_line =
    character , { character } ;

character =
    non_whitespace
    | whitespace ;
whitespace = space | tab ;
non_whitespace = ? all characters except space, tab, newline, carriage return ?
newline = [ "\n" ] , [ "\r" ] ;
space = " " ;
tab = "\t" ;
```

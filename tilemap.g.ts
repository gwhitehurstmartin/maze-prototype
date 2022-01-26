// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100007050505050505080c0705050505050802020202020202020102020202020202010505050801050109010a0106010a010a0101010104010101010a010107050105080301010101070a050508010301010101010a010501010501010101010a010a01070a04010101010101010a050a010a010105010a0508010a0105050107050a08010101050103010a0101010301010a01070801010101010a0508010505010501010101010705050501010101010401010101090101010104010107080101010a050801070a010a01050101090101050a060101010a0105010101010107050105010a01040a010101030a0801060101010105010505080b07050501010705`, img`
2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. 2 2 2 2 . 2 . . . 2 . . . 2 . 
2 . . . . . . . . . 2 . . 2 2 . 
2 2 . . . . . 2 2 2 2 2 . . . . 
. . . 2 . 2 . . 2 . . . . . 2 . 
2 . 2 2 . . . . . . . . 2 2 2 . 
2 . . 2 . 2 2 2 . 2 . 2 2 . 2 2 
2 2 . . . 2 . . . 2 . . . . . . 
2 . 2 2 . . . . . 2 2 2 . 2 2 . 
2 . . . . . 2 2 2 2 . . . . . . 
. . . . . . . . . . . . 2 2 . . 
. 2 2 2 . 2 2 . 2 . 2 . . . . . 
2 2 . . . . 2 . 2 . . . . . 2 2 
. 2 . 2 . . 2 . . . . 2 2 . . . 
. . . 2 . 2 2 2 . 2 2 2 . . 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile11,myTiles.tile10,myTiles.tile13,myTiles.tile14], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile9":
            case "tile11":return tile11;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile8":
            case "tile10":return tile10;
            case "myTile10":
            case "tile12":return tile12;
            case "myTile11":
            case "tile13":return tile13;
            case "myTile12":
            case "tile14":return tile14;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

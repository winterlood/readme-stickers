//  ./@types/custom-types/index.d.ts
declare module '@global_types' {
  export namespace api_types{
    type firstType = 'sticker' | 'korean-developer' |'pin';
    type stickerType = 'dokdo'
    type koreanDeveloperType = {
      name : string
    }
  }
}

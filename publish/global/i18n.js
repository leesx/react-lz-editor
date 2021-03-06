"use strict";

module.exports = {
      lang: {
            'en': {
                  cancelText: "cancel",
                  OKText: "OK",

                  fullScreen: "full",
                  quitFullScreen: "quit",
                  sourceCode: "source",
                  preview: "prev",
                  selectedText: "Please make sure you have selected text before add a new link!",
                  selectedLink: "Please make sure you have selected a link before remove it!",
                  successToDraftBox: "Context have been saved to Draft-Box",
                  successPasteCleanText: "Pasted no-style text success, it would not be display if the image url is 'Anti-Leech'.",
                  errorUploadingFile: "!!!!!!!!!!!!ERROR UPLOADING!!!!!!!!!!!!",
                  directToURL: "Please input url",
                  directToURLTip: "Please enter the regular URL(with \"http://\" or \"https://\" preffix.)",
                  markdownTip: "Please markdown context here",
                  wrongImageAddress: 'Wrong image address!',

                  undo: "undo (Ctrl-Z/Cmd-Z)",
                  redo: "redo (Ctrl-Y/Cmd-Shift-Z)",

                  confirmToRemove: "Are you sure to remove the style of the selected text?",
                  doRemove: "Yes",
                  doNotRemove: "No",

                  pasteText: "Paste plain text ",
                  insertNoStyleText: "Please insert plain text content here",
                  pasteTipMsg: "Please paste the contents here and click the OK button",

                  H1: "Head level 1",
                  H2: "Head level 2",
                  H3: "Head level 3",
                  H4: "Head level 4",
                  refs: "Quotes",
                  ul: "Unordered list",
                  ol: "Ordered list",
                  pre: "predefined",
                  alignLeft: "left",
                  alignCenter: "center",
                  alignRight: "right",
                  alignJustify: "justify",
                  textBold: "bold",
                  textItalic: "italic",
                  textUnderline: "underline",
                  textCode: "code",

                  insertImageModalTitle: "Insert image",
                  previewImageModalTitle: "Preview images",
                  inPreviewProgress: "In processing and generate preview, 1 minute please...",
                  imageMasker: "Insert watermark images",
                  originalImage: "Insert original images",
                  validatedImage: "validated",
                  refreshImage: "refresh",

                  insertVideoTip: "Upload video",
                  insertVideoModalTitle: "Insert videos",

                  insertAudioTip: "Upload audio",
                  insertAudioModalTitle: "Insert audios",

                  addLink: "add link",
                  removeLink: "remove link",

                  previewMsg: 'content',
                  deleteDraftItem: "remove draft item",
                  draftTipMsg: "Draft Box--you can use Ctrl+S or Cmd+S save content to draft box, click to open.",
                  draftModalTitle: "Draft item list",
                  confirmUseDraft: "Current editor context will be replaced by your selected draft item, continue?",
                  draftCautionMsg: "Content auto save to draft box every minute, you could save it manually by Ctrl+S or Cmd+S, it would not saving while content length less than 20 characters.",

                  autoSave: "Automatically save to draft",

                  inPfopProgress: "Please wait while the picture is being processed",
                  pfopError: "An error occurred while pfoping image! Please refer to:",
                  btnAddBatch: "Batch add",
                  batchAddModalTitle: "Bulk upload pictures",
                  chkAutoWaterMask: "Automatic watermarking",

                  uploadingTipMsg: "Please upload as requested.",
                  limitCountTip: "Just keep $limit$ files, the others has been droped.",
                  btnUpload: "Click to upload",
                  manuallyUploadTip: "You can manually input an image, 'Enter' to confirm.",
                  limitAndTypeTip: "You can uploading $limit$ files.($type$)",

                  auto: "[AUTO]",
                  height: "height",
                  width: "width",
                  zoomTipMsg: "Zoomout or zoomin to $targetSize$ according image $accordingSize$ ",
                  pleaseUploading: "please uploading",
                  watermarkPos: {
                        north: "north",
                        northWest: "north west",
                        northCenter: "north center",
                        northEast: "north east",
                        center: "center",
                        west: "west",
                        centerCenter: "absolute center",
                        east: "east",
                        south: "south",
                        southWest: "south west",
                        southCenter: "south center",
                        southEast: "south east"
                  }
            },
            'zh-CN': {
                  cancelText: "取消",
                  OKText: "确定",

                  fullScreen: "全屏",
                  quitFullScreen: "退出全屏",
                  sourceCode: "源码",
                  preview: "预览",
                  selectedText: "创建链接前请先选中链接文字！",
                  selectedLink: "移除链接前请先选中链接！",
                  successToDraftBox: "编辑器内容已更新到保险库中",
                  successPasteCleanText: "已经清空样式并成功粘贴，可能部分图片因原网站防盗链功能暂未显示。",
                  errorUploadingFile: "！！！！！！！！！！上传文件错误！！！！！！！！！！",
                  directToURL: "请输出你要跳转的链接",
                  directToURLTip: "请输入符合规范的网址链接（以“http://” 或 “https://”为前导）",
                  markdownTip: "请在这里编辑您的markdown内容",
                  wrongImageAddress: '图片地址错误！',

                  undo: "撤销（Ctrl-Z，Cmd-Z）",
                  redo: "重做（Ctrl-Y，Cmd-Shift-Z）",

                  confirmToRemove: "确认移除所选择文字的样式？",
                  doRemove: "确认移除",
                  doNotRemove: "取消操作",

                  pasteText: "纯文本粘贴",
                  insertNoStyleText: "请插入无样式文本内容",
                  pasteTipMsg: "请在这里粘贴内容后点击确定按钮",

                  H1: "标题1",
                  H2: "标题2",
                  H3: "标题3",
                  H4: "标题4",
                  refs: "引用",
                  ul: "无序列表",
                  ol: "有序列表",
                  pre: "区段",
                  alignLeft: "左对齐",
                  alignCenter: "居中",
                  alignRight: "右对齐",
                  alignJustify: "两端对齐",
                  textBold: "加粗",
                  textItalic: "斜体",
                  textUnderline: "下划线",
                  textCode: "等宽字体",

                  insertImageModalTitle: "插入图片",
                  previewImageModalTitle: "图片预览",
                  inPreviewProgress: "图片正在处理并生成预览，请稍等片刻...",
                  imageMasker: "插入水印图片",
                  originalImage: "插入原始图片",
                  validatedImage: "确认无误",
                  refreshImage: "手动刷新",

                  insertVideoTip: "上传视频",
                  insertVideoModalTitle: "插入视频",

                  insertAudioTip: "上传音频",
                  insertAudioModalTitle: "插入音频",

                  addLink: "增加链接",
                  removeLink: "移除链接",

                  previewMsg: '内容预览',
                  deleteDraftItem: "删除",
                  draftTipMsg: "保险库——编辑器中按Ctrl+S或Cmd+S存入保险库，点击打开保险库以继续",
                  draftModalTitle: "编辑器保险库条目列表：",
                  confirmUseDraft: "确定后编辑器内容将会被最后一次保存的内容替换，若有更改，替换后将不可恢复，是否继续？",
                  draftCautionMsg: "编辑器内容默认一分钟保存一次，可以手动Ctrl+S或Cmd+S保存，内容小于20字时将不会保存在保险库中；列表中不用数据请及时删除维护，否则会影响保险库保存容量！",

                  autoSave: "自动保存库",

                  inPfopProgress: "图片正在处理请稍等片刻",
                  pfopError: "持久保存图片过程中发生错误！请参考：",
                  btnAddBatch: "批量添加",
                  batchAddModalTitle: "批量上传图片",
                  chkAutoWaterMask: "自动加水印",

                  invalidUrl: "验证您填写的URL地址无效，请检查！",
                  supportMimeMsg: "只能上传指定文件，请重新选择！参考",
                  invalidType: "不合法的上传资源类型！",
                  invalidFileType: "必须填写fileType（字符串型）：image或video或audio！",

                  uploadingTipMsg: "请根据要求上传。",
                  limitCountTip: "只能保留最后上传的 $limit$ 个文件，其他超出的已经被顶掉。",
                  btnUpload: "点击上传",
                  manuallyUploadTip: "您还可以手动输入文件资源地址，输入完毕按回车键确认",
                  limitAndTypeTip: "您可以上传 $limit$ 个类型为 $type$ 的文件。",

                  auto: "[自动]",
                  height: "高度",
                  width: "宽度",
                  zoomTipMsg: "按照图片$accordingSize$自动缩放到$targetSize$",
                  pleaseUploading: "请上传图片",
                  watermarkPos: {
                        north: "上",
                        northWest: "左上",
                        northCenter: "中上",
                        northEast: "右上",
                        center: "中",
                        west: "左中",
                        centerCenter: "中心",
                        east: "右中",
                        south: "下",
                        southWest: "左下",
                        southCenter: "中下",
                        southEast: "右下"
                  }
            }
      }
};
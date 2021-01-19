@Main
{
	@Prinln("准备上传到仓库")
	@Command("git add .")
	@Command("git commit -m add files")
	@Command("git push origin master")
	@Prinln("上传完成")
}
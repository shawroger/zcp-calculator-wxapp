@Main
{
	@Println("准备上传到仓库")
	@Command("git add .")
	@Command("git commit -m add-readme.md")
	@Command("git push origin master")
	@Println("上传完成")
}
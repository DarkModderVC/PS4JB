try
{	
	for(var _ = 0; _ < 1024; _++)
    {
        var impl = create_impl();
        var s = {a: impl};
		trigger(s);
    }
}
catch(e)
{
    print(e);
}

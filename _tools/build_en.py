# Copies each Arabic page's <style> into its English twin (between markers) and inserts the English footer.
import re, sys, os
root = sys.argv[1]
FOOTER = '''<!--FOOTER--><footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div><img src="../assets/jaga-logo-white.png" alt="Jordan Academy for Government Administration" style="height:92px;margin-bottom:16px"><ul><li><a href="#">About Us</a></li><li><a href="pathway.html">Pathways</a></li><li><a href="courses.html">Courses</a></li></ul></div>
      <div><h4>Stay Updated</h4><ul><li><a href="#">News</a></li><li><a href="#">Help Center</a></li><li><a href="#">Contact Us</a></li></ul></div>
      <div><h4>Legal</h4><ul><li><a href="#">Terms of Service</a></li><li><a href="#">Privacy Policy</a></li><li><a href="#">Data Retention Summary</a></li></ul></div>
      <div><h4>Social Media</h4><div class="socials"><a href="#" aria-label="Facebook"><i data-lucide="facebook"></i></a><a href="#" aria-label="Instagram"><i data-lucide="instagram"></i></a><a href="#" aria-label="LinkedIn"><i data-lucide="linkedin"></i></a></div></div>
    </div>
    <div class="footer-bottom"><span>Copyright © 2026 JAGA. All Rights Reserved.</span></div>
  </div>
</footer><!--/FOOTER-->'''
for p in ['index', 'pathway', 'pathways', 'courses', 'course', 'activity']:
    ar = open(os.path.join(root, p + '.html'), encoding='utf-8').read()
    style = ar[ar.index('<style>'):ar.index('</style>') + 8].replace('url(assets/', 'url(../assets/')
    fp = os.path.join(root, 'en', p + '.html')
    en = open(fp, encoding='utf-8').read()
    en = re.sub(r'<!--PAGE_STYLE:%s-->(.*?<!--/PAGE_STYLE-->)?' % p, lambda m: f'<!--PAGE_STYLE:{p}-->{style}<!--/PAGE_STYLE-->', en, flags=re.S)
    en = re.sub(r'<!--FOOTER-->(.*?<!--/FOOTER-->)?', lambda m: FOOTER, en, flags=re.S)
    open(fp, 'w', encoding='utf-8').write(en)
    print(p, 'ok')

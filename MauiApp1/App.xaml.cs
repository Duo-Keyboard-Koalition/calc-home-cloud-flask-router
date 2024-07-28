namespace MauiApp1
{
    public partial class App : Application
    {
        public App()
        {
            InitializeComponent();

            var navpage = new NavigationPage(new MainPage());
            navpage.BarBackgroundColor = Color.FromHex("#2196F3");
            navpage.BarTextColor = Colors.White;
            MainPage = new TabbedPageDemo();
        }
    }
}
